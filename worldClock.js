
var TimeZone = [
    {
        city: 'NEW YORK',
        timezone: 'America/New_York',
    },
    {
        city: 'LONDON',
        timezone: 'Europe/London',
    },
    {
        city: 'BANGKOK',
        timezone: 'Asia/Bangkok',
    },
    {
        city: 'TAIWAN',
        timezone: 'Asia/Taipei',
    },
    {
        city: 'SYDNEY',
        timezone: 'Australia/Sydney',
    },
]; /*設定時區*/


function gettime(time) {
    var date = new Date();
    var localtime = date.toLocaleString('en-US', {
        timeZone: time,
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false, /*設定時間顯示的樣式*/
    });
    var localtimeDate = {
        year: localtime.substring(7, 12),
        month: localtime.substring(0, 4),
        day: localtime.substring(4, 7),
        hour: localtime.substring(13, 16),
        minutes: localtime.substring(17, 20),
    }; /*使用substring擷取en-us時區的數值 回傳給上面做渲染*/
    return localtimeDate;


}

function showtime() {
    var element = document.querySelector('.clock-area');
    var str = '';
    TimeZone.forEach(function (item) {
        var localtime = gettime(item.timezone);
        if (Number(localtime.hour) < 6 || Number(localtime.hour) >= 18) {
            str += `<div class="timezone bg-black">
            <div class="zone">
                <div class="city">
                ${item.city}
                </div>
                <div class="dates">
                ${localtime.year}
                ${localtime.month}
                ${localtime.day}
                ${localtime.hour}
                :
                ${localtime.minutes}
                </div>
            </div>
            <div class="time">
            ${localtime.hour}
            :
            ${localtime.minutes}
            </div>
            </div>`
        }
        else {
            str += `<div class="timezone">
            <div class="zone">
                <div class="city">
                ${item.city}
                </div>
                <div class="dates">
                ${localtime.year}
                ${localtime.month}
                ${localtime.day}
                ${localtime.hour}
                :
                ${localtime.minutes}
                </div>
            </div>
            <div class="time">
            ${localtime.hour}
            :
            ${localtime.minutes}
            </div>
            </div>`

        }

    })
    element.innerHTML = str;
}



showtime();
setInterval(showtime, 1000);

