$(function() {

  var mbUrl = 'https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png';

  var streets  = L.tileLayer(mbUrl, {id: 'examples.map-i875mjb7'});

  var map = L.map('map', {
    center: [43.6582713, -79.3777061],
    zoom: 13,
    layers: [streets]
  });

  var thekeg = new L.marker([43.6582713, -79.3777061]);
  var veganhut = new L.marker([43.662892, -79.395656]);
  
  var moutard = new L.marker([43.6782713, -79.3737061]);
  var bigyellow = new L.marker([43.652892, -79.375656]);

  var rubber = new L.marker([43.6770713, -79.3557061]);
  var tofuuuu = new L.marker([43.608892, -79.321656]);

  var thesea = new L.marker([43.6522713, -79.3177061]);
  var ahoy = new L.marker([43.661892, -79.375656]);

  var cluck = new L.marker([43.6552713, -79.3774061]);
  var earlyrooster = new L.marker([43.672892, -79.315656]);

  var cluck = new L.marker([43.6552713, -79.3774061]);
  var earlyrooster = new L.marker([43.672892, -79.315656]);

  var milkbarn = new L.marker([43.6532713, -79.3771061]);
  var moo = new L.marker([43.612892, -79.393656]);

  var treenut = L.layerGroup([thekeg, veganhut]);
  var mustard = L.layerGroup([moutard, bigyellow]);
  var soy = L.layerGroup([rubber, tofuuuu]);
  var shellfish = L.layerGroup([thesea, ahoy]);
  var wheat = L.layerGroup([cluck, earlyrooster]);
  var peanut = L.layerGroup([cluck, earlyrooster]);
  var dairy = L.layerGroup([milkbarn, moo]);


  var all = L.layerGroup([treenut, mustard, soy, shellfish, wheat, peanut, dairy]);

  map.addLayer( all );

  $('#addAllergy').click(function(){
    $('<select name="food"><option disabled selected> -- select an option -- </option><option value="treenut">Tree nuts</option><option value="peanut">Peanuts</option><option value="dairy">Dairy</option><option value="shellfish">Shellfish</option></option><option value="mustard">Mustard</option><option value="soy">Soy</option><option value="Wheat">wheat</option></select>').appendTo("section");
    $('select').selectric({
      // when the drop down closes after selecting an item, grab the value of the item selected
      onClose: function(element) {

        var selectedItem = $(this).val();
        //console.log(selectedItem);
        //map.addLayer( selectedItem );
        //console.log(element);

        // if value of dropdown is for treenuts
        if( selectedItem === "treenut" ){
          map.removeLayer( treenut );
          console.log("treeeeeeeenuuuuttttt");
        }

        // if value of dropdown is for peanuts
        if( selectedItem === "peanut" ){
          map.removeLayer( peanut );
          console.log('pppppeeeeeaaaaannnnnnuuuuuttt');
        }

        // if value of dropdown is for dairy
        if( selectedItem === "dairy" ){
          map.removeLayer( dairy );
          console.log('daaaaaaiiiiirrrryyyy');
        }

        // if value of dropdown is for shellfish
        if( selectedItem === "shellfish" ){
          map.removeLayer( shellfish );
          console.log('sheeeeeeellllllfffffiiiisssshh');
        }

        // if value of dropdown is for mustard
        if( selectedItem === "mustard" ){
          map.removeLayer( mustard );
          console.log('muuuuuussssttttaaaaarrrd');
        }

        // if value of dropdown is for soy
        if( selectedItem === "soy" ){
          map.removeLayer( soy );
          console.log('sssssssoooooooyyyyyy');
        }

        // if value of dropdown is for wheat
        if( selectedItem === "wheat" ){
          map.removeLayer( wheat );
          console.log('wwwhhhheeeaaattt');
        }



      }
    });
  });


});