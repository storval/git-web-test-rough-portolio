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


window.onload = function() { // add window.onload here and set it euqal to a function
  // Get the modal
  var modal = document.getElementById('myModal');
  
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  
  var img = document.getElementById('myImg');
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  

  img.onclick = function() {
    modal.style.display = "block";

    modalImg.src = this.src;
    captionText.innerHTML = this.alt;

  };

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("modal")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  };

  

}; // close the function






