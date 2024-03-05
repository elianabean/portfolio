AOS.init();

let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
    gsap.from(".headshot", {
        scrollTrigger: {
            trigger: ".headshot",
            toggleActions: "restart pause reverse pause",
            start: "top bottom",
            end:"top center",
            scrub: 2,
            markers: false,
        },
        x:"-100%",
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

});

/*https://www.typeitjs.com/ */
new TypeIt("#name", {
    speed: 100,
    startDelay: 2000,
    waitUntilVisible: true,
    afterComplete: function (instance) {
        instance.destroy();
    }
}).go();



/*from https://cruip.com/implementing-tailwind-css-dark-mode-toggle-with-no-flicker/ */
const lightSwitches = document.querySelectorAll('.light-switch');
if (lightSwitches.length > 0) {
  lightSwitches.forEach((lightSwitch, i) => {
    if (localStorage.getItem('dark-mode') === 'true') {
      lightSwitch.checked = true;
    }
    lightSwitch.addEventListener('change', () => {
      const { checked } = lightSwitch;
      lightSwitches.forEach((el, n) => {
        if (n !== i) {
          el.checked = checked;
        }
      });
      if (lightSwitch.checked) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('dark-mode', true);
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('dark-mode', false);
      }
    });
  });
}

//clip animations
gsap.from(".clip-top, .clip-bottom", 2, {
  delay: 1,
  height: "50vh",
  ease: "power4.inOut",
})

gsap.to(".clip-top", 2, {
  delay: 4,
  clipPath: "inset(0 0 100% 0)",
  ease: "power4.inOut",
})

gsap.to(".clip-bottom", 2, {
  delay: 4,
  clipPath: "inset(100% 0 0 0)",
  ease: "power4.inOut",
})