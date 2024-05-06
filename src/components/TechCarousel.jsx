/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { TecnologiesComponent } from "./TecnologiesComponent";

export const TechCarousel = ({ lista }) => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
      });
    }
  }, []);

  return (
    <>
      <aside className="scroller">
        <div className="flex  justify-center p-2 flex-wrap scroller__inner">
          {lista &&
            lista.map((item, index) => (
              <TecnologiesComponent key={index} item={item} />
            ))}
        </div>
      </aside>
    </>
  );
};
