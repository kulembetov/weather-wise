import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import SevereColdIcon from "@mui/icons-material/SevereCold";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AirIcon from "@mui/icons-material/Air";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import { WeatherData } from "@/types";

const WeatherInfo = ({ data }: { data: WeatherData }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center border-2 rounded-2xl p-3 gap-1">
      <h1 className="text-2xl font-semibold">
        <CloudQueueIcon className="mr-3" />
        Weather Forecast
      </h1>
      <p className="text-lg mt-3">
        <SevereColdIcon className="mr-1" />
        Current Condition:{" "}
        <span className="font-bold">{data.currentConditions}</span>
      </p>
      <p className="text-md mt-3">
        <WbSunnyIcon className="mr-1" />
        Temperature Low:{" "}
        <span className="font-bold">{data.temperatureLow} &#8451;</span>
      </p>
      <p className="text-md">
        <AcUnitIcon className="mr-1" />
        Temperature High:{" "}
        <span className="font-bold">{data.temperatureHigh} &#8451;</span>
      </p>
      <p className="text-md mt-3">
        <AirIcon className="mr-1" />
        Wind Speed: <span className="font-bold">{data.windSpeed} km/h</span>
      </p>
      <p className="text-md mt-3">
        <LocationOnIcon className="mr-1" />
        Location:{" "}
        <span className="font-bold">
          {data.name}, {data.admin1}, {data.country}
        </span>
      </p>
      <p className="text-md">
        <AccessTimeIcon className="mr-1" />
        Timezone: <span className="font-bold">{data.timezone}</span>
      </p>
      <div className="flex flex-col gap-1 mt-3">
        <h2 className="text-lg font-bold">
          <OnlinePredictionIcon className="mr-1" />
          Tomorrow's Forecast:{" "}
        </h2>
        <p className="text-md">{data.forecast}</p>
      </div>
    </div>
  );
};

export default WeatherInfo;
