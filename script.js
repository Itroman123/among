function HideText() {
   const Text1 = document.getElementById("Tex1");

   let audio = new Audio();
   audio.src = './round-start.mp3';
   audio.autoplay = true;
   


   if (Text1.style.visibility === "hidden") {
       Text1.style.visibility = "visible";
   } else {
       Text1.style.visibility = "hidden";
   }
}