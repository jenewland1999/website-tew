const TotalEngAndWeld = (function() {
  'use strict';

  // Cache DOM
  const el = document.querySelector('#app');
  const navToggle = el.querySelector('#nav-toggle');
  const navElement = el.querySelector('.site-nav');
  const searchToggle = el.querySelector('#search-toggle');
  const searchElement = el.querySelector('#tew-search');
  const searchInput = searchElement.querySelector('#tew-search-box');
  const searchButton = searchElement.querySelector('.btn-search');
  const year = el.querySelector('#year');

  // Bind Events
  navToggle.addEventListener('click', toggleNav);
  searchToggle.addEventListener('click', toggleSearch);
  searchButton.addEventListener('click', search);
  document.addEventListener('change', function() {
    console.log('hello world');
  })

  // Render
  _render();

  function _render() {
    year.innerHTML = new Date().getFullYear();
  }

  function search(e) {
    e.preventDefault();
    window.location.href = `${window.location.protocol}//google.com/search?q=${searchInput.value} site:${window.location.hostname}`;
  }

  function toggleNav(e) {
    e.preventDefault();
    searchElement.classList.remove('open');
    navElement.classList.toggle('open');
  }

  function toggleSearch(e) {
    e.preventDefault();
    navElement.classList.remove('open');
    searchElement.classList.toggle('open');
  }

  return {
    toggleNav: toggleNav,
    toggleSearch: toggleSearch
  }

})();

var marker
map;
function initMap() {
  var styledMapType = new google.maps.StyledMapType(
    [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#e6e6e6"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#acacac"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"lightness":29},{"weight":0.2},{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#bcbcbc"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#f3f3f3"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"transit.station.airport","elementType":"labels.icon","stylers":[{"color":"#000000"}]},{"featureType":"transit.station.bus","elementType":"labels.icon","stylers":[{"color":"#ff0000"}]},{"featureType":"transit.station.rail","elementType":"labels.icon","stylers":[{"color":"#000000"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#989898"},{"lightness":17}]}],
    {name: 'TEW Theme'});
  var uluru = {lat: 51.454565, lng: -2.587910},
  map = new google.maps.Map(document.querySelector('#map'), {
    center: uluru,
    zoom: 10,
    streetViewControl: false,
    fullscreenControl: false,
    zoomControl: false,
    mapTypeControlOptions: {
      mapTypeIds: []
    }
  });

  map.mapTypes.set('TEW Theme', styledMapType);
  map.setMapTypeId('TEW Theme');

  var iconBase = 'assets/media/map/';
  marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: iconBase + 'tew_poi_maps.png'
  });
  marker.setZIndex(9999);
}