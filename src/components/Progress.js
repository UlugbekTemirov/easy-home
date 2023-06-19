import { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

function Progress({ max = 100, value = 0, color = "#F9A826" }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) return;
    const handleScroll = () => {
      const { top, bottom } = document
        .getElementById("progress")
        .getBoundingClientRect();

      // Checking if the component is in the viewport
      if (top < window.innerHeight && bottom >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);
  return (
    <div id="progress" className="progress-bar">
      {isVisible && (
        <ProgressBar
          maxCompleted={max}
          completed={value}
          animateOnRender={true}
          bgColor={color}
          baseBgColor="#F0F4F5"
          height="15px"
          labelSize="13px"
          borderRadius="2px"
          isLabelVisible={true}
        />
      )}
    </div>
  );
}

export default Progress;
