function mapInit() {
    console.log("MapInit called!");
    const google = window.google;
    const HCMC = { lat: 10.8, lng: 106.65 };
    var mapProp = {
      center: new google.maps.LatLng(HCMC),
      zoom: 12,
    };
    var map = new google.maps.Map(
      document.getElementById("googleMap"),
      mapProp
    );
} 
export default mapInit;