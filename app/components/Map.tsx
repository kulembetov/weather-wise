import Image from "next/image";
import map from "@/public/images/map.svg";

const Map = () => {
  return (
    <div className="flex justify-center items-center">
      <Image src={map} alt="Weather map" width={500} height={500} />
    </div>
  );
};

export default Map;
