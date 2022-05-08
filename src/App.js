import { useEffect, useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import Card from "./components/Card";

function App() {
  const [countries, setCountries] = useState([]);

  const [inputsearch, setInputSearch] = useState("");

  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    // console.log("handleSubmit", response.data);
    setCountries(response.data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("handleSubmit");
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${inputsearch}`
      );
      console.log("handleSubmit", response);
      setCountry(response.data[0]);
    } catch (error) {
      // if (response.status === 404) {
      //   console.log("if OK");
      toast.error("country isn't exist");
      // }
    }
  };

  // console.log(countries);
  // console.log("inputsearch", inputsearch);

  return (
    <div className="App">
      {/* <button onClick={handleSubmit}>Show Data</button> */}

      <div className="container">
        <h1 className="my-4">Countries</h1>

        <form className="my-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="search" className="form-label">
              Enter a country name
            </label>
            <input
              type="text"
              className="form-control"
              id="search"
              value={inputsearch}
              placeholder="Belgium, France..."
              onChange={(event) => {
                setInputSearch(event.target.value);
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        <div className="row ">
          {country ? (
            <>
              <Card country={country} />
              <button
                onClick={() => {
                  setCountry(null);
                }}
                className="btn btn-primary mt-5"
              >
                Reset
              </button>
            </>
          ) : (
            countries.map((country, index) => (
              <Card key={index} country={country} />
            ))
          )}
        </div>
      </div>

      {/* {countries.map((countrie, index) => {
        // console.log(countrie);
        return <p key={index}>{countrie.name.common}</p>;
      })} */}
      <ToastContainer />
    </div>
  );
}

export default App;
