# Real-Time Spotify Music Tracking System

This project allows you to track currently playing music on Spotify in real-time. It uses Spotify's API to fetch the details of the currently playing track, which are then displayed on a stylized card.

## Requirements

1. PHP installed on your server
2. Spotify API token for authorization
3. Internet access to download dependencies

## Setup

1. Clone this repository or download the ZIP file.
2. Place all the files in your web server directory.
3. Replace `<token>` in the `get_api.php` file with your Spotify API token.
4. Open your web browser and navigate to the web server's address to see the application in action.

## Files Included

- `index.html`: The main HTML file containing the structure of the page.
- `style.css`: CSS file for styling.
- `script.js`: JavaScript file for handling the dynamic content.
- `get_api.php`: PHP file for communicating with the Spotify API.
  
## How It Works

1. The JavaScript function `fetchCurrentTrack` fetches the currently playing track from Spotify every 3 seconds.
2. The `get_api.php` file makes the actual API call to Spotify.
3. The `style.css` file styles the card that shows the track details.
4. The `index.html` file holds the structure of the webpage and links all other files.

## Contributing

Feel free to fork this repository and make your own changes, or open an Issue if you have suggestions or find a bug.

## License

This project is open-source, feel free to use it and modify it as you wish.
