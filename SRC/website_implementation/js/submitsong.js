const songuplab = document.getElementById('songuplab');
const audio_file = document.getElementById('audio_file');

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

songuplab.addEventListener('click', triggerFileInput);
audio_file.addEventListener('change', handleFileChange);

