
const daysE = document.getElementById('day');
const hoursE = document.getElementById('hour');
const minsE= document.getElementById('min');
const secondsE=document.getElementById('sec');


const newyear = "1 Jan 2023";

function format(time)
{
 return time < 10 ? `0${time}`: time; // to format the no with 00 form.
}

function countdown()
{
    const newYearsDate = new Date(newyear);
    const currentDate = new Date();
    
    console.log(newYearsDate - currentDate);
    
    const totalseconds =(newYearsDate - currentDate )/1000;

    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/3600)%24;
    const mins = Math.floor(totalseconds/60)%60;
    const seconds = Math.floor(totalseconds)%60;

    
    
    daysE.innerHTML    = format(days);
    hoursE.innerHTML   = format(hours);
    minsE.innerHTML    = format(mins);
    secondsE.innerHTML = format(seconds);
  
}


countdown();


setInterval(countdown,1000);


