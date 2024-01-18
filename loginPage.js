var password=sessionStorage.getItem("password");
var email=sessionStorage.getItem("email");
var cpassword=sessionStorage.getItem("cpassword");
console.log(password," ",cpassword," ",email);
var count=0;
var t=0;
// function load1(){
//     t++;
//     count++;
//     console.log(t);
//     if (t==1) {
//         document.getElementById("f").style.transform="scale(2)";
//         document.getElementById("n").style.transform="scale(1)"
//     } else if(t==2){
//         document.getElementById("l").style.transform="scale(2)";
//         document.getElementById("f").style.transform="scale(1)"
//     }else if(t==3){
//         document.getElementById("i").style.transform="scale(2)";
//         document.getElementById("l").style.transform="scale(1)"
//     }else if(t==4){
//         document.getElementById("p").style.transform="scale(2)";
//         document.getElementById("i").style.transform="scale(1)"
//     }else if(t==5){
//         document.getElementById("z").style.transform="scale(2)";
//         document.getElementById("p").style.transform="scale(1)"
//     }else if(t==6){
//         document.getElementById("o").style.transform="scale(2)";
//         document.getElementById("z").style.transform="scale(1)"
//     }else if(t==7){
//         document.getElementById("n").style.transform="scale(2)";
//         document.getElementById("o").style.transform="scale(1)"
//     }
//     if (t==7) {
//         t=0;
//     }
//     if (count<=14) {
//         setTimeout(load1(),10000); 
//     }
// }


function submitLoginForm(){
    const sessionPass=sessionStorage.getItem("password");
    const sessionEmail=sessionStorage.getItem("email");
    const password=document.getElementById("password").value;
    const email=document.getElementById("email").value;

    if (sessionPass==password && sessionEmail==email) {
        window.location.href="HomePage.html";
    }else{
        document.getElementById("errorR").innerHTML="Invalid Id Password"
        document.getElementById("errorR").style.color="red";
        document.getElementById("errorR").style.fontSize="1.6vw";
    }  
} 
