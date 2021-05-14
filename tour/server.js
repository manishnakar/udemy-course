const express = require('express');
const axios = require('axios');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/tours', async (req, res) => {

    let options = {
        headers: {
            //'User-Agent': 'Mozilla/5.0 (Linux; Android 8.1.0; SM-G960F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36'
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36'            
        }
    }

    //https://secure.rezserver.com/hotels/results_v2/list/?city_id=800047448&type=city&rooms=1&adults=2&children=0&date_search=0&currency=USD&distancefrom_latlong=28.5353%2C-81.3833&distance_unit=mile&search_type=city&refid=2050
    
    //https://secure.rezserver.com/hotels/results/?query=Mumbai%2C+India&refid=2050&city_id=800020960&check_in=&check_out=&rooms=1&adults=2
    //axios.get('https://secure.rezserver.com/hotels/results_v2/list/?city_id=800047448&type=city' , options )    
    axios.get('https://secure.rezserver.com/hotels/results_v2/list/?city_id=800020960&type=citysearch_type=city' , options )    
    .then(response => {
        console.log("sucesss");
        res.send(response.data)
    })
    .catch(error => {
        console.log("failed");
        console.log(error);
        //res(error)
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));