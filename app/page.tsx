import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import map from "@/public/images/map.svg";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AirIcon from "@mui/icons-material/Air";
import SevereColdIcon from "@mui/icons-material/SevereCold";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center m-5 gap-10">
        <form className="flex flex-col justify-center items-center gap-3 w-full max-w-md relative">
          <SearchIcon className="absolute left-2 top-[24%] transform -translate-y-1/2 text-gray-500 z-10" />
          <Input
            type="text"
            placeholder="Search for location"
            className="w-full pl-10 text-center rounded-lg"
          />
          <Button className=" rounded-lg">Check Weather</Button>
        </form>
        <div className="flex flex-col justify-center items-center text-center border-2 rounded-2xl p-3 gap-1">
          <h1 className="text-2xl font-semibold">
            <CloudQueueIcon className="mr-3" />
            Weather Forecast
          </h1>
          <p className="text-lg mt-3">
            <SevereColdIcon className="mr-1" />
            Current Condition: <span className="font-bold">Cloudy</span>
          </p>
          <p className="text-md mt-3">
            <WbSunnyIcon className="mr-1" />
            Temperature Low: <span className="font-bold">28°C</span>
          </p>
          <p className="text-md">
            <AcUnitIcon className="mr-1" />
            Temperature High: <span className="font-bold">36°C</span>
          </p>
          <p className="text-md mt-3">
            <AirIcon className="mr-1" />
            Wind Speed: <span className="font-bold">3.6 km/h</span>
          </p>
          <p className="text-md mt-3">
            <LocationOnIcon className="mr-1" />
            Location: <span className="font-bold">Kansas City, KS</span>
          </p>
          <p className="text-md">
            <AccessTimeIcon className="mr-1" />
            Timezone: <span className="font-bold">GMT-5</span>
          </p>
          <div className="flex flex-col gap-1 mt-3">
            <h2 className="text-lg font-bold">
              <OnlinePredictionIcon className="mr-1" />
              Tomorrow's Forecast:{" "}
            </h2>
            <p className="text-md">
              Cloudy and very warm with a couple of thunderstorms, mainly late
              in the day.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image src={map} alt="Weather map" width={500} height={500} />
        </div>
      </main>
      <footer className="text-center p-4 border-t mt-auto">
        © 2024 Artur Kulembetov. All rights reserved.
      </footer>
    </div>
  );
}
