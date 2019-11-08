console.log("The external JS is linked.")
console.log("The URL is " + "http://api.openweathermap.org/data/2.5/weather?q=losangeles&appid=31e3da9a00a13c6735af3d6b9e899478")

$(document).ready(function () {

    /*Today's date, compliments of moment.js*/
    /*so UVindex has the current date of the location searched. perhaps I should 
    pull from that data instead of moment.js, which will produce the date of the
    location of the local computer, not the search location*/
        function today () {
            var date = (moment().format("MMM/Do/YYYY"));
            $(".date").append(date);
            console.log(date);
            };
        today ();
    /*API for Today's City, Temp, Icon, etc.*/
    /*currently the URL is specific to Dallas and needs to incorporate a var*/
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=dallas&units=imperial&appid=31e3da9a00a13c6735af3d6b9e899478",
        function (data) {
            console.log(data);

            var icon = ("http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png");
            $(".icon").attr("src", icon);
            console.log(icon);

            var city = (data.name);
            $(".city").append(city);
            console.log(city)

            var temp = (data.main.temp + " F");
            $(".temp").append(temp);
            console.log(temp);

            var humidity = (data.main.humidity + "%");
            $(".humidity").append(humidity);
            console.log(humidity);

            var windSpeed = (data.wind.speed + " mph");
            $(".windSpeed").append(windSpeed);
            console.log(windSpeed);
        });



    /*Need an API for the 5 Day forecast*/
    $.getJSON("http://api.openweathermap.org/data/2.5/forecast?q=dallas&units=imperial&appid=31e3da9a00a13c6735af3d6b9e899478",
        function (forecastData) {
            console.log(forecastData);

            var day1temp = (forecastData.list[0].main.temp)
            $(".day1temp").append(day1temp);
            console.log(day1temp);

        }
    );
    
    
    /*Need an API for the UV INdex*/

    $.getJSON("http://api.openweathermap.org/data/2.5/uvi?appid=31e3da9a00a13c6735af3d6b9e899478&lat=32.78&lon=-96.8",
        function (uvData) {
            console.log(uvData);

            var uvIndex = (uvData.value);
            $(".uvIndex").append(uvIndex);
            console.log(uvIndex);
        }
    );

    /*Need Search functionality, and search needs to feed the orginial URL for location*/

    /*Need History functionality*/
});