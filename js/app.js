function full(){
    document.getElementById('column1').style.width='100%';
    document.getElementById('column2').style.width='100%';
    document.getElementById('column3').style.width='100%';
    document.getElementById('column4').style.width='100%';
}

function towcolumn(){
    document.getElementById('column1').style.width='50%';
    document.getElementById('column2').style.width='50%';
    document.getElementById('column3').style.width='50%';
    document.getElementById('column4').style.width='50%';
}

function fourcolumn(){
    document.getElementById('column1').style.width='25%';
    document.getElementById('column2').style.width='25%';
    document.getElementById('column3').style.width='25%';
    document.getElementById('column4').style.width='25%';
}

function f(aa){
    if(1){
    let s =document.querySelectorAll('.a');
    s[aa].classList.toggle('b');
    /*
    document.getElementById("1").classList.toggle("b");*/
};
}

VanillaTilt.init(document.querySelectorAll(".bo"), {
    max: 25,
    speed: 400
});
