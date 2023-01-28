import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircularProgress({ value }: { value: number }) {
  return (
    <div>
      <div style={{ width: 80, height: 80 }}>
        <CircularProgressbar
          value={value}
          text={`${value}% `}
          strokeWidth={6}
          circleRatio={1}
        />
      </div>
    </div>
  );
}

export default CircularProgress;
