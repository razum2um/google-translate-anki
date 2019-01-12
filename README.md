# Google Translate + Anki <3

[![Build Status](https://travis-ci.org/razum2um/google-translate-anki.svg?branch=master)](https://travis-ci.org/razum2um/google-translate-anki)

This chrome extension behaves *exactly* like google translate (2.0.7), in fact, it has been reverse engineered and patched.
Now it allows adding the found word to [Anki](https://apps.ankiweb.net/) *desktop* app.

## Setup

1) You must install [AnkiConnect](https://ankiweb.net/shared/info/2055492159) plugin to enable HTTP protocol.
2) The desktop app (afaik) cannot be daemonized, so it should be running while adding (extension doesn't cache anything).
3) Install unpacked extension

![install-unpacked-img](https://developer.chrome.com/static/images/get_started/load_extension.png)

4) Setup the URL (default is `http://localhost:8765`), deck and model

![options-screenshot](https://raw.github.com/razum2um/google-translate-anki/master/options.png)

## Usage

Just click on target language translation word.
The source will be saved as "Front", the translation as "Back" card's fields.
After that, the target word becomes green (or red in case of duplication or another error).

![bubble-screenshot](https://raw.github.com/razum2um/google-translate-anki/master/bubble.png)

Note, that adding the card takes ~3sec on my MBP, be patient :)

## Why not AnkiWeb?

Don't ask for adding cards right into AnkiWeb, [authors explicitly don't want it](https://anki.tenderapp.com/discussions/ankiweb/1886-issue-with-saving-cards-via-rest-api)
