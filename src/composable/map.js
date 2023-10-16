function getMarkers(store, name = "catalogue") {
  store
    .dispatch(name + "/getMarkers")
    .then(() => { })
    .catch(() => {
      console.log("There was a problem creating your event");
    });
}
function setCenter(store, lat, long) {
  store
    .dispatch("map/setLocation", { lat, long })
    .then(() => {
    })
    .catch(() => {
      console.log("There was a problem creating your event");
    });
}
function mark_marker(index) {
  let mapmarker = document.getElementsByClassName('mapmarker')
  for (let i = 0; i < mapmarker.length; i++) {
    mapmarker[i].src = "http://admin-assurance-private.assuranceiso.com/web/marker.png";
    mapmarker[i].classList.remove('marked')
  }
  document.getElementById('mark_' + index).src = "/inso-pics/map_marker.png"
  document.getElementById('mark_' + index).classList.add('marked')
}
function leave_marker(index) {
  document.getElementById('mark_' + index).src = "http://admin-assurance-private.assuranceiso.com/web/marker.png"
  document.getElementById('mark_' + index).classList.remove('marked')
}
export { getMarkers, setCenter, mark_marker, leave_marker };