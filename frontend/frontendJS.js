function showScreen(screenId) {
    //hide all screens on start
    document.querySelectorAll('.screen, #front-page').forEach(screen => {
        screen.style.display = 'none';
    });
    //Show the selected screen
    document.getElementById(screenId).style.display = 'block';
    //show or hide images based on the screenId
    if (screenId === 'front-page') {
        document.querySelector('#Charles').style.display = 'block';
        document.querySelector('#Justin').style.display = 'block';
    } else {
        document.querySelector('#Charles').style.display = 'none';
        document.querySelector('#Justin').style.display = 'none';
    }
}
fetch(`/fighters/${fighterName}`)
    .then(response => response.json())
    .then(data => {
    console.log(data);
    })
    .catch(error => console.error('Error fetching fighter data:', error));

var btn = document.getElementById("Rate-this-Fighter");
    btn.addEventListener("click", function(){
        var ratingRequest = new XMLHttpRequest();
    ratingRequest.open('GET', `/fighters/${fighterName}`);
    ratingRequest.onload = function(){
        var userRating = JSON.parse(ratingRequest.responseText);
        
};
ratingRequest.send();
})