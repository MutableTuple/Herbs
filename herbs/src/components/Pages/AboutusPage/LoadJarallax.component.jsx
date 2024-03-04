import React, { useEffect } from "react";
const LoadJarallax = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "./src/assets/vendor/jarallax/dist/jarallax.min.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "./src/assets/vendor/parallax-js/dist/parallax.min.js";
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return null;
};

export default LoadJarallax;
