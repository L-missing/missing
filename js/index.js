function getTime() {
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (hour >= 0 && hour <= 9) hour = "0" + hour;
    if (minutes >= 0 && minutes <= 9) minutes = "0" + minutes;
    if (seconds >= 0 && seconds <= 9) seconds = "0" + seconds;
    document.getElementById("time").innerHTML = hour + ":" + minutes + ":" + seconds;
}
window.onload = setInterval("getTime()", 1000);


window.onload = loadYiYan();

function loadYiYan() {
    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                var js = JSON.parse(xmlhttp.responseText);
                document.getElementById("slogan2").innerHTML = js.hitokoto + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp——" + js.from;
                console.log(js.hitokoto + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp————" + js.from);
            }
        }
    }
    xmlhttp.open("GET", "https://v1.hitokoto.cn");
    xmlhttp.send();

}

function search2(key) {
    var e = key || window.event;
    if (e && e.keyCode == 13) {
        window.open("https://www.baidu.com/s?wd=" + document.getElementById('input_search').value);
    } else {

    }
}

function search() {
    window.open("https://www.baidu.com/s?wd=" + document.getElementById('input_search').value);
}


WIDGET = {
    "CONFIG": {
        "modules": "01234",
        "background": "5",
        "tmpColor": "FFFFFF",
        "tmpSize": "16",
        "cityColor": "FFFFFF",
        "citySize": "16",
        "aqiColor": "FFFFFF",
        "aqiSize": "16",
        "weatherIconSize": "24",
        "alertIconSize": "18",
        "padding": "10px 10px 10px 10px",
        "shadow": "0",
        "language": "auto",
        "fixed": "true",
        "vertical": "top",
        "horizontal": "left",
        "left": "10",
        "top": "10",
        "key": "f14c6e587d0f4b89957b1d852ef433c4"
    }
}