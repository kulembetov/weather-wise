export interface Location {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  admin1: string;
  country: string;
  fullAddress?: string;
  timezone: string;
}

export interface WeatherData {
  currentConditions: string;
  temperatureLow: number;
  temperatureHigh: number;
  windSpeed: number;
  name: string;
  admin1: string;
  country: string;
  timezone: string;
  forecast: string;
}
