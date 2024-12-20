import React, { useEffect, useState } from 'react';

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  name: string;
  weather: { description: string }[];
  wind: {
    speed: number;
  };
}

interface WeatherCardProps {
  city: string;
}

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const WeatherCard: React.FC<WeatherCardProps> = ({ city }) => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            city
          )}&units=metric&appid=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error('Unable to retrieve weather data for the specified city.');
        }
        const result = (await response.json()) as WeatherData;
        setData(result);
      } catch (err) {
        console.error(err)
        setError("Error occured while fetching data")
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) {
    return (
      <div className="bg-white rounded shadow p-6 w-full max-w-sm text-center">
        <p className="text-gray-700">Loading weather data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded shadow p-6 w-full max-w-sm text-center">
        <p className="text-red-600 font-medium">Error: {error}</p>
      </div>
    );
  }

  if (!data) return null;

  const { main: { temp, humidity }, weather, wind: { speed } } = data;
  const weatherCondition = weather && weather.length > 0 ? weather[0].description : 'N/A';

  return (
    <div className="bg-white rounded shadow p-6 w-full max-w-sm text-center">
      <h2 className="text-2xl font-semibold mb-2">{data.name}</h2>
      <p className="text-4xl font-bold mb-2">{Math.round(temp)}°C</p>
      <p className="text-lg capitalize mb-4">{weatherCondition}</p>
      <div className="flex justify-between text-sm text-gray-600">
        <p><span className="font-semibold">Humidity:</span> {humidity}%</p>
        <p><span className="font-semibold">Wind:</span> {speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;
