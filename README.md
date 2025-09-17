## Classlink

This repository contains a collection of offline games that can be played when you have limited or no internet connection. The games are tested to 100% work with Chromebook and Windows platforms. To get started, follow the instructions below:

### Quick Start

1. Click the green 'Code' button, and click 'Download Zip' in the dropdown.
2. Download the entire repository as a zip file.
3. Extract the contents of the zip file.
4. Copy all the extracted content and paste it into a new folder.
5. Open the file named `Gams.html` located in the new folder.
6. This will give you access to a wide range of games, including Flash games.

### Credits

- The offline Flash games utilize the Ruffle Flash Player emulator.
- The clean and stylish user interface of the site is made possible by the new.css classless CSS library.

### Features

The offline games repository offers the following features:

- Opening games in an about blank page.
- Customizable title and favicon settings.
- Dark and light mode options.

### Fun Game List

Here are some of the most fun games available in this repository:
1. Cookie Clicker
2. Slope
3. Tube Jumpers
4. Super Mario 64
...and more!

### For Coders :)

Making games available offline can be a challenging task due to security restrictions. When running games locally using the `file://` protocol, fetching external resources is not allowed for security reasons. However, there is a workaround that enables loading JavaScript files locally.

To make the games in this repository playable offline, a method utilizing data URLs was employed. The game data is embedded directly into JavaScript files using data URLs. This approach allows the games to be self-contained within the page, eliminating the need for external resource fetching.

The JavaScript files in this repository contain the game data encoded as data URLs. When the page is loaded, these data URLs are converted to blob URLs using a conversion function. Blob URLs can be fetched locally since they are generated within the page itself.

By using this technique, the repository includes various games, including those built with Flash. The Flash games utilize the Ruffle Flash Player emulator, allowing them to be played offline without requiring an internet connection.

I hope this approach provides an enjoyable offline gaming experience for coders and gamers alike.

###### Repository originally created by mountain658; this README updated for Classlink, with the assistance of ChatGPT.
