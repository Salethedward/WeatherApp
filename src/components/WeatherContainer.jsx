import SearchBar from "./SeachBar";
import WeatherCard from "./WeatherCard";

const WeatherContainer = () => (
  <div className="flex flex-col items-center">
    <h1 className="py-4 text-5xl">Weather</h1>
    <SearchBar />
    <WeatherCard />
  </div>
);

export default WeatherContainer;
