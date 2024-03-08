"use client";
import { useEffect } from "react";
import AppMain from "../../components/AppMain";
import { getGeolocation, getWeatherData } from "../../helpers/utils";
import { setLoading, setWeather } from "../../redux/weather.slice";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true));

    getGeolocation().then((res: any) => {
      getWeatherData(res.latitude, res.longitude).then((data: any) => {
        dispatch(setWeather(data));
      });
    });
  }, []);

  return <AppMain />;
}
