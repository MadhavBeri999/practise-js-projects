const time = document.getElementById("time")
const start = document.getElementById('start')
let currentTime;
start.addEventListener('click',(e)=>{
    currentTime=setInterval(()=>{
        const date = new Date();
        date.toLocaleString
        console.log(date)
        time.innerHTML = date
    },1000)
})
const stop = document.getElementById('stop')
stop.addEventListener('click',(e)=>{
    clearInterval(currentTime)
,1000})
