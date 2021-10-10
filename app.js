//timeline
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.home', //as soon as scrolling through home
        start: '0%',
        end: '100%',
        scrub: 1 // one second to catch up with scrollbar
    },
});
tl.fromTo('.sliding-text', {y:0}, {y: -400});
tl.to('.logo', {opacity: 0})

let tl3  = gsap.timeline({
    scrollTrigger: {
        trigger: '.home', //as soon as scrolling through home
        start: '0%',
        end: '100%',
        scrub: 1, // one second to catch up with scrollbar
        pin: true
    },
});