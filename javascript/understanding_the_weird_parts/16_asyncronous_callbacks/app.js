function waitThreeSeconds() {
    var ms = 6000 + new Date().getTime();
    while(new Date() < ms) {}
    console.log('Finished function');
}

function clickHandler() {
    console.log('click event');
}

document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');
