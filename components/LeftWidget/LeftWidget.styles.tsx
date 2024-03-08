import styled from "styled-components";
import WeatherIcon from "../WeatherIcon";
import Image from "next/image";

export const LeftWidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const LeftWidgetIcon = styled(WeatherIcon)``;

export const LeftWidgetSecondaryMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const HorizontalBar = styled.div`
  background-color: #f2f2f2;
  height: 2px;
  width: 100%;
`;

interface LeftWidgetPrimaryContainerProps {
  temperature: number;
  unit: string;
  dateTime: string;
}

const LeftWidgetPrimaryContainerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LeftWidgetPrimaryTemperature = styled.div`
  font-size: 42px;
  font-weight: 300;
  margin-bottom: 12px;
`;

const LeftWidgetPrimaryMain = styled.div`
  display: flex;
  gap: 8px;
  font-weight: 400;
`;

const LeftWidgetPrimaryDay = styled.p`
  font-size: 22px;
  color: #000;
`;

const LeftWidgetPrimaryTime = styled.p`
  font-size: 22px;
  color: #c3c3c3;
  font-weight: 400;
`;

export const LeftWidgetPrimaryContainer: React.FC<
  LeftWidgetPrimaryContainerProps
> = ({ temperature, unit, dateTime }) => {
  return (
    <LeftWidgetPrimaryContainerContainer>
      <LeftWidgetPrimaryTemperature>
        {temperature}
        <sup
          style={{ textAlign: "center", fontSize: "28px", fontWeight: "400" }}
        >
          °{unit}
        </sup>
      </LeftWidgetPrimaryTemperature>
      <LeftWidgetPrimaryMain>
        <LeftWidgetPrimaryDay>{dateTime}</LeftWidgetPrimaryDay>
      </LeftWidgetPrimaryMain>
    </LeftWidgetPrimaryContainerContainer>
  );
};

interface LeftWidgetSecondaryBoxProps {
  icon: string;
  description: string;
}

const LeftWidgetSecondaryContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LeftWidgetSecondaryDescription = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const LeftWidgetSecondaryBox: React.FC<LeftWidgetSecondaryBoxProps> = ({
  icon,
  description,
}) => {
  return (
    <LeftWidgetSecondaryContainer>
      <Image
        src={`http:${icon}`}
        style={{ width: "50px", height: "50px" }}
        alt="icon-weather"
        width={50}
        height={50}
      />
      <LeftWidgetSecondaryDescription>
        {description}
      </LeftWidgetSecondaryDescription>
    </LeftWidgetSecondaryContainer>
  );
};

const LeftWidgetLocationContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  border-radius: 20px;
  overflow: hidden;
`;

const LeftWidgetLocationImage = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "Location image",
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  opacity: 0.9;
`;

const TextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  opacity: 1;
`;
interface LocationWidgetProps {
  src: string;
  text: string;
}

export const LocationWidget: React.FC<LocationWidgetProps> = ({
  src,
  text,
}) => {
  return (
    <LeftWidgetLocationContainer>
      <LeftWidgetLocationImage src={src} />
      <TextBox>{text}</TextBox>
    </LeftWidgetLocationContainer>
  );
};
