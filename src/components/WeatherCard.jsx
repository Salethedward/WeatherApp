import { useSelector, shallowEqual } from "react-redux";

const WeatherCard = () => {
  const { weather } = useSelector(
    ({ weatherReducer }) => weatherReducer,
    shallowEqual
  );

  return (
    <div className="p-6 border rounded-xl bg-gray-700 text-white w-[250px] h-[250px] flex flex-col justify-center items-center md:w-[300px]">
      {weather ? (
        <>
          <div className="text-3xl sm:text-4xl mb-3">{weather.name}</div>
          <div className="text-4xl sm:text-5xl font-bold mb-3">
            {Math.floor(weather.main.temp)}&deg;C
          </div>
          <p className="text-lg sm:text-xl">{weather.weather[0].main}</p>
        </>
      ) : (
        <div className="text-3xl sm:text-4xl">No Data</div>
      )}
    </div>
  );
};

export default WeatherCard;
