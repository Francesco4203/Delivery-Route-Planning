async function GetAddress(address){
    const google = window.google;
    let service = new google.maps.Geocoder();
    let response =  await service.geocode(
        {
          'address': address,
        },
        callback
    );
    let addressList = [];
    for (var i = 0; i < response.results.length; i++) {
        addressList.push(response.results[i].formatted_address);
    }
    return addressList;
    function callback(results, status){
        if (status != "OK"){
            console.log("Get address failed due to " + status);
        }
    }
    
}
export default GetAddress;
