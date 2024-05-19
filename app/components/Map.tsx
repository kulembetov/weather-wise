import { useEffect, useRef } from "react";
import Script from "next/script";

interface MapProps {
  coordinates: { lat: number; lng: number } | null;
}

declare global {
  interface Window {
    initMap: () => void;
  }
}

const Map = ({ coordinates }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function initMap() {
      const interval = setInterval(() => {
        if (
          typeof window !== "undefined" &&
          window.google &&
          window.google.maps
        ) {
          clearInterval(interval);
          if (mapRef.current && coordinates) {
            const { lat, lng } = coordinates;
            const map = new google.maps.Map(mapRef.current, {
              center: { lat, lng },
              zoom: 10,
              mapId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID,
            });

            new google.maps.Marker({
              position: { lat, lng },
              map,
            });
          }
        }
      }, 1000);
    }
    window.initMap = initMap;
    if (window.google && window.google.maps) {
      initMap();
    }
  }, [coordinates]);

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&v=beta&libraries=marker&callback=initMap`}
        strategy="afterInteractive"
      />
      <div ref={mapRef} id="map" className="w-full h-96 rounded-lg"></div>
    </>
  );
};

export default Map;
