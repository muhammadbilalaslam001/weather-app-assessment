# Weather Dashboard

This Weather Dashboard is a simple React + TypeScript + Vite application that allows users to search for weather information by city. It fetches data from the OpenWeatherMap API and displays current temperature, weather conditions, humidity, and wind speed. The UI is styled using Tailwind CSS, ensuring a responsive and clean design.

## Features

- **City Search:** Users can enter a city name to fetch its current weather.
- **Weather Details:** Displays temperature (in °C), weather description, humidity, and wind speed.
- **Responsive UI:** The layout adapts to various screen sizes, from mobile to desktop.

## Getting Started

### Prerequisites

- **Node.js:** Make sure you have Node.js (>= 14.x) installed.
- **Package Manager:** npm or yarn.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/muhammadbilalaslam001/weather-app-assessment
   cd weather-app-assessment
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Set Up Environment Variables:**
   We have provided a sample `.env.example` file. Copy it to `.env` and paste your OpenWeatherMap API key inside.

   ```bash
   cp .env.example .env
   ```

   Open the `.env` file and replace `YOUR_API_KEY_HERE` with your actual API key from [OpenWeatherMap](https://openweathermap.org/).

   **Example:**
   ```env
   VITE_WEATHER_API_KEY=45e80dfc2685b021d9f1a8b64130abfe
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   
   This will start the Vite development server. Open your browser and navigate to [http://localhost:5173/](http://localhost:5173/) (the port may vary) to see the application running.

### Building for Production

To create a production build, run:
```bash
npm run build
```

This will output a production-ready build in the `dist` folder. You can then deploy this folder to your preferred hosting service.

### Linting and Formatting

- **Linting:**  
  ```bash
  npm run lint
  ```
  
- **Type Check:**  
  ```bash
  npm run type-check
  ```

### Additional Notes

- **Customization:**  
  Feel free to customize the UI, add new features (like a 5-day forecast), or improve error handling.

- **API Key Security:**  
  Always ensure your API key is kept private. Since this is a client-side application, consider implementing server-side proxies or rate-limit checks for production scenarios.