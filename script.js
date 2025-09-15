// Variable declarations and conditionals (Part 1)

const age = 20;
if (age < 18) {
    console.log("You are a minor.");
} else {
    console.log("You are an adult.");
}

function runBasics() {
    document.querySelector('#basic-output').innerHTML = `
        <p> Age: ${age} </p>
        <p> Status: ${age < 18 ? "Minor" : "Adult"}</p>`;
}


// Part 2: JavaScript Functions 

function showSum() {
    const num1 = Number(document.querySelector('#num1').value);
    const num2 = Number(document.querySelector('#num2').value);
// adding them together 
    const sum = num1 + num2;
// display the result 
    document.querySelector('#function-output').textContent = `Sum: ${sum}`;

}

// Part 3: Javascript Loops 
function showLoop() {
    // document.querySelector('#loop-output').innerHTML = '';
    // for (let i = 1; i <= 5; i++) {
    //     document.querySelector('#loop-output').innerHTML += `<p>Iteration ${i}</p>`;
    // }
    const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
    let output = '';  // Initialize an empty string to hold the output
    for (const fruit of fruits) {
        document.querySelector('#loop-output').innerHTML += `<p>${fruit}</p>`;

    }

}

// Part 4: Mastering the DOM 
const toggleText = function () {
    document.querySelector('#dom-output').textContent = "Text has been changed!";
}

const addListItem = function () {
    const ul = document.querySelector('#dom-list');
    if (!document.querySelector('#dom-list h1')) {
        const h1 = document.createElement('h1');
        h1.textContent = "Grocery List";
        ul.appendChild(h1);
    }
    const li = document.createElement('li');
    li.textContent = "Tomatoes";
    ul.appendChild(li);
} 
