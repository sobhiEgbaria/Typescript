import type { Place } from "../api/place";

interface MapProp {
  place: Place | null;
}

const Map = ({ place }: MapProp) => {
  return <div>Map</div>;
};

export default Map;
