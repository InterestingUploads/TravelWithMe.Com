function read(){
  var dot= document.getElementById("dot");
  var more=document.getElementById("more");
  var readbtn=document.getElementById("readbtn");
  if(dot.style.display==="none"){
    dot.style.display="inline";
    more.style.display="none";
    readbtn.innerHTML="Read More";
  }
  else{
    more.style.display="inline";
    readbtn.innerHTML="Read Less";
    dot.style.display="none";
  }
}

function openNav() {
document.getElementById("mySidebar").style.width = "250px";
document.getElementById("sidemain").style.marginLeft = "250px";
}

function closeNav() {
document.getElementById("mySidebar").style.width = "0";
document.getElementById("sidemain").style.marginLeft= "0";
}


