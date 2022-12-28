
function delay(ms) {
    const start = new Date;
    while(new Date -  start < ms);
}

onmessage =  function(message) {
    console.log("Worker", message.data);
    delay(message.data);
    this.postMessage("Done");
}