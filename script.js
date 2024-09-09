var text = document.querySelectorAll("h4");

text.forEach(function(val){
    val.addEventListener("mousemove",function(){
        val.style.color = "yellow";
    });
    val.addEventListener("mouseleave",function(){
        val.style.color = "white";
    });
});

var button = document.querySelector("button");

button.addEventListener("mousemove",function(){
    button.style.color = "rgba(255, 255, 0, 0.557)";
    button.style.backgroundColor = "white";
    button.style.scale = "1.25";
    button.style.transition = "all ease 0.5s";
})

button.addEventListener("mouseleave",function(){
    button.style.color = "white";
    button.style.backgroundColor = "rgba(255, 255, 0, 0.557)";
    button.style.scale = "1";
    button.style.transition = "all ease 0.5s";
})
   

