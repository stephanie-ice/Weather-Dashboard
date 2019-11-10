
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

    /*click event that responds when user enters text and clicks on search Btn*/

    $("#submit").click(function (event) {
        event.preventDefault();

        var input = $("#search").val()
        getWeather(input)

        /*dynamically create list element that hold search history*/
        localStorage.setItem("input",input)
        $("#search-history").append("<li>").val(input)
        localStorage.clear(input);
        /*how do I clear the input field?*/
        $("#search").empty()

    });
    /*Format the input by replacing spaces with + */
    function getWeather(place) {
        if (place !== null) {
            place = place.replace(' ', '+');
            localStorage.setItem("city", place);
        };

        var apiKey = "31e3da9a00a13c6735af3d6b9e899478"
        var apiToday = ("http://api.openweathermap.org/data/2.5/weather?q=" + place + "&units=imperial" + "&appid=" + apiKey)
        console.log(apiToday);


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
        var apiForecast = ("http://api.openweathermap.org/data/2.5/forecast?q=" + place + "&units=imperial&appid=" + apiKey);
        console.log(apiForecast);

        $.getJSON(apiForecast,
            function (forecastData) {
                console.log(forecastData);

                function day1(forecastData) {
                    var day1date = (forecastData.list[4].dt_txt)
                    $(".day1date").text(day1date);

                    var day1icon = ("http://openweathermap.org/img/wn/" + forecastData.list[4].weather[0].icon + "@2x.png");
                    $(".day1icon").attr("src", day1icon);
                  
                    var day1temp = (forecastData.list[4].main.temp)
                    $(".day1temp").text("Temperature: " + day1temp + " F");
                    
                    var day1humidity = (forecastData.list[4].main.humidity)
                    $(".day1humidity").text("Humidity: " + day1humidity + "%");
                   
                };
                day1(forecastData)

                function day2(forecastData) {
                    var day2date = (forecastData.list[12].dt_txt)
                    $(".day2date").text(day2date);
                    
                    var day2icon = ("http://openweathermap.org/img/wn/" + forecastData.list[12].weather[0].icon + "@2x.png");
                    $(".day2icon").attr("src", day2icon);
                    
                    var day2temp = (forecastData.list[12].main.temp)
                    $(".day2temp").text("Temperature: " + day2temp + " F");
                   
                    var day2humidity = (forecastData.list[12].main.humidity)
                    $(".day2humidity").text("Humidity: " + day2humidity + "%");
                    
                };
                day2(forecastData)

                function day3(forecastData) {
                    var day3date = (forecastData.list[20].dt_txt)
                    $(".day3date").text(day3date);
                    
                    var day3icon = ("http://openweathermap.org/img/wn/" + forecastData.list[20].weather[0].icon + "@2x.png");
                    $(".day3icon").attr("src", day3icon);
                    
                    var day3temp = (forecastData.list[20].main.temp)
                    $(".day3temp").text("Temperature: " + day3temp + " F");
                  
                    var day3humidity = (forecastData.list[20].main.humidity)
                    $(".day3humidity").text("Humidity: " + day3humidity + "%");
                    
                };
                day3(forecastData)

                function day4(forecastData) {
                    var day4date = (forecastData.list[28].dt_txt)
                    $(".day4date").text(day4date);
                  
                    var day4icon = ("http://openweathermap.org/img/wn/" + forecastData.list[28].weather[0].icon + "@2x.png");
                    $(".day4icon").attr("src", day4icon);
                   
                    var day4temp = (forecastData.list[28].main.temp)
                    $(".day4temp").text("Temperature: " + day4temp + " F");
                   
                    var day4humidity = (forecastData.list[28].main.humidity)
                    $(".day4humidity").text("Humidity: " + day4humidity + "%");
                   
                };
                day4(forecastData)

                function day5(forecastData) {
                    var day5date = (forecastData.list[36].dt_txt)
                    $(".day5date").text(day5date);
                    
                    var day5icon = ("http://openweathermap.org/img/wn/" + forecastData.list[36].weather[0].icon + "@2x.png");
                    $(".day5icon").attr("src", day5icon);
                   
                    var day5temp = (forecastData.list[36].main.temp)
                    $(".day5temp").text("Temperature: " + day5temp + " F");
                  
                    var day5humidity = (forecastData.list[36].main.humidity)
                    $(".day5humidity").text("Humidity: " + day5humidity + "%");
                   
                };
                day5(forecastData)
            });


        /*Need an API for the UV INdex*/
        $.getJSON(apiToday,
            function (data) {

                /*var for getting lon/lat of place from object data*/
                var lon = (data.coord.lon)
                var lat = (data.coord.lat)
                var apiUV = ("http://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon)
                console.log(apiUV);

                $.getJSON(apiUV,
                    function (uvData) {
                        console.log(uvData);

                        var uvIndex = (uvData.value);
                        $(".uvIndex").text(uvIndex);
                       
                    }
                )
            });
    };    

        getWeather();

}); 
