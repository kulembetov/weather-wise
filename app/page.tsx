"use client";
import { useState, useEffect } from "react";
import { Location, WeatherData } from "@/types";
import { fetchLocationDetails } from "@/utils/fetchLocationDetails";
import { fetchWeatherData } from "@/utils/fetchWeatherData";
import SearchForm from "@/app/components/SearchForm";
import WeatherInfo from "@/app/components/WeatherInfo";
import Map from "@/app/components/Map";
import Footer from "@/app/components/Footer";
import { useToast } from "@/hooks/useToast";

export default function HomePage() {
  const defaultCoordinates = { lat: 40.7128, lng: -74.006 };
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number }>(
    defaultCoordinates
  );
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const fetchInitialWeather = async (latitude: number, longitude: number) => {
    setLoading(true);

    const locationDetails = await fetchLocationDetails(latitude, longitude);
    if (!locationDetails) {
      setLoading(false);
      return;
    }
    const { name, admin1, country } = locationDetails;

    const weather = await fetchWeatherData(latitude, longitude);
    if (!weather) {
      setLoading(false);
      return;
    }

    setWeatherData({
      ...weather,
      name,
      admin1,
      country,
    });
    setLoading(false);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoordinates({ lat: latitude, lng: longitude });
          fetchInitialWeather(latitude, longitude);
        },
        () => {
          toast({
            title: "Unable to determine your location",
            description: "Defaulting to New York.",
            variant: "error",
          });
          fetchInitialWeather(defaultCoordinates.lat, defaultCoordinates.lng);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      toast({
        title: "Geolocation not supported",
        description: "Defaulting to New York.",
        variant: "error",
      });
      fetchInitialWeather(defaultCoordinates.lat, defaultCoordinates.lng);
    }
  }, []);

  const handleSearch = async (location: Location) => {
    const { latitude, longitude, name, admin1, country } = location;
    setCoordinates({ lat: latitude, lng: longitude });

    setLoading(true);

    const weather = await fetchWeatherData(latitude, longitude);
    if (!weather) {
      setLoading(false);
      return;
    }

    setWeatherData({
      ...weather,
      name,
      admin1,
      country,
    });
    setLoading(false);
    toast({
      title: "Location selected",
      description: `${name}, ${admin1}, ${country}`,
      variant: "success",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center m-5 gap-10">
        <SearchForm onSearch={handleSearch} loading={loading} />
        {loading ? (
          <p>Loading...</p>
        ) : (
          weatherData && <WeatherInfo data={weatherData} />
        )}
        {coordinates && <Map coordinates={coordinates} />}
      </main>
      <Footer />
    </div>
  );
}
