

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






var tl0 = gsap.timeline()

tl0.from("#loader svg",{
  y: -3000,
  opacity: 1,
  duration: 0.8,
  // height: "6vh"
  // delay: 0.5
})

tl0.to("#page1",{
  scale : 1,
  duration: 0.5,
  delay: 1,
  ease: 'power1'
})

tl0.to("#loader svg",{
  // y: -3000,
  // opacity: 1,
  // duration: 0.8,
  display: "none",
  // opacity: 0,
  // delay: 1.7,
  // height: "6vh"
  // delay: 0.5
},"yashu")

tl0.to("nav",{
  opacity: 1
// dislay: "block"
}, "yashu")

// tl0.to("nav img, #nav-part2",{
//   opacity:1,
//   duration: 1
// })














var tl = gsap.timeline()




tl.to("nav #logo",{
  height: "3vh",
  y: "-0.4vh",
  scrollTrigger:{
      trigger: "#page1",
      scroller: "#main",
      // markers: true,
      start: "top 15%",
      end: " top -10%",
      scrub:  true
  }
})


tl.to("nav",{
  y: -100,
    duration: 1,

    scrollTrigger:{
        trigger: "#page1",
        scroller: "#main",
        // markers: true,
        start: "top -5%",
        end: " top -30%",
        scrub: true
    }
    
})

tl.to("#page1-overlay",{
    backgroundColor: `rgba(255, 255, 255, 0.497)`,

    scrollTrigger:{
        trigger: "#page1",
        scroller: "#main",
        // markers: true,
        start: "top -60%",
        end: " top -340%",
        scrub: 2
    }
})

var tl = gsap.timeline()



function page2Animation(){
var tl = gsap.timeline()

var page2Para = document.querySelector("#page2 p").textContent
var page2 = document.querySelector("#page2 p")

var page2Spllit = page2Para.split("")
console.log(page2Spllit)


var clutter =""

page2Spllit.forEach(function(val){
  clutter = clutter + `<span>${val}</span>`
})

page2.innerHTML = clutter


tl.to("#page2 p span",{
  color: "#E3E3C4",
  stagger: 0.3,

  scrollTrigger:{
    trigger: "#page2",
    scroller: "#main",
    // markers: true,
    start: "top 60%",
    end: "top -30%",
    scrub: 1
}
})
 

}

page2Animation()

gsap.to(".icon-1,.wave-2",{
  x:"-30%",
  scrollTrigger:{
    scroller:"#main",
    trigger:".icon-1,.wave-2",
    // markers:true,
    start:"top 60%",
    end:"top -20%",
    scrub:5
  }
})



function page3SplitAnimation(){

  var page3H1 = document.querySelector("#page3 h1").textContent
var page3 = document.querySelector("#page3 h1")

var page3Spllit = page3H1.split("")
console.log(page3Spllit)


var clutter =""

page3Spllit.forEach(function(val){
  clutter = clutter + `<span>${val}</span>`
})

page3.innerHTML = clutter


tl.to("#page3 h1 span",{
  color: "#434B34",
  stagger: 0.4,

  scrollTrigger:{
    trigger: "#page3",
    scroller: "#main",
    // markers: true,
    start: "top 40%",
    end: "top 25%",
    scrub: 1
}
})
}


page3SplitAnimation()


function page3BoxAnimation(){


  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page3 #box",
      scroller: "#main",
      // markers: true,
      start: "top 80%",
      end: "top 40%",
      scrub: 1

    }
  })
  
  tl3.from("#page3-left p, #page3-right #image1",{
    y: 100,
    opacity: 0,
    duration: 1,
    
  })

  tl3.from("#page3 #left3-center",{
    y: 100,
    opacity: 0,
    duration: 1,
    
  })

  tl3.from("#page3-left img",{
    y: 100,
    opacity: 0,
    duration: 1,
    
  })

  gsap.from("#page3-right #image2",{
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
      trigger: "#page3-right #image2",
      scroller: "#main",
      // markers: true,
      start: "top 95%",
      end: "top 90%",
      scrub: 1
    }
    
  })




}

page3BoxAnimation()






gsap.to(".icon-5,.wave-5-2",{
  transform:"translateX(-30%)",
  scrollTrigger:{
    scroller:"#main",
    trigger:".icon-5,.wave-5-2",
    // markers:true,
    start:"top 60%",
    end:"top -20%",
    scrub:3
  }
})

gsap.to(".icon-6,.wave-6-2",{
  transform:"translateX(-30%)",
  scrollTrigger:{
    scroller:"#main",
    trigger:".icon-6,.wave-6-2",
    // markers:true,
    start:"top 60%",
    end:"top -20%",
    scrub:true
  }
})





gsap.from(".icon-10, .wave-10-2",{
  transform:"translateX(-30%)",
  scrollTrigger:{
    scroller:"#main",
    trigger:".icon-10,.wave-10-2",
    // markers:true,
    start:"top -60%",
    end:"top -120%",
    scrub:true
  }
})


function page6SplitAnimation(){
  var page6H1 = document.querySelector("#page6 h1").textContent

var page6 = document.querySelector("#page6 h1")

var page6Spllit = page6H1.split("")
console.log(page6Spllit)


var clutter =""

page6Spllit.forEach(function(val){
  clutter = clutter + `<span>${val}</span>`
})

page6.innerHTML = clutter


tl.to("#page6 h1 span",{
  color: "#E3E3C4",
  stagger: 0.4,

  scrollTrigger:{
    trigger: "#page6",
    scroller: "#main",
    // markers: true,
    start: "top 40%",
    end: "top 25%",
    scrub: 1
}
})
}


page6SplitAnimation()

function page6Animation(){

  var tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page6-box",
      scroller: "#main",
      // markers: true,
      start: "top 80%",
      end: "top 60%",
      scrub: 1
    }
  })

  tl6.from("#page6-left, #right6-right",{
    y:100,
    opacity: 0,
  })

  tl6.from("#right6-left",{
    y:100,
    opacity: 0,
  })

  gsap.from("#page6-footer",{
    y: 100,
    opacity: 0,
    scrollTrigger:{
      trigger: "#page6-footer",
      scroller: "#main",
      // markers: true,
      start: "top 90%",
      end: "top 60%",
      scrub: 2
    }
  })

}

page6Animation()


function page7SplitAnimation(){
  var page7H1 = document.querySelector("#page7 h1").textContent

var page7 = document.querySelector("#page7 h1")

var page7Spllit = page7H1.split("")
console.log(page7Spllit)


var clutter =""

page7Spllit.forEach(function(val){
  clutter = clutter + `<span>${val}</span>`
})

page7.innerHTML = clutter


tl.to("#page7 h1 span",{
  color: "#434B34",
  stagger: 0.4,

    scrollTrigger:{
      trigger: "#page7",
      scroller: "#main",
      // markers: true,
      start: "top 60%",
      end: "top -30%",
      scrub: 1
  }

})
}

page7SplitAnimation()





function page8Animation(){
  var tl8 = gsap.timeline({
    scrollTrigger:{
      trigger: "#page8",
      scroller: "#main",
      // markers: true,
      start: "top 0%",
      end: "top -120%",
      scrub: 1,
      pin: true
  
    }
  
  })
  
  
  
  tl8.to("#page8-image1",{
    x: "-30%",
    duration:1,
    
  },"page8")
  
  tl8.to("#page8-image2",{
    x: "30%",
    duration:1,
    
  },"page8")
  
  tl8.from("#page8-box h3, #page8-box p",{
    opacity: 0,
    duration:1,
    
  },"page8")
  
  tl8.from("#page8-box #page8-footer",{
    y: 100,
    opacity: 0,
    duration: 1
  },"page8")
}

page8Animation()





function page10SplitAnimation(){
  var page10H1 = document.querySelector("#page10-inner h1").textContent
console.log([page10H1])

var page10 = document.querySelector("#page10-inner h1")

var page10Spllit = page10H1.split("")
console.log(page10Spllit)


var clutter =""

page10Spllit.forEach(function(val){
  clutter = clutter + `<span>${val}</span>`
})

page10.innerHTML = clutter


tl.to("#page10-inner h1 span",{
  color: "#E3E3C4",
  stagger: 0.4,

  scrollTrigger:{
    trigger: "#page10-inner",
    scroller: "#main",
    // markers: true,
    start: "top 40%",
    end: "top 25%",
    scrub: 1
}
})
}
page10SplitAnimation()



function page10Animation(){
  var tl10 = gsap.timeline({
    scrollTrigger:{
      trigger: "#page10-inner",
      scroller: "#main",
      // markers: true,
      start: "top 40%",
      end: "top 0%",
      scrub: 2
    }
  
  })
  
  tl10.from("#page10-inner p",{
    y: 80,
    opacity: 0
  })
  
  tl10.from("#page10-box #image2, #page10-box #image3",{
    y: 80,
    opacity: 0
  })
  
  gsap.from("#page10-box #image1",{
    y: 80,
    opacity: 0,
  
    scrollTrigger:{
      trigger: "#page10-box #image1",
      scroller: "#main",
      // markers: true,
      start: "top 90%",
      end: "top 70%",
      scrub: 1
    }
  
  })
  
  gsap.from("#page10-footer",{
    y: 100,
    opacity: 0,
    scrollTrigger:{
      trigger: "#page10-footer",
      scroller: "#main",
      // markers: true,
      start: "top 90%",
      end: "top 60%",
      scrub: 2
    }
  })
}
page10Animation()




function page11Animation(){
  var tl11 = gsap.timeline({
    scrollTrigger:{
      trigger: "#page11 h1",
      scroller: "#main",
      // markers: true,
      start: "top 80%",
      end: "top 60%",
      scrub: 2
      }
  
  })
  
  tl11.from("#page11 h1",{
    y: 60,
    opacity: 0
  })
  
  tl11.from("#page11 p",{
    y: 60,
    opacity: 0
  })
  
  tl11.from("#top11-left img",{
    y: 60,
    opacity: 0
  })
  
  
  gsap.from("#top11-right h2",{
    y: 60,
    opacity: 0,
    scrollTrigger:{
      trigger: "#top11-right h2",
      scroller: "#main",
      // markers: true,
      start: "top 80%",
      end: "top 60%",
      scrub: 1
      }
  })
  
  gsap.from("#top11-right h3",{
    y: 60,
    opacity: 0,
    scrollTrigger:{
      trigger: "#top11-right h3",
      scroller: "#main",
      // markers: true,
      start: "top 80%",
      end: "top 60%",
      scrub: 1
      }
  })
  
  gsap.from("#top11-right #top11-footer",{
    y: 60,
    opacity: 0,
    scrollTrigger:{
      trigger: "#top11-right #top11-footer",
      scroller: "#main",
      // markers: true,
      start: "top 80%",
      end: "top 60%",
      scrub: 1
      }
  })
  
  
  
  
  gsap.from("#bottom11-right img",{
    y: 60,
    opacity: 0,
    scrollTrigger:{
      trigger: "#bottom11-right img",
      scroller: "#main",
      // markers: true,
      start: "top 80%",
      end: "top 60%",
      scrub: 1
      }
  })
  
  
  
  gsap.from("#bottom11-left h2",{
    y: 60,
    opacity: 0,
    scrollTrigger:{
      trigger: "#bottom11-left h2",
      scroller: "#main",
      // markers: true,
      start: "top 80%",
      end: "top 60%",
      scrub: 1
      }
  })
  
  gsap.from("#bottom11-left h3",{
    y: 60,
    opacity: 0,
    scrollTrigger:{
      trigger: "#bottom11-left h3",
      scroller: "#main",
      // markers: true,
      start: "top 80%",
      end: "top 60%",
      scrub: 1
      }
  })
  
  gsap.from("#bottom11-left #bottom11-footer",{
    y: 60,
    opacity: 0,
    scrollTrigger:{
      trigger: "#bottom11-left #bottom11-footer",
      scroller: "#main",
      // markers: true,
      start: "top 80%",
      end: "top 60%",
      scrub: 1
      }
  })
}

page11Animation()

function page12Animation(){
  gsap.from("#page12-box",{
    y:30,
    opacity: 0,
    scrollTrigger:{
      trigger: "#page12-box",
      scroller: "#main",
      // markers: true, 
      start: "top 90%",
      end: "top 70%",
      scrub: 2
  
    }
  })
}

page12Animation()


function page13Animation(){
  gsap.from("#page13-inner #page13-top, #page13-inner #page13-nav1",{
    y:80,
    opacity: 0,
    scrollTrigger:{
      trigger: "#page13",
      scroller: "#main",
      // markers: true,
      start: "top 70%",
      end: "top 55%",
      scrub: 2
    }
  })
}
page13Animation()





var nav1 = document.querySelectorAll("#page13-nav1 h3")
console.log(nav1)

nav1.forEach(function(val){
  val.addEventListener("mouseenter",function(){
    nav1.forEach(function(dets){
      dets.style.color = "gray"
    })
    val.style.color = "white"


  })

  val.addEventListener("mouseleave",function(){
    nav1.forEach(function(dets){
      dets.style.color = "white"
    })
    // val.style.color = "white"


  })
})


var nav2 = document.querySelectorAll("#page13-nav2 h3")
console.log(nav1)

nav2.forEach(function(val){
  val.addEventListener("mouseenter",function(){
    nav2.forEach(function(dets){
      dets.style.color = "gray"
    })
    val.style.color = "white"


  })

  val.addEventListener("mouseleave",function(){
    nav2.forEach(function(dets){
      dets.style.color = "white"
    })
    // val.style.color = "white"


  })
})
















