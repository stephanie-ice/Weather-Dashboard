
$(document).ready(function () {

    /*Today's date, compliments of moment.js*/
    /*so UVindex has the current date of the location searched. perhaps I should 
    pull from that data instead of moment.js, which will produce the date of the
    location of the local computer, not the search location*/
    function today() {
        var date = (moment().format("MMM Do YYYY"));
        $(".date").append(date);
        console.log(date);
    };
    today();

    /*Function for grabbing City from Search Bar*/
    
    /*click event that responds when user enters text and clicks on search Btn*/
    
    $("#submit").click(function (event) {
        event.preventDefault();

        var input = $("#search").val()
        getWeather(input)   

        /*how do I clear the input field?*/
        /*and add the item to history bar?*/
    });
    /*Format the input by replacing spaces with + */
    function getWeather(place) {
        if (place !== null) {
            place = place.replace(' ','+');
            localStorage.setItem("city", place);
            $("#history").append(place);
            localStorage.clear(place);
        };

        var apiKey = "31e3da9a00a13c6735af3d6b9e899478"
        var apiToday = ("http://api.openweathermap.org/data/2.5/weather?q="+place+"&units=imperial"+"&appid="+apiKey)
        console.log (apiToday);

        /*API for getting lon/lat of City*/


        /*API for Today's City, Temp, Icon, Etc.*/
        $.getJSON(apiToday,
            function (data) {
                console.log(data);

                var icon = ("http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png");
                $(".icon").attr("src", icon);

                var city = (data.name);
                $(".city").text(city);

                var temp = (data.main.temp + " F");
                $(".temp").text(temp);

                var humidity = (data.main.humidity + "%");
                $(".humidity").text(humidity);

                var windSpeed = (data.wind.speed + " mph");
                $(".windSpeed").text(windSpeed);

            });



        /*Need an API for the 5 Day forecast*/
        var apiForecast = ("http://api.openweathermap.org/data/2.5/forecast?q="+place+"&units=imperial&appid="+apiKey);
        console.log (apiForecast);

        $.getJSON(apiForecast,
            function (forecastData) {
                console.log(forecastData);

                function day1(forecastData) {
                    var day1date = (forecastData.list[4].dt_txt)
                    $(".day1date").text(day1date);
                    console.log(day1date)

                    var day1icon = ("http://openweathermap.org/img/wn/" + forecastData.list[4].weather[0].icon + "@2x.png");
                    $(".day1icon").attr("src", day1icon);
                    console.log(day1icon);

                    var day1temp = (forecastData.list[4].main.temp)
                    $(".day1temp").text("Temperature: " + day1temp + " F");
                    console.log(day1temp);

                    var day1humidity = (forecastData.list[4].main.humidity)
                    $(".day1humidity").text("Humidity: " + day1humidity + "%");
                    console.log(day1humidity);
                };
                day1(forecastData)

                function day2(forecastData) {
                    var day2date = (forecastData.list[12].dt_txt)
                    $(".day2date").append(day2date);
                    console.log(day2date)

                    var day2icon = ("http://openweathermap.org/img/wn/" + forecastData.list[12].weather[0].icon + "@2x.png");
                    $(".day2icon").attr("src", day2icon);
                    console.log(day2icon);

                    var day2temp = (forecastData.list[12].main.temp)
                    $(".day2temp").append("Temperature: " + day2temp + " F");
                    console.log(day2temp);

                    var day2humidity = (forecastData.list[12].main.humidity)
                    $(".day2humidity").append("Humidity: " + day2humidity + "%");
                    console.log(day2humidity);
                };
                day2(forecastData)

                function day3(forecastData) {
                    var day3date = (forecastData.list[20].dt_txt)
                    $(".day3date").append(day3date);
                    console.log(day3date)

                    var day3icon = ("http://openweathermap.org/img/wn/" + forecastData.list[20].weather[0].icon + "@2x.png");
                    $(".day3icon").attr("src", day3icon);
                    console.log(day3icon);

                    var day3temp = (forecastData.list[20].main.temp)
                    $(".day3temp").append("Temperature: " + day3temp + " F");
                    console.log(day3temp);

                    var day3humidity = (forecastData.list[20].main.humidity)
                    $(".day3humidity").append("Humidity: " + day3humidity + "%");
                    console.log(day3humidity);
                };
                day3(forecastData)

                function day4(forecastData) {
                    var day4date = (forecastData.list[28].dt_txt)
                    $(".day4date").append(day4date);
                    console.log(day4date)

                    var day4icon = ("http://openweathermap.org/img/wn/" + forecastData.list[28].weather[0].icon + "@2x.png");
                    $(".day4icon").attr("src", day4icon);
                    console.log(day4icon);

                    var day4temp = (forecastData.list[28].main.temp)
                    $(".day4temp").append("Temperature: " + day4temp + " F");
                    console.log(day4temp);

                    var day4humidity = (forecastData.list[28].main.humidity)
                    $(".day4humidity").append("Humidity: " + day4humidity + "%");
                    console.log(day4humidity);
                };
                day4(forecastData)

                function day5(forecastData) {
                    var day5date = (forecastData.list[36].dt_txt)
                    $(".day5date").append(day5date);
                    console.log(day5date)

                    var day5icon = ("http://openweathermap.org/img/wn/" + forecastData.list[36].weather[0].icon + "@2x.png");
                    $(".day5icon").attr("src", day5icon);
                    console.log(day5icon);

                    var day5temp = (forecastData.list[36].main.temp)
                    $(".day5temp").append("Temperature: " + day5temp + " F");
                    console.log(day5temp);

                    var day5humidity = (forecastData.list[36].main.humidity)
                    $(".day5humidity").append("Humidity: " + day5humidity + "%");
                    console.log(day5humidity);
                };
                day5(forecastData)
            });


        /*Need an API for the UV INdex*/

        $.getJSON("http://api.openweathermap.org/data/2.5/uvi?appid=31e3da9a00a13c6735af3d6b9e899478&lat=32.78&lon=-96.8",
            function (uvData) {
                console.log(uvData);

                var uvIndex = (uvData.value);
                $(".uvIndex").append(uvIndex);
                console.log(uvIndex);
            }
        );

    }
getWeather();

    /*Need History functionality*/
});