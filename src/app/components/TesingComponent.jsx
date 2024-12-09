"use client";

import React, { useEffect, useRef } from "react";

// You can also import the neonCursor function from the CDN directly
import { neonCursor } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";
// import { neonCursor } from "three";

const NeonCursorApp = () => {
  const appRef = useRef(null);

  useEffect(() => {
    if (appRef.current) {
      neonCursor({
        el: appRef.current,
        shaderPoints: 16,
        curvePoints: 80,
        curveLerp: 0.5,
        radius1: 5,
        radius2: 30,
        velocityTreshold: 10,
        sleepRadiusX: 100,
        sleepRadiusY: 100,
        sleepTimeCoefX: 0.0025,
        sleepTimeCoefY: 0.0025,
      });
    }
  }, []);

  return (
    <div ref={appRef} id="app">
      <div id="hero">
        <h1>
          NEON
          <br />
          CURSOR
        </h1>
        <a
          target="_blank"
          href="https://github.com/klevron/threejs-toys"
          rel="noopener noreferrer"
        >
          github/threejs-toys
        </a>
      </div>
    </div>
  );
};

export default NeonCursorApp;
