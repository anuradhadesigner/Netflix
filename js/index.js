//question1
const targetDiv = document.getElementById('answer1');
const btn = document.getElementById('question1');
btn.onclick = function () {
    if(targetDiv.style.display !== "none"){
        targetDiv.style.display = "none";
        // alert("question1");
    }
    else{
        targetDiv.style.display = "block";
    }
}
//question2
const question2 = document.getElementById('answer2');
const question2btn = document.getElementById('question2');
question2btn.onclick = function () {
    if(question2.style.display !== "none"){
        question2.style.display = "none";
        // alert("question2");
    }
    else{
        question2.style.display = "block";
    }
}
//question3
const question3 = document.getElementById('answer3');
const question3btn = document.getElementById('question3');
question3btn.onclick = function () {
    if(question3.style.display !== "none"){
        question3.style.display = "none";
        // alert("question2");
    }
    else{
        question3.style.display = "block";
    }
}
//question4
const question4 = document.getElementById('answer4');
const question4btn = document.getElementById('question4');
question4btn.onclick = function () {
    if(question4.style.display !== "none"){
        question4.style.display = "none";
        // alert("question2");
    }
    else{
        question4.style.display = "block";
    }
}
//question5
const question5 = document.getElementById('answer5');
const question5btn = document.getElementById('question5');
question5btn.onclick = function () {
    if(question5.style.display !== "none"){
        question5.style.display = "none";
        // alert("question5");
    }
    else{
        question5.style.display = "block";
    }
}
//question4
const question6 = document.getElementById('answer6');
const question6btn = document.getElementById('question6');
question6btn.onclick = function () {
    if(question6.style.display !== "none"){
        question6.style.display = "none";
        // alert("question2");
    }
    else{
        question6.style.display = "block";
    }
}


setTimeout(
    function test() {
        document.getElementById('coupon').style.visibility="visible"
},3200);

// function test(){
//     document.getElementById('coupon').style.visibility="visible"
// }

function closeDiv(){
    document.getElementById('coupon').style.visibility="hidden"
}