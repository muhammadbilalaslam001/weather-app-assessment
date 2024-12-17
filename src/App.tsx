import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';

const App: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [query, setQuery] = useState<string>('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(city.trim());
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <header className="w-full max-w-md text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Weather Dashboard</h1>
        <form onSubmit={handleSearch} className="flex space-x-2 justify-center">
          <input
            type="text"
            className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button 
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>
      </header>

      {query && <WeatherCard city={query} />}
    </div>
  );
};

export default App;
