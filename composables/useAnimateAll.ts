// composables/useAnimateHeading.ts
import { ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useAnimateAll(headingText: string) {
  const splitHeading = ref("");

  function animate() {
    const headingElement = document.querySelector("._milestones_heading");

    if (!headingElement) return;

    const splitText = headingText
      .split("")
      .map((char) => `<span class="letter">${char}</span>`)
      .join("");

    splitHeading.value = splitText;

    gsap.fromTo(
      "._milestones_heading .letter",
      { opacity: 0.5 },
      {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: headingElement,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  }

  return { splitHeading, animate };
}
