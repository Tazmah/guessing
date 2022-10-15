const start = 1;
let range = 2;
let randomGen;
let predictedValue;
let point = 0;
let userName = "";
const randomSelect = (range = 2) => {
    console.log(range);
    userName = prompt("What is you user name?");
    randomGen = Math.floor(Math.random() * 2) + 1;
    predictedValue = prompt(`Hello ${userName} guess a number between ${start} and ${range}`);

    if (predictedValue == randomGen) {
        point += 1;
        alert(`Congratulations ${userName} you are advancing to the next stage and now you have ${point} point`)
        randomSelect(range + 1);
    }
    else {
        alert(`humm!!! ${userName} you guesd wrong you can try again later`)
    }
}