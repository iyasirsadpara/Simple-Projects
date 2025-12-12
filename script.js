let ganta = document.getElementById("hrs")
let minta = document.getElementById("min")
let secna = document.getElementById("sec")
let mili = document.getElementById("mili")


setInterval(() => {
    let current = new Date();

    ganta.innerHTML = (current.getHours()<10?"0":"")+current.getHours()
    minta.innerHTML = (current.getMinutes()<10?"0":"")+current.getMinutes()
    secna.innerHTML = (current.getSeconds()<10?"0":"")+current.getSeconds()
    mili.innerHTML = String(Math.floor(current.getMilliseconds() / 10)).padStart(2, "0");

}, 10);

