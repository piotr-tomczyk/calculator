function addition(input, previous_number){
    console.log("input na float: " + parseFloat(input));
    var result = parseFloat(input) + previous_number;
    console.log("result: " + result);
    return +result.toFixed(3);
}
function multiplication(input, previous_number){
    console.log(parseFloat(input));
    var result = parseFloat(input) * previous_number;
    return +result.toFixed(3);
}
function division(input, previous_number){
    console.log(parseFloat(input));
    var result = previous_number / parseFloat(input);
    return +result.toFixed(3);
}
function substraction(input, previous_number){
    console.log(parseFloat(input));
    var result = previous_number - parseFloat(input);
    return +result.toFixed(3);
}
function print(input_div, result){
    if(result.toString().length > max_lenght){
        result = Math.round(result);
        if(result.toString() > max_lenght){
            input_div.textContent = "Too big.";
        }
    }
    else{
        input_div.textContent = result.toString();
    }
}
const n_button = [];
n_button.push(document.querySelector('#b0'));
n_button.push(document.querySelector('#b1'));
n_button.push(document.querySelector('#b2'));
n_button.push(document.querySelector('#b3'));
n_button.push(document.querySelector('#b4'));
n_button.push(document.querySelector('#b5'));
n_button.push(document.querySelector('#b6'));
n_button.push(document.querySelector('#b7'));
n_button.push(document.querySelector('#b8'));
n_button.push(document.querySelector('#b9'));


const input_div = document.querySelector('.typing-space');


const clear_btn = document.querySelector('#ac');
const dot_btn = document.querySelector('#dot');
const plus_minus_btn = document.querySelector('#p-m');
const procent_btn = document.querySelector('#prct');


const o_button = [];
o_button.push(document.querySelector('#addition'));
o_button.push(document.querySelector('#multiplication'));
o_button.push(document.querySelector('#division'));
o_button.push(document.querySelector('#substraction'));
o_button.push(document.querySelector('#equals'));

var input = "";
let max_lenght = 11;
var previous_operation = "";
var previous_number = 0;
var dot = false;
var start = true;
o_button[0].addEventListener('click', () => {
    console.log("add");
    console.log("previous_operation: " + previous_operation);
    console.log("previous_number: " + previous_number);
    console.log("input: " + input);
    if (previous_operation != "" && input != ""){
        if(previous_operation == "add"){
            previous_number = addition(input, previous_number);
            print(input_div, previous_number);
            input = "";
        }
        else if(previous_operation == "mul"){
            previous_number = multiplication(input, previous_number);
            print(input_div, previous_number);
            input = "";
        }
        else if(previous_operation == "div"){
            previous_number = division(input, previous_number);
            print(input_div, previous_number);
            input = "";
        }
        else if(previous_operation == "sub"){
            previous_number = substraction(input, previous_number);
            print(input_div, previous_number);
            input = "";
        }
    }
    if(previous_operation == ""){
        if(input == ""){
            previous_number = 0;
            return;
        }
        previous_number = parseFloat(input);
        input = "";
    }
    previous_operation = "add";
});
o_button[1].addEventListener('click', () => {
    console.log("mul");
    console.log("previous_operation: " + previous_operation);
    console.log("previous_number: " + previous_number);
    console.log("input: " + input);
    if (previous_operation != "" && input != ""){
        if(previous_operation == "add"){
            previous_number = addition(input, previous_number);
            print(input_div, previous_number);
            input = "";
        }
        else if(previous_operation == "mul"){
            previous_number = multiplication(input, previous_number);
            print(input_div, previous_number);
            input = "";
        }
        else if(previous_operation == "div"){
            previous_number = division(input, previous_number);
            print(input_div, previous_number);
            input = "";
        }
        else if(previous_operation == "sub"){
            previous_number = substraction(input, previous_number);
            print(input_div, previous_number);
            input = "";
        }
    }
    if(previous_operation == ""){
        if(input == ""){
            previous_number = 0;
            return;
        }
        previous_number = parseFloat(input);
        input = "";
    }
    previous_operation = "mul";
});
o_button[2].addEventListener('click', () => {
    console.log("div");
    console.log("previous_operation: " + previous_operation);
    console.log("previous_number: " + previous_number);
    console.log("input: " + input);
    if (previous_operation != "" && input != ""){
        if(previous_operation == "add"){
            previous_number = addition(input, previous_number);
            print(input_div, previous_number);
            input = "";
        }
        else if(previous_operation == "mul"){
            previous_number = multiplication(input, previous_number);
            print(input_div, previous_number);
            input = "";
        }
        else if(previous_operation == "div"){
            previous_number = division(input, previous_number);
            print(input_div, previous_number);
            input = "";
        }
        else if(previous_operation == "sub"){
            previous_number = substraction(input, previous_number);
            print(input_div, previous_number);
            input = "";
        }
    }
    if(previous_operation == ""){
        if(input == ""){
            previous_number = 0;
            return;
        }
        previous_number = parseFloat(input);
        input = "";
    }
    previous_operation = "div";
});
o_button[3].addEventListener('click', () => {
    console.log("sub");
    console.log("previous_operation: " + previous_operation);
    console.log("previous_number: " + previous_number);
    console.log("input: " + input);
    if (previous_operation != "" && input != ""){
        if(previous_operation == "add"){
            previous_number = addition(input, previous_number);
            print(input_div, previous_number);
            input = "";
        }
        else if(previous_operation == "mul"){
            previous_number = multiplication(input, previous_number);
            print(input_div, previous_number);
            input = "";
        }
        else if(previous_operation == "div"){
            previous_number = division(input, previous_number);
            print(input_div, previous_number);
            input = "";
        }
        else if(previous_operation == "sub"){
            previous_number = substraction(input, previous_number);
            print(input_div, previous_number);
            input = "";
        }
    }
    if(previous_operation == ""){
        if(input == ""){
            previous_number = 0;
            return;
        }
        previous_number = parseFloat(input);
        input = "";
    }
    previous_operation = "sub";
});
o_button[4].addEventListener('click', () => {
    if (previous_operation != "" && input != ""){
        if(previous_operation == "add"){
            previous_number = addition(input, previous_number);
            print(input_div, previous_number);
            input = "";
        }
        else if(previous_operation == "mul"){
            previous_number = multiplication(input, previous_number);
            print(input_div, previous_number);
            input = "";
        }
        else if(previous_operation == "div"){
            previous_number = division(input, previous_number);
            print(input_div, previous_number);
            input = "";
        }
        else if(previous_operation == "sub"){
            previous_number = substraction(input, previous_number);
            print(input_div, previous_number);
            input = "";
        }
    }
});



clear_btn.addEventListener('click', () =>{
    input = "";
    input_div.textContent = "0";
    previous_operation = "";
    previous_number = 0;
    dot = false;
    start = true;
});
dot_btn.addEventListener('click', () =>{
    if(input == "" && start){
        input = "0.";
        input_div.textContent = input;
        start = false;
        return;
    }
    if(!dot && parseFloat(input)%1 == 0 && input!="0."){
        input+=".";
        input_div.textContent = input;
        dot = true;
    }
});
plus_minus_btn.addEventListener('click', () =>{
    if(input !=""){
        if(parseFloat(input) < 0){
            input = input.substring(1);
        }
        else{
            input = "-" + input;
        }
        input_div.textContent = input;
    }
    else{
        previous_number *= -1;
        input_div.textContent = previous_number.toString();
    }
});
procent_btn.addEventListener('click', ()=>{
    if(input!=""){
        print(input_div, parseFloat(input)/100);
        input = input_div.textContent;
    }
    else{
        if(previous_number != 0){
            print(input_div, previous_number/100);
            input = input_div.textContent;
        }
    }
});
n_button[0].addEventListener('click', () => {
    if(input[0]!="0"){
        if (input.length < max_lenght){
            input+="0";
            input_div.textContent = input;
        }
    }
});
n_button[1].addEventListener('click', () => {
    if(input[0] == "0" && input[1] != "."){
        input = input.substring(1);
    }
    if (input.length < max_lenght){
        input+="1";
        input_div.textContent = input;
    }
});
n_button[2].addEventListener('click', () => {
    if (input.length < max_lenght){
        input+="2";
        input_div.textContent = input;
    }
});
n_button[3].addEventListener('click', () => {
    if (input.length < max_lenght){
        input+="3";
        input_div.textContent = input;
    }
});
n_button[4].addEventListener('click', () => {
    if (input.length < max_lenght){
        input+="4";
        input_div.textContent = input;
    }
});
n_button[5].addEventListener('click', () => {
    if (input.length < max_lenght){
        input+="5";
        input_div.textContent = input;
    }
});
n_button[6].addEventListener('click', () => {
    if (input.length < max_lenght){
        input+="6";
        input_div.textContent = input;
    }
});
n_button[7].addEventListener('click', () => {
    if (input.length < max_lenght){
        input+="7";
        input_div.textContent = input;
    }
});
n_button[8].addEventListener('click', () => {
    if (input.length < max_lenght){
        input+="8";
        input_div.textContent = input;
    }
});
n_button[9].addEventListener('click', () => {
    if (input.length < max_lenght){
        input+="9";
        input_div.textContent = input;
    }
});