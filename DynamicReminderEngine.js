
function setReminder(message,delay,repeat=false){

//    let  display=()=>{
//     console.log(`Reminder: ${message} triggered after ${delay} ms`)
//    }

   if(repeat){
    let intervalId=setInterval(display=()=>{
    console.log(`Reminder: ${message} triggered after ${delay} ms`)
   },delay);
    return intervalId
   }else{
    let timeoutId=setTimeout(display=()=>{
    console.log(`Reminder: ${message} triggered after ${delay} ms`)
   },delay);
    return timeoutId; 
   }
}

function stopReminder(timerId){
    
    clearInterval(timerId);
}

function setReminderAsync(message, delay){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(`Reminder: "${message}" done after ${delay} ms`);
        },delay);
    })
}


setReminder("Submit Assignment", 1500);                 // one-time

const timerId = setReminder("Stretch your legs", 2000, true);
setTimeout(() => stopReminder(timerId), 7000);          // cancel after 7 s

setReminderAsync("Call Mom", 2500).then(console.log);