

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();




// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});















// var tl = gsap.timeline()

// var lines= document.querySelectorAll("#page-2 h2");

// lines.forEach(function(elem)
// {
//     var clutter="";
//     var text=elem.textContent;
//     var split=text.split("")
//    split.forEach(function(e){
//     clutter=clutter +`<span>${e}</span>`;
//    })
//    elem.innerHTML=clutter;
// })


// tl.to("#page-2 h2 span",{
//     color:"#E3E3C4",
//     stagger:0.1,
//     duration:0.8,
//     scrollTrigger:{
//         trigger:"#page-2 h2",
//         scroller:"#main",
//         markers:true,
//         start:"top 60%",
//         end:"top 0%",
//         scrub:5
//     }

// })
// tl.from(".icon-1,.wave-2",{
//   transform:"translateX(-40%)",
//   scrollTrigger:{
//     scroller:"#main",
//     trigger:".icon-1,.wave-2",
//     markers:true,
//     start:"top 60%",
//     end:"top 0%",
//     scrub:3
//   }
// })