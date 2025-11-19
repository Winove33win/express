import { useEffect } from "react";

const defaultTranslate = {
  "fade-up": "translate3d(0, 24px, 0)",
  "fade-down": "translate3d(0, -24px, 0)",
  "fade-left": "translate3d(-24px, 0, 0)",
  "fade-right": "translate3d(24px, 0, 0)",
};

function setInitialStyles(element, { duration, easing }) {
  const animation = element.getAttribute("data-aos");
  const delay = element.getAttribute("data-aos-delay");
  const translate = defaultTranslate[animation] ?? "translate3d(0, 16px, 0)";

  element.style.setProperty("--aos-translate", translate);
  element.style.setProperty("--aos-duration", `${duration}ms`);
  element.style.setProperty("--aos-easing", easing);

  if (delay) {
    element.style.setProperty("--aos-delay", `${delay}ms`);
  }
}

export default function useScrollAnimations({
  duration = 900,
  easing = "cubic-bezier(0.645, 0.045, 0.355, 1)",
  offset = 60,
  once = true,
} = {}) {
  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const elements = Array.from(document.querySelectorAll("[data-aos]"));

    elements.forEach((element) => setInitialStyles(element, { duration, easing }));

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("aos-animate"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove("aos-animate");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: `0px 0px -${offset}px 0px`,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [duration, easing, offset, once]);
}
