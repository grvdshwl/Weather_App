import React from "react";
import {
  HorizontalBar,
  LeftWidgetContainer,
  LeftWidgetPrimaryContainer,
  LeftWidgetSecondaryBox,
  LeftWidgetSecondaryMainContainer,
  LocationWidget,
} from "./LeftWidget.styles";
import useUnsplashPhotos from "../../hooks/useUnsplashPhotos";
import { useSelector } from "react-redux";
import {
  selectLocation,
  selectUnit,
  selectWeatherData,
} from "../../redux/weather.slice";
import Image from "next/image";
import { getCurrentDayAndTime } from "../../helpers";

const LeftWidget = () => {
  const data = useSelector(selectWeatherData);
  const unit = useSelector(selectUnit);
  const location = useSelector(selectLocation);

  let temperature = unit === "cel" ? data.temp.c : data.temp.f;
  let tempUnit = unit === "cel" ? "C" : "F";
  const photos = useUnsplashPhotos(location);
  const currentDate = getCurrentDayAndTime(data.timezone);

  return (
    <LeftWidgetContainer>
      <Image
        src={`http:${data.condition.icon}`}
        style={{ width: "200px", height: "200px" }}
        alt="icon-weather"
        width={200}
        height={200}
      />

      <LeftWidgetPrimaryContainer
        temperature={temperature}
        unit={tempUnit}
        dateTime={currentDate.dateTime}
      />
      <HorizontalBar />
      <LeftWidgetSecondaryMainContainer>
        <LeftWidgetSecondaryBox
          icon={data.condition.icon}
          description={data.condition.text}
        />
      </LeftWidgetSecondaryMainContainer>
      {photos && <LocationWidget src={photos.urls.raw} text={location} />}
    </LeftWidgetContainer>
  );
};

export default LeftWidget;
