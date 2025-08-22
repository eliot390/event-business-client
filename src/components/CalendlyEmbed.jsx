import { useEffect, useRef } from "react";

const CalendlyEmbed = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url: "https://calendly.com/eliot-pardo",
        parentElement: ref.current,
        prefill: {},
        utm: {}
      });
    }
  }, []);

  return (
    <div 
      ref={ref}
      style={{ minWidth: "320px", height: "630px" }}
    />
  );
};

export default CalendlyEmbed;
