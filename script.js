const launchDate = new Date();
launchDate.setDate(launchDate.getDate()+14);
const currentDate = new Date();

let timer = 0;
timer = Math.floor((launchDate - Date.now()) / 1000); 
  

let daysMem = 1;
console.log(daysMem);

let hoursMem = 1;
console.log(hoursMem);

let minutesMem = 1;
console.log(minutesMem);

let secondesMem = 1;
console.log(secondesMem);


setInterval( () => {

    timer = Math.floor((launchDate - Date.now()) / 1000);   

    const days = Math.floor(timer / (60 * 60 * 24));
    if(daysMem !== days){

        daysMem = days;

        if(days < 10){
            document.querySelector('.li-timer:nth-of-type(1) .up').textContent = `0${days}`;
            document.querySelector('.li-timer:nth-of-type(1) .down').textContent = `0${days}`;
        }
        else{
            document.querySelector('.li-timer:nth-of-type(1) .up').textContent = days;
            document.querySelector('.li-timer:nth-of-type(1) .down').textContent = days;
        }

        document.querySelector('.li-timer:nth-of-type(1) .up').textContent = days;
        document.querySelector('.li-timer:nth-of-type(1) .down').textContent = days;
        
    }

    const hours = Math.floor(timer / (60 * 60)) - days * 24;
    if(hoursMem !== hours){
        
        hoursMem = hours;

        if(hours < 10){
            document.querySelector('.li-timer:nth-of-type(2) .up').textContent = `0${hours}`;
            document.querySelector('.li-timer:nth-of-type(2) .down').textContent = `0${hours}`;
        }
        else{
            document.querySelector('.li-timer:nth-of-type(2) .up').textContent = hours;
            document.querySelector('.li-timer:nth-of-type(2) .down').textContent = hours;
        }
        
        document.querySelector('.li-timer:nth-of-type(2) .up').textContent = hours;
        document.querySelector('.li-timer:nth-of-type(2) .down').textContent = hours;

    }

    const minutes = Math.floor( (timer % (60 * 60)) / 60 );
    if(minutesMem !== minutes){
        
        minutesMem = minutes;

        if(minutes < 10){
            document.querySelector('.li-timer:nth-of-type(3) .up').textContent = `0${minutes}`;
            document.querySelector('.li-timer:nth-of-type(3) .down').textContent = `0${minutes}`;
        }
        else{
            document.querySelector('.li-timer:nth-of-type(3) .up').textContent = minutes;
            document.querySelector('.li-timer:nth-of-type(3) .down').textContent = minutes;
        }

        document.querySelector('.li-timer:nth-of-type(3) .up').textContent = minutes;
        document.querySelector('.li-timer:nth-of-type(3) .down').textContent = minutes;

    }
 
    const secondes = Math.floor( (timer % (60)) );
    if(secondesMem !== secondes){
        
        secondesMem = secondes;

        if(secondes < 10){
            document.querySelector('.li-timer:nth-of-type(4) .up').textContent = `0${secondes}`;
            document.querySelector('.li-timer:nth-of-type(4) .down').textContent = `0${secondes}`;
        }
        else{
            document.querySelector('.li-timer:nth-of-type(4) .up').textContent = secondes;
            document.querySelector('.li-timer:nth-of-type(4) .down').textContent = secondes;
        }

        document.querySelector('.li-timer:nth-of-type(4) .up').classList.add('anim');
        document.querySelector('.li-timer:nth-of-type(4) .down').classList.add('anim');

    }
    

/*ANIM*/

    if(secondes === 0){ //anim minute
        document.querySelector('.li-timer:nth-of-type(3) .up').classList.add('anim-one-time');
        document.querySelector('.li-timer:nth-of-type(3) .down').classList.add('anim-one-time');
    }
    else if(secondes === 55){
        document.querySelector('.li-timer:nth-of-type(3) .up').classList.remove('anim-one-time');
        document.querySelector('.li-timer:nth-of-type(3) .down').classList.remove('anim-one-time');
    }


    if(minutes === 0 && secondes === 0){ //anim hours
        document.querySelector('.li-timer:nth-of-type(2) .up').classList.add('anim-one-time');
        document.querySelector('.li-timer:nth-of-type(2) .down').classList.add('anim-one-time');
    }
    else if(minutes === 58){
        document.querySelector('.li-timer:nth-of-type(2) .up').classList.remove('anim-one-time');
        document.querySelector('.li-timer:nth-of-type(2) .down').classList.remove('anim-one-time');
    }


    if(hours === 0 && minutes === 0 && secondes === 0){ //anim days
        document.querySelector('.li-timer:nth-of-type(1) .up').classList.add('anim-one-time');
        document.querySelector('.li-timer:nth-of-type(1) .down').classList.add('anim-one-time');
    }
    else if(minutes === 58){
        document.querySelector('.li-timer:nth-of-type(1) .up').classList.remove('anim-one-time');
        document.querySelector('.li-timer:nth-of-type(1) .down').classList.remove('anim-one-time');
    }

}, 1000);






