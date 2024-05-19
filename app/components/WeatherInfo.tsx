import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import SevereColdIcon from "@mui/icons-material/SevereCold";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AirIcon from "@mui/icons-material/Air";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";

const WeatherInfo = () => {
  return (
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
          Cloudy and very warm with a couple of thunderstorms, mainly late in
          the day.
        </p>
      </div>
    </div>
  );
};

export default WeatherInfo;
