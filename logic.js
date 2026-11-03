const map = L.map('map').setView([-14.235, -51.925], 7);

L.tileLayer('https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=cb1_4vv3_1_7388f95c8d05b649f38cdd48', {
    attribution: '&copy; <a href="https://www.openstreetmap.fr/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
}).addTo(map);

let marcacaoAtual = null;

document.getElementById('searchBtn').addEventListener('click', async () => {
    const query = document.getElementById('searchInput').value;trim();
    if(!query) return;



})