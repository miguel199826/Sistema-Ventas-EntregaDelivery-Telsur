const mymap = L.map('map-template').setView([51.505, -0.09],2);

//const  socket = io();

//L.tileLayer('http://a.tile.openstreetmap.fr/hot/${z}/${x}/${y}.png').addTo(mymap);
const url = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}';

L.tileLayer(url, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWlndWVsMTk5ODI2IiwiYSI6ImNrYXpqczR6dTAwcGkyc3F5c21oaWE1bmwifQ.BdSsTC6t_F_Kjz6XlJfoPg'
}).addTo(mymap);

mymap.locate({enableHighAccuracy: true});
mymap.on('locationfound',e=>{
    const coords = [e.latlng.lat,e.latlng.lng];
    const marker = L.marker(coords);
    marker.bindPopup('You are Here');
    mymap.addLayer(marker); 
});



const marker = L.marker([51.505, -0.09]);
marker.bindPopup('Ubicacion');
mymap.addLayer(marker);
// .addto(mymap);