const tilt = $('.js-tilt').tilt({
    maxTilt:        20,
perspective:    2000,   // Transform perspective, the lower the more extreme the tilt gets.
easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
speed:          300,    // Speed of the enter/exit transition.
transition:     true,   // Set a transition on enter/exit.
disableAxis:    null,   // What axis should be disabled. Can be X or Y.
reset:          true,   // If the tilt effect has to be reset on exit.
glare:          false,  // Enables glare effect
maxGlare:       1       // From 0 - 1.
});

document.addEventListener('DOMContentLoaded', () =>{
    let tl = new TimelineMax();

    tl.fromTo('.bg-loader', 1 ,{width: '100%'},
    {width: '0%', delay: 0, ease: Expo.easeInOut})

    tl.fromTo('.bg-video', 2 ,{width: '0%', opacity: 0},
    {width: '100%', delay: 0, ease: Expo.easeInOut, opacity: 1}, '-=1')

    tl.fromTo('.logo', 0.7 ,{y: -50, opacity: 0},
    {y: 0, delay: 0, ease: Expo.easeInOut, opacity: 1}, '-=0.5')

    tl.fromTo('.nav-list', 0.7 ,{y: -50, opacity: 0},
    {y: 0, delay: 0, ease: Expo.easeInOut, opacity: 1}, '-=0.5')

    tl.fromTo('.nav-socials', 0.7 ,{y: -50, opacity: 0},
    {y: 0, delay: 0, ease: Expo.easeInOut, opacity: 1}, '-=0.5')

    tl.fromTo('.item-1', 0.7 ,{y: -50, opacity: 0},
    {y: 0, delay: 0, ease: Expo.easeInOut, opacity: 1}, '-=0.5')

    tl.fromTo('.item-2', 0.7 ,{y: -50, opacity: 0},
    {y: 0, delay: 0, ease: Expo.easeInOut, opacity: 1}, '-=0.5')

    tl.fromTo('.item-3', 0.7 ,{y: -50, opacity: 0},
    {y: 0, delay: 0, ease: Expo.easeInOut, opacity: 1}, '-=0.5')

    tl.fromTo('.item-4', 0.7 ,{y: -50, opacity: 0},
    {y: 0, delay: 0, ease: Expo.easeInOut, opacity: 1}, '-=0.5')

    tl.fromTo('.item-5', 0.7 ,{y: -50, opacity: 0},
    {y: 0, delay: 0, ease: Expo.easeInOut, opacity: 1}, '-=0.5')


})