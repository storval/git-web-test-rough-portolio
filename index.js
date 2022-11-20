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

    // const nonStick = document.getElementsByClassName('.text-left');
    // nonStick.setAttribute('z-index=0');----fá hjálp til að hafa sticky menu og flæðanid z-index

    const modalImg = parent.querySelector("img.modal-content");
    const captionText = parent.querySelector(".caption");
    const marquee = document.getElementsByClassName('.marquee-boy');
    modal.hidden = false;
    marquee.hidden = false;
    modalImg.src = tgt.src;
    captionText.innerHTML = tgt.alt;

    
  });
});

// -------------------------------------------------------------------------------------------------------------------------------------

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("main-art2").addEventListener("click", e => {
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



// -----------------------------------------------------------------------------------------------------------------------



window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("main-art3").addEventListener("click", e => {
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




window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("main-art4").addEventListener("click", e => {
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



//yes I still have to refactor the javascript to make it more pretty but I'm not so good with JS
//so this will have to do for now, open to any suggestions:) send me a line aronbjarklind@gmail.com


 // close the function



//  https://stackoverflow.com/questions/12368502/how-to-change-default-image-for-pointer/12369387#12369387

// var elms = document.getElementsByTagName("*");
// var n = elms.length;
// for(var i = 0; i < n; i ++) {
//     if(window.getComputedStyle(elms[i]).cursor == "pointer") {
//         elms[i].style.cursor = "url(fyrsta-sol.cur)";
//     }
// }
