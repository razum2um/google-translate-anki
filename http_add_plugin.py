#!/usr/bin/env python
# -*- coding: utf-8 -*-

from __future__ import print_function
import sys, os, re, codecs, json, threading

try:
    from BaseHTTPServer import BaseHTTPRequestHandler
except ImportError:
    from http.server import BaseHTTPRequestHandler

try:
    from SocketServer import TCPServer as HTTPServer
except ImportError:
    from http.server import HTTPServer

import aqt, anki



#### Configuration ####

# Listen on this port
PORT = 8001

# True = allow duplicate notes to be added
ALLOW_DUPLICATES = False

# Debugging
DEBUG = True
LOG_FILE = os.path.join(os.path.dirname(os.path.realpath(__file__)), "http_add_plugin.log");

#### Code ####

def writeLog(text):
    if DEBUG:
        file = codecs.open(LOG_FILE, "a", "utf-8-sig")
        file.write(text + "\n")
        file.close()

def showTooltip(text, timeOut=3000):
    aqt.utils.tooltip("<b>Http Import</b><br />" + text, timeOut)

class Anki:
    def addDefaultNote(self, fields, tags=list()):
        return self.addNote(self.curDeckName(), self.curModelName(), fields, tags)

    def addNote(self, deckName, modelName, fields, tags=list()):
        note = self.createNote(deckName, modelName, fields, tags)
        if note is not None:
            collection = self.collection()
            self.window().checkpoint("Add Note from Real-Time Import")
            collection.addNote(note)
            collection.autosave()
            showTooltip("Note added.", 1000);
            writeLog("Note added.")
            return note.id

    def createNote(self, deckName, modelName, fields, tags=list()):
        model = self.models().byName(modelName)
        if model is None:
            return None

        deck = self.decks().byName(deckName)
        if deck is None:
            return None

        note = anki.notes.Note(self.collection(), model)
        note.model()['did'] = deck['id']
        note.tags = tags

        try:
            for name, value in fields.items():
                note[name] = value
        except:
            showTooltip("Error, current note type does not contain the following field: '" + name + "'", 5000);
            writeLog("Anki.createNote: Error, current note type does not contain the following field: '" + name + "'")
            return None

        dupOrEmpty = note.dupeOrEmpty()

        if dupOrEmpty == 1:
            showTooltip("Error, first field in note is empty!");
            writeLog("Anki.createNote: first field in note is empty!")
            return note
        elif dupOrEmpty == 2 and not ALLOW_DUPLICATES:
            showTooltip("Error, duplicate note!");
            writeLog("Anki.createNote: Error, duplicate note!")
        else:
            return note

    def window(self):
        return aqt.mw

    def collection(self):
        return self.window().col

    def models(self):
        return self.collection().models

    def decks(self):
        return self.collection().decks

    def curModelID(self):
        return self.collection().conf['curModel']


    def curDeckID(self):
        return self.collection().conf['curDeck']


    def curModel(self):
        return self.models().get(self.curModelID())


    def curDeck(self):
        return self.decks().get(self.curDeckID())


    def curModelName(self):
        return self.curModel()['name']


    def curDeckName(self):
        return self.curDeck()['name']

# simple web server

class Handler(BaseHTTPRequestHandler):
    def __init__(self, *args):
        self.anki = Anki()
        BaseHTTPRequestHandler.__init__(self, *args)

    def _set_headers(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()

    def do_GET(self):
        self._set_headers()
        self.wfile.write("{}".encode())

    def do_HEAD(self):
        self._set_headers()
        
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        note = json.loads(post_data)
        tags = note.pop('tags', list())
        noteId = self.anki.addDefaultNote(note, tags)
        writeLog("note={0}, id={1}", note, noteId)

        self._set_headers()
        self.wfile.write("{\"status\": \"ok\", \"note\": \"{0}\"}".format(noteId).encode())

httpd = HTTPServer(("", PORT), Handler)
writeLog("-----------------------------------------------------------")
writeLog("http_add_plugin: serving at port {0}".format(PORT))

thread = threading.Thread(target=httpd.serve_forever, args=())
thread.daemon = True
thread.start()