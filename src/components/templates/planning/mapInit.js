async function MapInit() {
    //console.log(HCMC);
    const HCMC = { lat: 10.8, lng: 106.65 };
    var mapProp = {
      center: new google.maps.LatLng(HCMC),
      zoom: 12,
    };
    map = new google.maps.Map(
      document.getElementById("googleMap"),
      mapProp
    );
  }