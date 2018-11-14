$(function(){

//append function


function appendJokes(res){


    let newLine = $("<div>", {text: `${res.joke}`, class:"text-white font-weight-bold d-flex justify-content-center newJokes"});
    $(".container").empty();
    $(".container").append(newLine); 


}

// click on trivia
    $("#joke").on("click", function(e){
    e.preventDefault();
    $.getJSON(`https://icanhazdadjoke.com/`, appendJokes);
    })

// remove function
    $("#remove").on("click", function(){
        $(".newJoke").remove();
    })

});





