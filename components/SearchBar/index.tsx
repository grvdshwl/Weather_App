import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  SearchBarContainer,
  SearchBarCurrentLocationContainer,
  SearchBarCurrentLocationIcon,
  SearchBarMainInput,
  SearchBarSearchIcon,
} from "./SearchBar.styles";
import { getGeolocation, getWeatherData } from "../../helpers/utils";
import { setWeather } from "../../redux/weather.slice";
import { useDispatch } from "react-redux";
import { getLatLong } from "../../helpers";
import { Spinner } from "../AppMain/AppMain.styles";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const dispatch = useDispatch();
  const handleSearchInputChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const showErrorToast = (message: string) => {
    toast.error(message, {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const showToast = (message: string) => {
    toast.success(message, {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleSearchSubmit = async () => {
    if (searchQuery) {
      setSearchLoading(true);
      const data = await getLatLong(searchQuery).catch(() => {
        setSearchLoading(false);
        showErrorToast("Unable to fetch data." + searchQuery);
      });
      if (data) {
        getWeatherData(data.latitude, data.longitude)
          .then((data: any) => {
            data.location = searchQuery;
            dispatch(setWeather(data));
            setSearchLoading(false);
            showToast("Location fetched successfully.");
          })
          .catch(() => {
            setSearchLoading(false);
            showErrorToast("Unable to fetch data." + searchQuery);
          });
      } else {
        setSearchLoading(false);
        showErrorToast(`Unable to get location : ${searchQuery}.`);
      }
      setSearchQuery("");
    }
  };

  const handleCurrentLocation = () => {
    setSearchQuery("");
    setSearchLoading(true);
    getGeolocation().then((res: any) => {
      getWeatherData(res.latitude, res.longitude)
        .then((data: any) => {
          setSearchLoading(false);
          dispatch(setWeather(data));
          showToast("Location fetched successfully.");
        })
        .catch(() => {
          setSearchLoading(false);
          showErrorToast("Unable to fetch data.");
        });
    });
  };

  return (
    <SearchBarContainer>
      <SearchBarCurrentLocationContainer onClick={handleCurrentLocation}>
        <SearchBarCurrentLocationIcon />
      </SearchBarCurrentLocationContainer>
      <SearchBarMainInput
        placeholder="Search for places..."
        value={searchQuery}
        onChange={handleSearchInputChange}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSearchSubmit();
          }
        }}
      />

      {searchLoading ? (
        <Spinner />
      ) : (
        <SearchBarSearchIcon onClick={handleSearchSubmit} />
      )}
    </SearchBarContainer>
  );
};

export default SearchBar;
