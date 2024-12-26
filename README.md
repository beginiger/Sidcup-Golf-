# Learning GSAP

GSAP (GreenSock Animation Platform) transformed my approach to web animations. This powerful JavaScript library makes it simple to create smooth, professional animations. Through hands-on learning, I discovered key features like Timeline animations, ScrollTrigger capabilities, and Tweens.

Getting started was straightforward:

This was for navbar to change background and other parameters :

```javascript
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
```


For creating smooth transition while scrolling down the 
window by blending current page to next page 
```javascript
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
```



The library excels in performance, running at 60fps, and works consistently across browsers. Its rich plugin ecosystem includes ScrollTrigger and Draggable, offering endless animation possibilities. The comprehensive documentation and active community made learning enjoyable.
