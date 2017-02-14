window.onload = function() {
    Weather.getLocation();
}
var Weather = {
    getLocation: function() {
        bootbox.prompt("Enter a location:", function(location) {
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
        $("#main").html('<p><h1>' + weather.city + '</p>');
        $("#main").append('<p>' + weather.currently + '</p>');
        $("#main").append('<p>' + weather.temp + '</p>');
        $("#main").append('<button type="button" class="btn btn-success btn-lg" id="resetButton">Reset</button>');
        var color;
        if(weather.temp < 60)
        {
            //cold
            color = {
                backgroundColor: '#c9ddff'
            };
        } else if(weather.temp < 80)
        {
            //medium
            color = {
                backgroundColor: '#ffd5c9'
            };
        } else
        {
            //hot
            color = {
                backgroundColor: '#ffc9c9'
            };
        }
        $("body").animate(color, 1500);
        $("#resetButton").click(function(event) {
            $("#main").html('');
            Weather.getLocation();
        })
    }
};
