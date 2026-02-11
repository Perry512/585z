import { useEffect, useRef, useState } from "react";

export function useFadeInOnScroll<T extends HTMLElement>(
  delay = 0,
  threshold = 0.35
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return {
    ref,
    className: `transition-all duration-700 ease-out transform
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
    `,
    style: {
      transitionDelay: `${delay}ms`,
    }
  };
}