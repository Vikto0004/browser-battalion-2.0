import SplitType from 'split-type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
  // Split text into spans
  let typeSplit = new SplitType('[text-split]', {
    types: 'words, chars',
    tagName: 'span',
  });

  // Link timelines to scroll position
  function createScrollTrigger(triggerElement, timeline) {
    // Reset tl when scroll out of view past bottom of screen
    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top bottom',
      onLeaveBack: () => {
        timeline.progress(0);
        timeline.pause();
      },
    });
    // Play tl when scrolled into view (60% from top of screen)
    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top 90%',
      onEnter: () => timeline.play(),
    });
  }

  document
    .querySelectorAll('[letters-fade-in-random]')
    .forEach(function (element, index) {
      let tl = gsap.timeline({ paused: true });
      tl.from(element.querySelectorAll('.char'), {
        opacity: 0,
        duration: 0.7,
        ease: 'power1.out',
        stagger: { amount: 0.4, from: 'random' },
      });
      createScrollTrigger(element, tl);
    });

  // Avoid flash of unstyled content
  gsap.set('[text-split]', { opacity: 1 });
});
