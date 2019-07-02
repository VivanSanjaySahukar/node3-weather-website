const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url ='https://api.darksky.net/forecast/7f1221aef96e63829a59598c31f2dcf7/' + latitude +',' +longitude

    request({ url: url, json: true },(error, response) =>{
        if (error) {
            callback('unable to onnect to service', undefined)
        } else if (response.body.error) {
            callback('unable to find location', undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary + 'It is currently ' + response.body.currently.temperature)
        }
    })

}

module.exports = forecast