let currentTrackUrl;

function fetchCurrentTrack() {
    $.get("./src/get_api.php", function(response) {
        const data = JSON.parse(response);
        const root = document.getElementById("app");

        if (data.is_playing) {
            if (currentTrackUrl !== data.item.preview_url) {
                const artists = data.item.artists.map(artist => artist.name).join(", ");
                root.innerHTML = generateMusicCard(data, artists);
                currentTrackUrl = data.item.preview_url;
                playSound("./src/loop.mp3");
                setTimeout(() => {
                    playSound(data.item.preview_url);
                }, 1500);
            } else {
                currentTrackUrl = data.item.preview_url;
            }
        } else {
            stopSound();
            root.innerHTML = generateNoMusicCard();
        }
    });
}

function playSound(trackUrl) {
    const audioElement = document.getElementById("audio");
    audioElement.src = trackUrl;
    audioElement.muted = false;
    audioElement.loop = true;
    audioElement.volume = 1;
    audioElement.play();
}

function stopSound() {
    const audioElement = document.getElementById("audio");
    audioElement.muted = true;
}

function setVolume(volumeValue) {
    const audioElement = document.getElementById("audio");
    audioElement.volume = volumeValue / 100;
}

function generateMusicCard(data, artists) {
    // Your HTML template for the music card
}

function generateNoMusicCard() {
    // Your HTML template for the no-music card
}
