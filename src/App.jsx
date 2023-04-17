import { useEffect, useState } from "react";
import "./App.css";
import { getRandomDimension } from "./helpers/random";
import axios from "axios";
import Location from "./components/Location";
import ResidentList from "./components/ResidentList";
import Portal from "./components/Portal";

function App() {
  const [location, setLocation] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.locationId.value;

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`;

    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`;

    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Portal />
      <div className="p-5 flex justify-center mb-3 w-auto">
        <form
          className="flex  items-center gap-10 pb-20 flex-col"
          onSubmit={handleSubmit}
        >
          <div className="border border-[#8EFF8B]
        pl-4">
            <input
              id="locationId"
              placeholder="Type a location Id..."
              className="border-0 border-black outline-none"
              type="text"
            />
            <button className="outline-none border-r-[#8EFF8B] border-[#8EFF8B] bg-[#8EFF8B]/30 text-white p-3">
              Search <i className="bx bx-search"></i>
            </button>
          </div>
        </form>
      </div>

      <h2 className="p-5 flex justify-center text-[#8EFF8B] font-medium mx-auto">Wellcome to the crazy universe!
        </h2>
  
      <Location location={location} />
      <ResidentList location={location} />
    </div>
  );
}

export default App;
