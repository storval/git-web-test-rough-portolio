/*jshint esversion: 6 */    

// function enlargeImg(){
//     let theImage = document.getElementsByClassName("mynd1");
//     theImage.width = theImage.width * 2;
//     theImage.height = theImage.height * 2;


//   };


//     theImage = docuument.getElementsByClassName('')


//   window.onload = function() {
//     let anchors = document.getElementsByClassName('mynd1');
//     for(var i = 0; i < anchors.length; i++) {
//         var anchor = anchors[i];
//         anchor.onclick = function() {
//             theImage.width = theImage.width * 2;
    
//             theImage.height = theImage.height * 2;
//         }
//     }
// }

// soon...

// alert("hello world!");

// function opnaMynd() {
//     eyeliner1.src = "img.png"; //id.src
//     eyeliner1.height="500"; //Your desired Height
//     eyeliner1.width="219"; //Your desired Width
//   }
  

// function opnaMynd() {
//     myndG.src = ""
// }


//  -------possible rand á myndirnar, uppröðun og svona...
// var randomMyndir = $("main-midja.myndir");
// for(var i = 0; i  < randomMyndir.length; i++){
//     var target = Math.floor(Math.random() * randomMyndir.length -1) + 1;
//     var target2 = Math.floor(Math.random() * randomMyndir.length -1) +1;
//     randomMyndir.eq(target).before(cards.eq(target2));
// }





// --------------------------------------------------------------------------------

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("main-midja-art-myndir").addEventListener("click", e => {
    const tgt = e.target;
    if (!tgt.matches(".myImg") && !tgt.matches(".modal") && !tgt.matches(".close")) return; // not the image or close
    const parent = tgt.closest("div.myndir-a4");
    const modal = parent.querySelector('.modal');

    if (tgt.matches(".modal")) {
      modal.hidden = true;
      return;
    }
    if (tgt.matches(".close")) {
      modal.hidden = true;
      return;
    }

    const modalImg = parent.querySelector("img.modal-content");
    const captionText = parent.querySelector(".caption");
    const marquee = document.getElementsByClassName('.marquee-boy');
    modal.hidden = false;
    marquee.hidden = false;
    modalImg.src = tgt.src;
    captionText.innerHTML = tgt.alt;
    
  });
});

var span = document.getElementsByClassName("modal")[0];

span.onclick = function() {
  modal.hidden = true;
};




 // close the function






