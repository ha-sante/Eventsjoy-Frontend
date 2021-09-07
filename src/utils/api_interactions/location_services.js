const axios = require('axios');



let HEREGeocodeAPI = `https://geocode.search.hereapi.com/v1/geocode`;



exports.searchForLocation = (queryString) => {

	// take the query string
	// then send the request to HERE 
	// return the results
 return new Promise((resolve, reject) => {
    axios.get(HEREGeocodeAPI, { 
        params: { 
            apiKey: "NT-mzchWP17oYcSEx5NANCbopCyXwYmfDC3FtvIvoFs",
            limit: 5,
            q: queryString
        } 
    }).then((response) => {
          resolve(response.data);
     }).catch((error) => {
          reject(error);
    });

  })
}