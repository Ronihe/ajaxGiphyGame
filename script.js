$(function(){

    $("#search").on("click", function(e){
    e.preventDefault();
//get the input  from search 
        let $searchStr = $("#searchStr").val();
        let giphyUrl = `http://api.giphy.com/v1/gifs/random?tag=${$searchStr}&api_key=dc6zaTOxFJmzC`;

        $.get(giphyUrl, appendGiphy);
    })

    function appendGiphy(res){
        $("#warning").empty();

        if(res.data.length === 0){
            alert("No Giphy, please put in the valid info.");
        }else{
            let giphyPic = res.data.images.downsized_large.url;
            let $img = $("<img class='newGiphy'  width='400'>");
            $img.attr("src", giphyPic);       
            $(".container-fluid").append($img);   
            }
        }

    $("#remove").on("click", function(){
        $(".newGiphy").remove();
    });

});





