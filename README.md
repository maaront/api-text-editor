# JATE - Just Another Text Editor

## Description
JATE is a browser-based text editor built as a Progressive Web Application (PWA). It serves as a reliable, fast, and engaging tool to create, edit, and save text documents directly in your browser. With its offline functionality and various data persistence techniques, it offers a seamless experience for users. JATE uses JavaScript for client-side logic, the idb package for IndexedDB interaction, and CodeMirror for the text editor view.

<img width="952" alt="Screenshot of JATE" src="https://github.com/maaront/api-text-editor/assets/35611834/3b0ed5cc-61c5-4e1a-96b5-de623a89a046">


## Local Installation
1. If you'd like to run JATE locally, clone the repository: `git clone https://github.com/maaront/api-text-editor`
2. Navigate to the project directory: `cd jate`
3. Install the dependencies: `npm install`
4. Start the application: `npm start`

## Usage
1. Visit the deployed application at: `https://pwa-text-editor-mt-1398e0ab9943.herokuapp.com/`
2. On the homepage, the text editor is ready for you to start typing.
3. The text you type is automatically saved in the browser.
4. Even if you go offline or refresh the page, your text will still be there when you come back.
5. You can install the app by clicking the 'Install!' button for offline use

## Features
- Create, edit, and save text documents in the browser.
- Progressive Web Application (PWA) that works offline.
- Data persistence using IndexedDB and localStorage.
- CodeMirror-powered text editor with JavaScript syntax highlighting.

## Technologies Used
- JavaScript
- CodeMirror
- idb (IndexedDB wrapper)
- Service Workers for offline support
- Webpack for bundling

## Credits
This project was developed by Matt Turner, and based on a starter project provided by EdX and Case Western Reserve University.

## License
This project is licensed under the MIT License.
