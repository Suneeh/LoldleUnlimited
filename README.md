# Loldle

This repository is basically a clone of the super popular [loldle](https://loldle.net) classic mode written in Angular. The only 'twist' is that it refreshes the champion you have to guess every time you reload the page.

Check it out! It is deployed [here](https://loldle.suneeh.de/).

# Contributing

## Clone the repo

Get the code of this git repository to your machine.

`git clone https://github.com/Suneeh/LoldleUnlimited.git`

## Install dependancies

Use `npm install` to install all packages and dependancies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Deployment

Run `npm run deploy` after you renamed the `deployment.exmaple.sh` to `deployment.sh`. Also be sure to adjust this to your needs as shown in the [example](https://github.com/Suneeh/LoldleUnlimited/blob/main/deploy.example.sh).

# TODOs

- Check for an API with Quotes, Skins, Sounds, Spellnames, Spell Icons and add them to championData
- Add the new info to build hints after 5-10-15 guesses.
- ~~Show some "You Won" Dialogue that let's you restart the game (idealy without reloading the page)~~
- ~~Build an API Scraper of the league api to fetch titles and image names correctly and reactivate the title feature~~
- ~~Make the app visually pleasing~~
- ~~Make ENTER Key work for guessing Champions~~
- ~~Write Unit Tests for all methods~~
- ~~Load images faster~~
- ~~Check [this](https://angular.dev/guide/defer) to load images on idle or on focus of the input, rather than just loading them eagerly~~
- ~~Build a Champion Guess Component with Signal Inputs instead of calling the Validation Function in the Template~~
