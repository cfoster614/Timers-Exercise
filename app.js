function countDown(num) {
    let timer = setInterval(function() {
        num--;
            if (num <= 0) {
                clearInterval(timer);
                console.log("Done!");
            } else {
                console.log(num);
            }

    }, 1000)
}



function randomGame() {
    let count = 0;
    let timer = setInterval(function() {
        let num = Math.random();
        count++
        if (num > .75) {
            clearInterval(timer);
            console.log(num);
            console.log(`Final: ${count}`);
        } else {
            console.log(`Keep going: ${num}`);
            
        }
    }, 1000)
}