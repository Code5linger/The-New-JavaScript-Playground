var tl = gsap.timeline({ repeat: 20 });

function init() {
  tl.set('img, h1', { xPercent: -100 })
    .to('img, h1', {
      duration: 3,
      xPercent: 0,
      x: 800,
      ease: 'slow(0.6, 1.2)',
      stagger: 0.2,
    })
    .from(
      'img, h1',
      {
        duration: 3,
        scale: 0,
        opacity: 0.5,
        ease: 'slow(0.6, 0.6, true)',
        stagger: 0.2,
      },
      '<',
    );
}

window.addEventListener('load', function (event) {
  console.log('load');
  gsap.set('#demo', { autoAlpha: 1 });
  init();
});
