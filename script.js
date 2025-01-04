let isDarkTheme = false;

function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('dark-theme', isDarkTheme);
    document.querySelectorAll('.video-card').forEach(card => {
        card.classList.toggle('dark-theme', isDarkTheme);
    });
    document.querySelector('.theme-toggle').innerText = isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme';
}

function uploadVideo() {
    const title = document.getElementById('video-title').value;
    const description = document.getElementById('video-description').value;

    if (!title || !description) {
        alert('Please fill out all fields.');
        return;
    }

    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';
    if (isDarkTheme) videoCard.classList.add('dark-theme');

    videoCard.innerHTML = `
        <h3 class="video-title">${title}</h3>
        <p class="video-description">${description}</p>
    `;

    document.getElementById('videos').appendChild(videoCard);

    document.getElementById('video-title').value = '';
    document.getElementById('video-description').value = '';
    document.getElementById('video-file').value = '';
}
