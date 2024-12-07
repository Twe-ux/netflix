import Header from "./assets/components/Header";
import Section from "./assets/components/Section";

import "./assets/css/App.css";
import data from "./assets/data/data.json";

// console.log(data);

function App() {
  return (
    <>
      <Header />
      {data.map((element, index) => {
        return (
          <Section key={index} data={element.category} img={element.images} />
        );
      })}
    </>
  );
}

export default App;
