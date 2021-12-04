const hours= document.getElementById('hr');
const minuites= document.getElementById('min');
const seconds= document.getElementById('sec');

setInterval(()=>{
    let date = new Date();
    let hr = date.getHours()*30;
    let min = date.getMinutes()*6;
    let sec = date.getSeconds()*6;

    hours.style.transform=`rotateZ(${(hr)+(min/12)}deg)`;
    minuites.style.transform=`rotateZ(${(min)+(sec/60)}deg)`;
    seconds.style.transform=`rotateZ(${sec}deg)`; 



});
