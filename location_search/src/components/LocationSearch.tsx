import type { Place } from "../api/place";
import { Fragment, useState } from "react";
import { search } from "../api/search";

interface locationSearchProp {
  onPlaceClick: (p: Place) => void;
}
const LocationSearch = ({ onPlaceClick }: locationSearchProp) => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handelSubmit = async (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPlaces(await search(searchTerm));
  };

  const content = places.map((place) => {
    return (
      <Fragment key={place.id}>
        <p className="text-sm">{place.name}</p>
        <button
          className="bg-blue-500 text-xs text-white font-bold py-1 px-1 rounded"
          onClick={() => onPlaceClick(place)}
        >
          Go
        </button>
        <div className="border-b w-full col-span-2" />
      </Fragment>
    );
  });

  return (
    <>
      <div>
        <form action="" onSubmit={handelSubmit}>
          <label className="font-bold" htmlFor="term">
            Search
          </label>
          <input
            id="term"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full"
          />
        </form>
        <h1 className="font-bold mt-6">Found Locations</h1>
        <div className="grid grid-cols-[1fr_40px] gap-2 mt-2 items-center">
          {content}
        </div>
      </div>
    </>
  );
};

export default LocationSearch;
