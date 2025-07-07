// Fetch data from localhost:8080/ and append three sections to <main>

fetch('http://localhost:8080/')
    .then(response => response.text())
    .then(html => {
        document.querySelector('main').innerHTML = html;

    })
    .catch(error => {
        console.error('Error fetching sections:', error);
    });