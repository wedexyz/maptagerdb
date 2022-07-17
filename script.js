// Provide your access token
// Create a map in the div #map
var config = {
  apiKey: "AIzaSyBYVwVZUBLXSm7iR5Fp6k-dziJGEuhwExk",
  authDomain: "megaboth007.firebaseapp.com",
  databaseURL: "https://megaboth007.firebaseio.com",
  projectId: "megaboth007",
  storageBucket: "megaboth007.appspot.com",
  messagingSenderId: "942424390212",
  appId: "1:942424390212:web:c3622743b0fba57b5a1a11"

  };
  
firebase.initializeApp(config);
var Auth = firebase.auth();
var dbRef = firebase.database();
var db = firebase.database();

var angin = db.ref("/Jarak");


var div = document.getElementById('map'); 
var map = L.map(div).setView([ -8.149580, 113.710700 ], 18);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmFyZWV2ZTIiLCJhIjoiY2tmazM5OG92MG9vazJ4cGpuMG02bzJsaSJ9._uU8ojeLGV9GJEeUKhvsqQ', {
			maxZoom: 22,
		
			id: 'nareeve2/ckfk3lm4h1xoi19lvgl5nnk2h',
			tileSize: 512,
			zoomOffset: -1
		}).addTo(map);

// Create a divicon
var icon = L.divIcon({
  iconSize: [30, 30],
  iconAnchor: [15, 15],
  popupAnchor: [0, 0],
  shadowSize: [0, 0],
  className: 'animated-icon my-icon',
  html: '<div class="inner-icon"></div>'
});

//marker latlng
var ll = L.latLng(-8.149580, 113.710700)

// create marker
var marker = L.marker(ll, {
  icon: icon,
  title: 'look at me!'
})

marker.addTo(map)
marker.bindPopup("Some text...")

  doAnimations()
  // putting this in setInterval so it runs forever
  setInterval(function(){
    doAnimations();
  }, 2000)
  
function doAnimations(){
   var myIcon = document.querySelector('.my-icon');
  
   setTimeout(function(){
    angin.on("value", function(snapshot) {
      visits=  (snapshot.val());
      inc = (snapshot.val());
      console.log(inc);

      if (inc==0){
        myIcon.style.width = '100px'
        myIcon.style.height = '100px'
        //myIcon.style.borderRadius = '50%'
        myIcon.style.marginLeft = '-50px'
        myIcon.style.marginTop = '-50px'
        myIcon.style.backgroundColor = 'rgba(0, 255, 17, 0.249)'
        myIcon.style.opacity = "5";
      }
      else if (inc==1){
        myIcon.style.width = '100px'
        myIcon.style.height = '100px'
        //myIcon.style.borderRadius = '50%'
        myIcon.style.marginLeft = '-50px'
        myIcon.style.marginTop = '-50px'
        myIcon.style.backgroundColor = 'rgba(246, 255, 0, 0.317)'
        myIcon.style.opacity = "5";
      
      }
      else if (inc==2){
        myIcon.style.width = '100px'
        myIcon.style.height = '100px'
        //myIcon.style.borderRadius = '50%'
        myIcon.style.marginLeft = '-50px'
        myIcon.style.marginTop = '-50px'
        myIcon.style.backgroundColor = 'rgba(255, 0, 0, 0.249)'
        myIcon.style.opacity = "5";
      
      }
     
          });
   
    }, 1000)

    setTimeout(function(){
      myIcon.style.width = '30px'
      myIcon.style.height = '30px'
      myIcon.style.marginLeft = '-15px'
      myIcon.style.marginTop = '-15px'
      myIcon.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'//'white'
      //myIcon.style.opacity = "0.1";
    }, 2000)
}