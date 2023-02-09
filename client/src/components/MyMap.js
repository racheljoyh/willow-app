import { useEffect, useState, useRef } from "react";
import MapData from "./MapData";

const mapOptions = {
  mapId: process.env.REACT_APP_WILLOW_MAP_ID,
  center: { lat: 39.7392, lng: -104.9903 },
  zoom: 10,
  disableDefaultUI: true,
};

function MyMap({ rentals, setRentals }) {
  const [map, setMap] = useState();
  const ref = useRef();

  useEffect(() => {
    setMap(new window.google.maps.Map(ref.current, mapOptions));
  }, []);

  return (
    <>
      <div ref={ref} className="map" />
      {map && <MapData rentals={rentals} setRentals={setRentals} map={map} />}
    </>
  );
}

export default MyMap;
