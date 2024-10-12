import { useEffect, useState } from "react";

const useGetLoadingState = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check when the window has finished loading everything
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 1000);
    };
    if (document.readyState === "complete") {
      setTimeout(() => {
        setLoading(false);
      }, 800);
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Clean up the event listener
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return { loading };
};
export default useGetLoadingState;
