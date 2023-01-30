import { initAOS } from "@/utils/aos";
import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircularProgress({ value }: { value: number }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    initAOS();
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= value ? value : prevProgress + 1
      );
    }, 100);
    if (progress >= value) {
      clearInterval(timer);
    } 
  }, []);
  return (
    <div  data-aos="zoom-in-up">
      <div style={{ width: 80, height: 80 }}>
        <CircularProgressbar
          value={progress}
          text={`${progress}% `}
          strokeWidth={6}
          circleRatio={1}
        />
      </div>
    </div>
  );
}

export default CircularProgress;
