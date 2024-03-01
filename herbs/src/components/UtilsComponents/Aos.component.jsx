import React, { useEffect } from "react";

const Aos = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./src/assets/vendor/aos/dist/aos.js"; // Replace '/path/to/script.js' with the actual path
    script.async = true;

    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default Aos;
