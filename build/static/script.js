var controller = new ScrollMagic.Controller();

gsap.to(".headshot", {
    scrollTrigger: {
        trigger: ".headshot",
        toggleActions: "restart pause reverse pause",
        start: "top center",
        end:"top 100px",
        scrub: 2,
        markers: false,
    },
    x:100,
    rotation: 360,
    ease:"none",
    duration: 3

});

gsap.from("#about", {
    scrollTrigger: {
        trigger: ".headshot",
        toggleActions: "restart pause reverse pause",
        start: "top bottom",
        end:"top center",
        scrub: 2,
        markers: false,
    },
    x:"-100%",
    ease:"none",
    duration: 0.5

});

/*ScrollReveal().reveal('#about', { delay: 300, duration: 500});*/