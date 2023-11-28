import { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  setWeatherData,
  setResultsData,
  setErrorMessage,
} from "../store/action";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { results, errorMessage } = useSelector(
    ({ weatherReducer }) => weatherReducer,
    shallowEqual
  );

  const [city, setCity] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  let api_key = "0cd714994780be8f3e6e0c5538314a36";

  const handleChangeCity = (e) => {
    setCity(e.target.value);
    handleToggle(true);
    dispatch(setErrorMessage(""));
  };

  // Fetching the weather data from openweathermap open api
  const fetchWeatherData = (currCity) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${api_key}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod == 404) {
          dispatch(setErrorMessage(data.message));
        } else if (data.cod == 401) {
          dispatch(setErrorMessage("Invalid key"));
        } else {
          dispatch(setWeatherData(data));
          dispatch(setResultsData(data));
          dispatch(setErrorMessage(""));
        }
      })
      .catch((error) => dispatch(setErrorMessage("Invalid Input")));
  };

  // Handling dropdown in search input
  const handleDropdownSelect = (selectedCity) => {
    setCity(selectedCity);
    fetchWeatherData(selectedCity);
    handleToggle(false);
  };

  // Handling input search
  const handleSearch = (e) => {
    e.preventDefault();
    handleToggle(false);
    if (city) {
      fetchWeatherData(city);
    } else {
      dispatch(setErrorMessage("Invaild city"));
    }
  };

  // Handling dropdown toggle
  const handleToggle = (val) => {
    setIsOpen(val);
  };

  return (
    <div className="mb-28">
      <form onSubmit={handleSearch}>
        <div className="flex mx-1">
          <div className="relative">
            <input
              type="text"
              name="city"
              value={city}
              onChange={handleChangeCity}
              onFocus={() => handleToggle(true)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter city"
            />

            {isOpen && results.length > 0 && (
              <div className="absolute mt-2 bg-white border border-gray-300 rounded-md shadow-md w-full max-h-32 overflow-y-auto">
                <ul>
                  {results.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => handleDropdownSelect(item.name)}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <button
            type="submit"
            className="ml-1 px-4 py-2 bg-gray-700 text-white"
          >
            Search
          </button>
        </div>
        {errorMessage && (
          <div className="text-red-600 ml-4">{errorMessage}</div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
