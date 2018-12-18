# MyReads Project

MyReads is a ReactJS app that will let you keep track of the books or reading papers you already read, or want to read and even those that are still keeping you awake during the night.

This app connects to 3rd party services in order to find your readings. You can re-organize them into 3 categories: Currently Reading, Reading and Read. If you choose the none option, your book will get 'deleted' from your list.

## TL;DR

To get this app up and running follow these steps:

* execute this command from Terminal or CMD in the root folder: `npm install`
* start your service with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── components # folder for dumb components
    │   ├── Book # Component for rendering a book card
        │   └── MoveOptions # Component that renders the menu options
    │   └── BookShelf # Component for grouping books within a bookshelf
    ├── containers # folder for containers
    │   ├── HomePage # Home page container component
    │   └── SearchPage # Search page container component
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app.
    ├── App.test.js # Used for testing.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── icons # Helpful images for youther app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # You should not need to modify this file.
```

