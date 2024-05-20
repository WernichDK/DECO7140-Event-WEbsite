document.addEventListener("DOMContentLoaded", function() {
    function addPlay() {
        var playlispop = document.getElementById("playlispop");
        playlispop.classList.toggle("show");
    }

    var addToPlaylistButton = document.getElementById("addToPlaylist");
    if (addToPlaylistButton) {
        addToPlaylistButton.addEventListener("click", addPlay);
    }
});