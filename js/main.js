var header=document.getElementById("header");
var userName=prompt("What's Your Name ?");
var main=document.getElementById("main");
var age=document.getElementById("age");
var type=document.getElementById("type");
var star=document.getElementById("star");
var yearInput=document.getElementById("year");
function calc(){
    var year=yearInput.value;
    var data = new Date;
    var allAge = data.getFullYear()-year;
    age.innerHTML=`Your Age Is ${allAge}`;
    if(allAge<18){
        type.innerHTML=`You Are kid`;
    }
    else{
        type.innerHTML=`You Are Young`;
    }
    var cartona="";
    for(let i = 0 ; i <allAge ; i++){
        cartona+=` * `;
    }
    star.innerHTML=cartona;
}
header.innerHTML=`Hallo ${userName}`;
main.innerHTML=`What's Your Birthday`;