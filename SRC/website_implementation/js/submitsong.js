const songuplab = document.getElementById('songuplab');
const audio_file = document.getElementById('audio_file');
const my_website_code = "wen123";
const baseURL = "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/musicians/";
const postMusicAudioMethod = "POST";
const uploaded_songs = document.getElementById('uploaded_songs');

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
        songuplab.textContent = "Audio File:";
        alert(`Your song "${data.description}" was submitted successfully!`);
    })
    .then(data => {
        getUploadedSongs();
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error.message);
        alert("Error submitting song. Please try again.");
    });


    
};




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
    .then(song => {
        console.log(song);
        while (uploaded_songs.firstChild) {
            uploaded_songs.removeChild(uploaded_songs.firstChild);
        }
        song.forEach(song => {
            const songTemplate = `
                <article class="col-12 col-md-12 col-lg-6">
                    <div class="card" role="group" aria-labelledby="card${song.id}-title" aria-describedby="card${song.id}-desc">
                        <h2 class="card-header p-2" id="card${song.id}-title"><strong>Title:</strong>${song.name}</h2>
                        <audio src="${song.audio_file}" alt="${song.name}"><source src="${song.audio_file}" type="audio/mp3"></audio>
                        <p class="card-body-text px-2"><strong>Genre:</strong> ${song.genre}</p>
                        <p class="card-body-text px-2"><strong>Description:</strong> ${song.description}</p>
                        <p class="card-body-text px-2"><strong>Message:</strong> ${song.message}</p>

                    </div>
                </article>
            `;
            uploaded_songs.innerHTML += songTemplate;
        })
    })
    .catch(error => {
        console.error("Error processing song:", error.message);
        alert("There was a problem loading songs. Please referesh the page to try again.");
    });
};

songuplab.addEventListener('click', triggerFileInput);
audio_file.addEventListener('change', handleFileChange);
submitSong.addEventListener("submit", handleFormSubmit);

getUploadedSongs();