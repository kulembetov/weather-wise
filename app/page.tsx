"use client";
import { useState, useEffect } from "react";
import { Location, WeatherData } from "@/types";
import { fetchLocationDetails } from "@/utils/fetchLocationDetails";
import { fetchWeatherData } from "@/utils/fetchWeatherData";
import { toast } from "react-toastify";
import SearchForm from "@/app/components/SearchForm";
import WeatherInfo from "@/app/components/WeatherInfo";
import Map from "@/app/components/Map";
import ThemeToggler from "@/app/components/ThemeToggler";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function HomePage() {
  const defaultCoordinates = { lat: 40.7128, lng: -74.006 }; // New York coordinates
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number }>(
    defaultCoordinates
  );
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

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
          toast.error(
            "Unable to determine your location. Defaulting to New York."
          );
          fetchInitialWeather(defaultCoordinates.lat, defaultCoordinates.lng);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      toast.error(
        "Geolocation is not supported by your browser. Defaulting to New York."
      );
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
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center m-5 gap-10">
        <SearchForm onSearch={handleSearch} />
        {loading ? (
          <p>Loading...</p>
        ) : (
          weatherData && <WeatherInfo data={weatherData} />
        )}
        {coordinates && <Map coordinates={coordinates} />}
      </main>
      <footer className="text-center p-4 border-t mt-auto">
        <div className="flex flex-col justify-center items-center gap-3">
          <ThemeToggler />
          <ul className="flex gap-2">
            <li>
              <Link href="https://github.com/kulembetov">
                <FaGithub />
              </Link>
            </li>
            <li>
              <Link href="https://linkedin.com/in/kulembetov">
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/arturkulembetov">
                <FaTwitter />
              </Link>
            </li>
          </ul>
          <p className="text-sm">
            © 2024 Artur Kulembetov. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
