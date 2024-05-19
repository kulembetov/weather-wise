import { useEffect, useState } from "react";

export const useLoadGoogleMaps = (apiKey: string) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=beta&libraries=marker`;
    script.async = true;
    script.onload = () => setLoaded(true);
    script.onerror = () =>
      console.error("Google Maps script could not be loaded.");

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [apiKey]);

  return loaded;
};
