function f(){
    var h= document.querySelectorAll(".list-view");
    var y= document.querySelectorAll(".view_item");
    var vi_left =document.querySelectorAll(".vi_left");
    var c = document.querySelectorAll(".view_item");
    h.forEach(a => {
        a.classList.add("l-v");
    });

    y.forEach(a => {
        a.classList.add("x");
    });

    vi_left.forEach(a => {
        a.classList.add("v");
    });
    vi_left.forEach(a => {
        a.classList.add("s");
    });
}

function x(){
    var h= document.querySelectorAll(".list-view");
    var y= document.querySelectorAll(".view_item");
    var vi_left =document.querySelectorAll(".vi_left");
    var c = document.querySelectorAll(".view_item");
    h.forEach(a => {
        a.classList.remove("l-v");
    });

    y.forEach(a => {
        a.classList.remove("x");
    });

    vi_left.forEach(a => {
        a.classList.remove("v");
    });
    vi_left.forEach(a => {
        a.classList.remove("s");
    });
}