var exterior=document.getElementById("exterior");

exterior.addEventListener("click",()=> {
  if(exterior.className=="noflipped") {
    exterior.className="flipped";
    exterior.style.transition="transform 0.6s";
    exterior.style.transformStyle ="preserve-3d";
    exterior.style.transform="rotateY(180deg)";
  } else {
    exterior.className="noflipped";
    exterior.style.transition="transform 0.6s";
    exterior.style.transformStyle ="preserve-3d";
    exterior.style.transform="rotateY(0deg)";


  }
});

