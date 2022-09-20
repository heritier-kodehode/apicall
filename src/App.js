import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [facts, setFacts] = useState();
  const [randomNr, setRandomNr] = useState();

  async function fetchWithAxios() {
    try {
      const response = await axios.get("https://catfact.ninja/facts");
      setFacts(response.data.data);
    } catch (error) {
      console.error(error);
    }

    console.log(facts);
  }

  useEffect(() => {
    fetchWithAxios();
  }, []);

  if (facts) {
    return (
      <div>
        {facts.map((item) => {
          return (
            <div className="fact" key={item.length}>
              {item.fact}
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div className="App">...Loading</div>;
  }
}

export default App;
