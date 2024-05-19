export const fetchWeatherData = async (latitude: number, longitude: number) => {
  try {
    const currentDate = new Date().toISOString().split('T')[0];
    const nextDate = new Date(Date.now() + 24 * 60 * 60 * 1000)
      .toISOString()
      .split('T')[0];

    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,windspeed_10m&daily=temperature_2m_max,temperature_2m_min&timezone=auto&start_date=${currentDate}&end_date=${nextDate}`
    );
    const data = await response.json();

    if (
      !data.hourly ||
      !data.hourly.temperature_2m ||
      data.hourly.temperature_2m.length === 0
    ) {
      throw new Error('No temperature data available');
    }

    const currentConditions =
      data.hourly.temperature_2m[0] > 20 ? 'Sunny' : 'Cloudy';
    const temperatureLow = Math.min(...data.hourly.temperature_2m);
    const temperatureHigh = Math.max(...data.hourly.temperature_2m);
    const windSpeed = data.hourly.windspeed_10m
      ? data.hourly.windspeed_10m[0]
      : 0;

    const forecast =
      data.daily.temperature_2m_max && data.daily.temperature_2m_min
        ? `Max: ${data.daily.temperature_2m_max[0]}°C, Min: ${data.daily.temperature_2m_min[0]}°C`
        : 'No forecast available';

    return {
      currentConditions,
      temperatureLow,
      temperatureHigh,
      windSpeed,
      timezone: data.timezone,
      forecast,
    };
  } catch (error) {
    console.error('Unable to retrieve weather data. Please try again.');
    return null;
  }
};
