const newyear = "1 Jan 2022";

function countdown()
{
    const newYearsDate = new Date(newyear);
    const currentDate = new Date();
    
    //console.log(newYearsDate - currentDate);
    
    const seconds =(newYearsDate - currentDate )/1000;
    const days = Math.floor(seconds/3600/24);
    const hours = Math.floor(seconds/3600/120);
    const minutes = Math.floor(seconds/3600/120/)
    console.log(days,hours)
    
}
countdown();

setInterval(countdown,1000);


