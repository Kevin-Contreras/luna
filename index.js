gsap.registerPlugin(ScrollTrigger);
var titulo1 = document.querySelector(".titulo1");
var small = document.querySelector(".small1")
var small2 = document.querySelector(".small")
var small3 = document.querySelector(".small2")
var small4 = document.querySelector(".small22")
var texto2 = document.querySelector(".texto2")
var img2 = document.querySelector(".img2")
var textoEsquina = document.querySelector(".textoEsquina")
var parrafo = document.querySelector(".parrafo")
var div2 = document.querySelector(".div2")
var div1 = document.querySelector(".div1")
var img1 = document.querySelector(".img1");
var img3s = document.querySelector(".img3");
var imga2 =document.querySelector(".imga2");
var principalTrabajo = document.querySelector(".principalTrabajo");
var work = document.querySelector(".work");
var anima = document.querySelector(".anima");
var tatto = document.querySelector(".tatto");
var imgtatto = document.querySelector(".imgTatto");
var s1 = document.querySelector(".s1");
var s2 = document.querySelector(".s2");
var s3 = document.querySelector(".s3");
var imgs = document.querySelector(".imgs")

var dd = document.querySelector(".dd")
var finalTitulo = document.querySelector(".finalTitulo")
var h1 = document.querySelector(".final")
var h2 = document.querySelector(".final2")
var h3 = document.querySelector(".final3")
var tatto2 = document.querySelector(".tatto2");

var n = document.getElementById("n")
var n5 = document.getElementById("boton1")
var n6 = document.getElementById("boton2")
var n7 = document.getElementById("boton3")
  var n2 = document.getElementById("boton4")
  var n3 = document.getElementById("boton5")
  var n4 = document.getElementById("boton6")
  var container = document.querySelector(".container")
  var bar1 = document.querySelector(".bar1")
  var bar2 = document.querySelector(".bar2")
  var bar3 = document.querySelector(".bar3")

const tl = gsap.timeline({
    scrollTrigger:{
        trigger:".titulo1",
        pin:true,
        markers:false,
        start:"top top",
        end:"100% 100%",
        scrub:true
       

    }
})
const tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".titulo2",
        pin:true,
        markers:false,
        start:"top top",
        end:"100% 100%",
        scrub:true
       

    }
})
const tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".textoEsquina",
        pin:true,
        markers:false,
        start:"top top",
        end:"100% 100%",
        scrub:true
       

    }
})
const tl8 = gsap.timeline({
    scrollTrigger:{
        trigger:".img2",
        pin:true,
        markers:false,
        start:"top top",
        end:"100% 100%",
        scrub:true
       

    }
})
const tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:".div2",
        pin:true,
        markers:false,
        start:"top top",
        end:"100% 100%",
        scrub:true
       

    }
})
const tl5 = gsap.timeline({
    scrollTrigger:{
        trigger:".principalTrabajo",
        pin:true,
        markers:false,
        start:"top top",
        end:"100% 100%",
        scrub:true
       

    }
})
const tl6 = gsap.timeline({
    scrollTrigger:{
        trigger:".imgs",
        pin:true,
        markers:false,
        start:"top top",
        end:"100% 100%",
        scrub:true
       

    }
})
const tl7 = gsap.timeline({
    scrollTrigger:{
        trigger:".finalTitulo",
        pin:true,
        markers:false,
        start:"top top",
        end:"100% 100%",
        scrub:true
       

    }
})
const tl9 = gsap.timeline({
    scrollTrigger:{
        trigger:".div1",
        pin:true,
        markers:false,
        start:"top top",
        end:"100% 100%",
        scrub:true
       

    }
})
tl2.to(small,{y:"-40",duartion:10},"-=1")
tl2.to(small2,{y:"-40",duartion:10},"-=1")
tl2.to(small3,{y:"-40",duartion:10},"-=1")
tl2.to(imga2,{y:"-400",duartion:10},"-=1")
tl2.to(small4,{y:"-40",duartion:10},"-=1")
tl2.to(img1,{y:"-250",duartion:10},"-=1")
tl2.to(parrafo,{y:"-60",duartion:10},"-=1")
tl3.to(img3s,{y:"-100",duartion:15},"-=1")
tl3.to(img3s,{rotate:20,duartion:10},"-=1")
tl4.to(work,{y:"-60",duartion:2},"-=1")
tl4.to(work,{rotate:0,duartion:10},"-=2")
tl4.to(anima,{y:"-100",duartion:10},"-=1")
tl6.to(dd,{y:"-90",duartion:10},"-=1")
tl6.to(h1,{y:"-90",duartion:10},"-=1")
tl6.to(h2,{y:"-90",duartion:10},"-=1")
tl6.to(h3,{y:"-90",duartion:10},"-=1")

window.addEventListener("load",function(e){
    n.style.display="none";
  })
  n2.addEventListener("click",function(e){
    window.scroll({
        top: 0,
        
        behavior: 'smooth'
      });
myFunction();

})
n3.addEventListener("click",function(e){
myFunction();
window.scroll({
    top: 1250,
    
    behavior: 'smooth'
  });

})
n4.addEventListener("click",function(e){
    myFunction();
window.scroll({
    top: 6000,
    
    behavior: 'smooth'
  });
})

n5.addEventListener("click",function(e){
    window.scroll({
        top: 0,
        
        behavior: 'smooth'
      });

})
n6.addEventListener("click",function(e){

window.scroll({
    top: 1250,
    
    behavior: 'smooth'
  });

})
n7.addEventListener("click",function(e){

window.scroll({
    top: 6000,
    
    behavior: 'smooth'
  });
})
function myFunction() {

    if(  container.classList.toggle("change")==false){
      n.style.display="none";
      
  
    }else{
      n.style.display="block";
    }
    
  
  }
  