$(function(){

//append function

let $number = $("#number")

function appendNumbers(res){
    let newLine = $("<div>", {text: `${res}`, class:"text-white font-weight-bold d-flex justify-content-center newNum"})
    $(".container").append(newLine);  
}

// click on trivia
    $("#trivia").on("click", function(e){
    e.preventDefault();
//get the input number from search 
        let trivia = $number.val();
        $number.val("");
        $.get(`http://numbersapi.com/${trivia}`, appendNumbers);
    })

//year
$("#year").on("click", function(e){
    e.preventDefault();
//get the input number from search 
        let year = $number.val();
        $number.val("");
        $.get(`http://numbersapi.com/${year}/year`, appendNumbers);
    })

//date
$("#date").on("click", function(e){
    e.preventDefault();
//get the input number from search 
        let date = $number.val();
        $number.val("");
        $.get(`http://numbersapi.com/${date}/date`, appendNumbers);
    })

//math
$("#math").on("click", function(e){
    e.preventDefault();
//get the input number from search 
        let math = $number.val();
        $number.val("");
        $.get(`http://numbersapi.com/${math}/date`, appendNumbers);
    })


// remove function
    $("#remove").on("click", function(){
        $(".newNum").remove();
    })

});





