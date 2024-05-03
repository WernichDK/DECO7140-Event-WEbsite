document.addEventListener("DOMContentLoaded", function() {
    var musscrol = document.querySelector(".musscrol");

    musscrol.addEventListener("scroll", function() {
        if (musscrol.scrollTop === (musscrol.scrollHeight - musscrol.clientHeight)) {
            musscrol.scrollTop = 0;
        }
    });
});