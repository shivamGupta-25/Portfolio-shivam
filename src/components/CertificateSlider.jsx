import { useGSAP } from "@gsap/react";
import { certificate } from "@/Data/Data.jsx";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const CertificateSlider = () => {
  const sliderRef = useRef();

  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  useGSAP(() => {
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    if (isDesktop) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".certificate-section",
          start: "2% top",
          end: `+=${scrollAmount + 300}px`,
          scrub: true,
          pin: true,
        },
      });

      tl.to(".certificate-section", {
        x: `-${scrollAmount + 300}px`,
        ease: "power1.inOut",
      });
    }
  });

  return (
    <div 
      ref={sliderRef} 
      className="certificate-slider-wrapper w-full min-h-screen px-4 mt-0 md:mt-20 lg:h-dvh lg:mt-0 lg:px-0"
    >
      <div className="certificate-container h-full w-full flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:gap-24 md:ml-12 lg:gap-20 2xl:gap-72 flex-nowrap">
        {certificate.map((certificate) => (
          <div
            key={certificate.name}
            className={`certificate-card bg-accent-foreground border-none p-1 relative z-30 
              w-[85vw] h-64
              sm:w-80 sm:h-72 sm:p-2
              md:w-[90vw] md:h-[50vh]
              lg:w-[50vw] lg:h-[70vh]
              flex-none ${certificate.rotation} 
              rounded-sm shadow-2xl border border-primary/30 
              shadow-primary/20 transition-all duration-300 
              hover:scale-[1.02] 
              transform-gpu`}
          >
            <img
              src={certificate.certificate}
              alt=""
              className="certificate-image w-full h-full object-cover rounded-sm shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateSlider;