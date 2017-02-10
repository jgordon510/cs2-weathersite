window.onload = function() {
    Weather.getLocation();
}
var Weather = {
    getLocation: function() {
        bootbox.prompt("Enter a location:" , function(location) {
            Weather.getWeather(location);
        });
    },
    getWeather: function(location) {
        var weatherSettings = {
            location: location,
            unit: 'f',
            success: function(weather) {
                Weather.displayWeather(weather);
            },
            error: function(error) {
                console.log(error);
            }
        };
        $.simpleWeather(weatherSettings);
    },
    displayWeather: function(weather) {
        console.log(weather);
    }
};

