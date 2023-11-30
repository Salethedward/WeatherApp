import SearchBar from "./SeachBar";
import WeatherCard from "./WeatherCard";

const WeatherContainer = () => (
  <div className="flex flex-col items-center">
    <h1 className="my-5 text-white text-5xl">Weather</h1>
    <SearchBar />
    <WeatherCard />
  </div>
);

export default WeatherContainer;
