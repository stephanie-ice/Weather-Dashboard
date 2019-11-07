console.log ("The external JS is linked.")
console.log ("The URL is "+ "http://api.openweathermap.org/data/2.5/weather?q=losangeles&appid=31e3da9a00a13c6735af3d6b9e899478")

$(document).ready(function (){
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=dallas&units=imperial&appid=31e3da9a00a13c6735af3d6b9e899478", 
    function (data) {
        console.log(data);

        var icon = ("http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png");
        $(".icon").attr("src", icon);
        console.log(icon);

        var city = (data.name);
        $(".city").append(city);
        console.log(city)

        var temp = (data.main.temp);
        $(".temp").append(temp);
        console.log(temp);

        var humidity = (data.main.humidity);
        $(".humidity").append(humidity);
        console.log(humidity);
    });


});