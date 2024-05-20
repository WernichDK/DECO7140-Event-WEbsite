const songuplab = document.getElementById('songuplab');
const audio_file = document.getElementById('audio_file');
const my_website_code = "wen123";
const baseURL = "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/musicians/";
const postMusicAudioMethod = "POST";

const triggerFileInput = () => {
    audio_file.click();
};

const handleFileChange = () => {
    let fileName = audio_file.files[0].name;

    if (fileName.length > 20) {
        fileName = fileName.substring(0,17) + '...';
    }
    songuplab.textContent = fileName;
};



const handleFormSubmit = event => {
    event.preventDefault();

    let formData = new FormData(event.target);
    formData.append("website_code", my_website_code);

    const requestOptions = {
        method: postMusicAudioMethod,
        body: formData,
        redirect: 'follow'
    }

    fetch(baseURL, requestOptions)
    .then(response => response.json().then(data => {
        if (!response.ok) {
            console.log("Server response:", data);
            throw new Error("Network response was not ok");
        }
        return data;
    }))
    .then(data => {
        console.log(data.description);
        submitSong.reset();
        songuplab.textContent = "Audio File:"
        alert('Your song "${data.description}" was submitted successfully!');
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error.message);
        alert("Error submitting song. Please try again.");
    });


    
};


songuplab.addEventListener('click', triggerFileInput);
audio_file.addEventListener('change', handleFileChange);
submitSong.addEventListener("submit", handleFormSubmit);

const getUploadedSongs = () => {
    const queryParams = {
        website_code: my_website_code,
    }
    const queryString = new URLSearchParams(queryParams).toString();
    const urlWithParams = baseURL+"?"+queryString;
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }

    fetch(urlWithParams, requestOptions)
    .then(response => {
        if (!response.ok) {
                throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(song => console.log(song))
    .catch(error => {
        console.error("Error processing song:", error.message);
        alert("There was a problem loading events. Please referesh the page to try again.");
    });
};