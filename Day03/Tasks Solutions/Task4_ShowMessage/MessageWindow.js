
let message = `Your message will display character by character <br>Few seconds and this window will terminate...<br>Byyyyyyeee:)`

let i = 0, timerID;
timerID = setInterval(() => {
    document.write(message[i]);
    i++;
    if (i === message.length) {
        clearInterval(timerID);
        setTimeout("close()",3000);
    }
}, 100);
