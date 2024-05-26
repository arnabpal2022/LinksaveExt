# LinkSave

## Overview

The URL Saver Extension is a simple browser extension that allows users to save the current URL with a single click and view a list of all saved URLs. This extension is useful for quickly bookmarking pages for later reference without cluttering your main bookmarks folder.

## Features

- Save Current URL: Save the URL of the currently active tab with a single click.
- View Saved URLs: View a list of all saved URLs in a popup window.
- Delete URLs: Remove URLs from the saved list.
- Persistent Storage: Saved URLs are stored persistently using Firebase Firestore.

## Tech Stacks

`Manifest V3` `Node.js` `Next.js` `Firebase`

## Installation

1. Clone This Repository.
```bash
git clone https://github.com/arnabpal2022/LinksaveExt.git
```
2. Configure Your Firebase Project and Configure Firestore.
3. Pass Your Credentials on Firebase.js file.
```javascript
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};
```
4. Install necessary Packages and Libraries.
```bash
npm install
```
5. Open Chrome and go to `chrome://extensions/`.
6. Enable "Developer mode" in the top right corner.
7. Click "Load unpacked" and select the directory where you cloned or downloaded the repository.
8. Run The Project.
```bash
npm run dev
```
9. Now you can work with the extension.

## License

This Project is Currently Under [MIT License](https://github.com/arnabpal2022/LinksaveExt/LICENSE). 

Copyright (c) 2024 Arnab Pal
