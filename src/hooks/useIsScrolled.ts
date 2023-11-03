import { useEffect, useState } from "react";

export const useIsScrolled = (): boolean => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // const body = document.getElementsByTagName("body")[0];
    const body = document.getElementById("__next");
    //TODO: review with tag has scroll
    body?.addEventListener("scroll", () => {
      setScrolled((body.scrollTop as number) > 0);
    });

    return () => {
      body?.removeEventListener("scroll", () => null);
    };
  }, []);

  return scrolled;
};
