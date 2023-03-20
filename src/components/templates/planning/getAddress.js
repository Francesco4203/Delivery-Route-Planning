const map = require('@google/maps').createClient({
    key: "AIzaSyDb0JylAh2lmanpChp9pCFmdeA4Fpajrr4",
  });
  
async function GetAddress(address){
    //var service = new google.maps.Geocoder();
    const addressList = await map.geocode(
        {
          'address': address,
        },
        callback
    );
    console.log(addressList);
    return addressList;
    function callback(results, status){
        if (status != "OK"){
            console.log("Get address failed due to " + status);
        }
    }
}
export default GetAddress;
