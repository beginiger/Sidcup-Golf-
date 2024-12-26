gsap.to(".header" , {
    backgroundColor: "#000" ,
    height : "85px" ,
    duration: "1" ,
    scrollTrigger: {
        trigger:".header" ,
        scroller: "body" ,
        // markers: false ,
        start: "top -20px", 
        scrub: 1
    }

})

gsap.to(".main" , {
    backgroundColor: "black" ,
    scrollTrigger:{
        trigger: ".main" ,
        scroller:"body" ,
        start: "top -10%" ,
        end: "top -90%" ,
        // markers: true ,
        scrub : true
    }
})

let cursor = document.querySelector(".cursor") ;
let cursorBlur = document.querySelector(".cursorBlur") ;

let dets = document.addEventListener("mousemove", function(dets){
    cursor.style.top = dets.clientY + "px";
    cursor.style.left = dets.clientX + "px";
    cursorBlur.style.top = dets.clientY - 200 + "px";
    cursorBlur.style.left = dets.clientX -200 + "px";
})

// var scroll = new LocomotiveScroll({
//     el:document.querySelector("body") ,
//     smooth:true 
// })