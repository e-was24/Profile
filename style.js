function waktu() {
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();

    day = (day < 10) ? '0' + day : day;
    month = (month < 10) ? '0' + month : month;

    var timeString = day + ' ' + '|' + ' ' + month + ' ' + '|' + ' ' + year;
    document.getElementById('waktu').innerText = timeString
}

setInterval(waktu, 1000)
