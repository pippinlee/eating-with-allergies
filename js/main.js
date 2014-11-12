$(function() {

  var planes = [
      ["Nut Free",43.653440, -79.38409],
      ["Gluten Free",43.662892, -79.395656],
      ["Special chef requests available",43.657658, -79.378802],
      ["Allergen specialty bakery",43.670002, -79.334793],
      ["Centre of allergies",43.641438, -79.389353],
      ["Loving hut - vegan",43.647784,-79.396534],
      ["FEAST - healthy groceries",43.645505,-79.411468]
  ];

  /*
  // NEW ---------------------------------------------------------

  var starbucks = L.marker([43.653440, -79.38409]).bindPopup('Starbucks'),
    burger    = L.marker([43.662892, -79.395656]).bindPopup('Burger Preists'),
    feast    = L.marker([43.657658, -79.378802]).bindPopup('FEAST'),
    ilFornello    = L.marker([43.670002, -79.334793]).bindPopup('Il Fornello');


  var restaurants = L.layerGroup([starbucks, burger, feast, ilFornello]);

  var grayscale = L.tileLayer(mapboxUrl, {id: 'MapID', attribution: mapboxAttribution}),
      streets   = L.tileLayer(mapboxUrl, {id: 'MapID', attribution: mapboxAttribution});





  //  ---------------------------------------------------------
  */

  var map = L.map('map', {attributionControl: false}).setView([
    43.6582713, // default lat
    -79.3777061 // default lon
    ], 13); // default zoom level

  L.tileLayer('http://{s}.tiles.mapbox.com/v3/gabriel-florit.map-s24tp6w4/{z}/{x}/{y}.png', {
    minZoom: 7,
    maxZoom: 15
  }).addTo(map);

  for (var i = 0; i < planes.length; i++) {
    marker = new L.marker([planes[i][1],planes[i][2]])
      .bindPopup(planes[i][0])
      .addTo(map);
  }

  


  $('#addAllergy').click(function(){
    console.log('works');
    $('<select><option disabled selected> -- select an option -- </option><option value="Tree nuts">Tree nuts</option><option value="Peanuts">Peanuts</option><option value="Dairy">Dairy</option><option value="Shellfish">Shellfish</option></option><option value="Mustard">Mustard</option><option value="Soy">Soy</option><option value="Wheat">Wheat</option></select>').appendTo("section");
    $('select').selectric('init');
  });


});


