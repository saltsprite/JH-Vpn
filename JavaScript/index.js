if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
      function (position) {
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
          if (position.coords.altitude) {
              altitude = position.coords.altitude;
              console.log(altitude)
          } else {
              altitude = ' Keine Höhenangaben vorhanden ';
          }
          geoinfo.innerHTML = 'Latitude ' + latitude + 'Longitude ';
      });
} else {
geoinfo.innerHTML = 'Dieser Browser unterstützt die Abfrage der Geolocation nicht.';
}

function showcontent(x){

    if(window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
    } else {
      xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
    }

    xmlhttp.onreadystatechange = function() {
      if(xmlhttp.readyState == 1) {
          document.getElementById('content').innerHTML = "<img src='Dominicrafter.pnd' />";
      }
      if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById('content').innerHTML = xmlhttp.responseText;
      } 
    }

    xmlhttp.open('POST', x +'.html', true);
    xmlhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xmlhttp.send(null);

  }

 x = clientInformation.appName

 if (x = "Chrome") {

     setInterval(myTimer, 3000);

     function myTimer() {

      var d = new Date();
      var t = d.toLocaleDateString();
      var a = d.toLocaleTimeString();
      //console.log(t + " , " + a);
     }
 }