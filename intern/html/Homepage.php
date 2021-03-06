<CTYPE html>
	<html>
		<head>
			<!--Default StyleSheet-->
			<link rel="stylesheet" href="..\css\App.css" type="text/css">
			<!--OpenLayers StyleSheet-->
			<link rel="stylesheet" href="https://cdn.rawgit.com/openlayers/openlayers.github.io/master/en/v5.3.0/css/ol.css" type="text/css">
    		<script src="https://cdn.rawgit.com/openlayers/openlayers.github.io/master/en/v5.3.0/build/ol.js"></script>
    		<!--jonatawalker ol-geocoder StyleSheet-->
    		<link href="https://cdn.jsdelivr.net/npm/ol-geocoder@latest/dist/ol-geocoder.min.css" rel="stylesheet">
			<script src="https://cdn.jsdelivr.net/npm/ol-geocoder"></script>
			<!--jquery script-->
			 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
			 <script type="text/javascript">
			 	var isLoggedIn = 0;
			 </script>
			<title>University of Mary Washington Internship</title>
		</head>
	</html>

	<div class = "App-header">
		<div class = "nav">
			<img src = "..\img\umw.png" id = "logo">
			<div class = "Secondary-nav">
				<a href="review.html"><img src = "..\img\star.png" height = "20" width = "40"><br/>Reviews</a>
  				<a href="#review"><img src = "..\img\addReview.png" height = "20" width = "20"><br/>Add a Review</a>
  				<a href="newLogin.html" target="popup" onclick="window.open('newLogin.html', 'popup','width=400,height=300');return false;"><img src = "..\img\signIn.png" height = "20" width = "20"><br/>Sign-Up</a>
			</div>
		</div>
			<script type="text/javascript">
				if (isLoggedIn == 0) {
					document.getElementById("login").innerHTML = '<form action="/login.php" onsubmit = "login()"><button type="submit">Login</button><input type="password" placeholder="Password" name="psw"><input type="text" placeholder="Email Address" name="username"></form>'
				} else {
					document.getElementById("login").innerHTML = '<p>cool</p>'
				}
			</script>
		<div id = 'login' class="login-container">
    			<form action="/Homepage.php" onsubmit = "login()">
      				<button type="submit">Login</button>
      				<input type="password" placeholder="Password" name="psw">
      				<input type="text" placeholder="Email Address" name="username">
    			</form>
    			<script>
    				function login(){
    					alert('you have logged in');
    					isLoggedIn = 1;
    				}
    			</script>
  			</div>
	</div>

	<!--<img src = "..\img\banner-copy.png" id = "banner">-->

	<div class = "Review-map-container">
		<div class = "Review-container">
			<h3>SEARCH BY</h3>
			<form>
      			<input type="text" placeholder="Company Name" name="Search_Com">
      			<input type="text" placeholder="State" name="Search_State">
      			<input type="text" placeholder="City" name="Search_City">
      			<input type="text" placeholder="Zip Code" name="Search_Zip">
      			<input type="text" placeholder="Radius" name="Search_Rad">
    		</form>
		</div>
		<div id = 'map' class = "Map-container"></div>
		<!--OpenLayers map creation-->
		<script type="text/javascript">
      		var map = new ol.Map({
        		target: 'map',
        		layers: [
          		new ol.layer.Tile({
            		source: new ol.source.OSM()
          		})
        		],
        		view: new ol.View({
          			center: ol.proj.fromLonLat([-77.475, 38.302]),
          			zoom: 16
        		})
      		});

      		//marker layer
      		var markers = [];
      		var markerNum = 5;

      		var marker = new ol.Feature({
      			geometry: new ol.geom.Point(ol.proj.fromLonLat([-77.475, 38.302])),
      			name: 'UNIVERSITY',
      		});
      		markers.push(marker);

      		var vectorSource = new ol.source.Vector({
      			features: markers
      		});

      		var iconStyle = new ol.style.Style({
      			image: new ol.style.Icon(({
      				scale: 0.1,
      				anchor: [0.5, 0.8],
      				anchorXUnits: 'fraction',
      				anchorYUnits: 'fraction',
      				opacity: 0.80,
      				src: '../img/marker.png'
      			}))
      		});

      		var vectorLayer = new ol.layer.Vector({
      			source: vectorSource,
      			style: iconStyle
      		});

      		map.addLayer(vectorLayer);

      		map.on('click', function(evt) {
      			map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
      				map.getView().setCenter(feature.get('geometry').getCoordinates());
      				map.getView().setZoom(16);
      				//alert(feature.get('name'));

      			});	
      		});
    </script>
    <!--OpenLayers Marker Layer-->
	</div>