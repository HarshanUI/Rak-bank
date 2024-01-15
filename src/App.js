import "./App.css";
import { lazy, Suspense, useContext } from "react";
import Loader from "./components/NullLoader";
import { GlobalContext } from "./context/global";
import rakbank from "./images/rakbank.png";
const Slide = lazy(() => import("./components/Slider"));

function App() {
  const { slides, overviewList } = useContext(GlobalContext);
  if (
    slides.error ||
    slides.loading ||
    overviewList.error ||
    overviewList.loading
  ) {
    return <Loader />;
  }
  return (
    <div className="App">
      <div className="logo">
        <img src={rakbank} alt="logo" width="30" height="30"/>
      </div>
      <Suspense fallback={<Loader />}>
        <Slide slides={slides.response} overviewList={overviewList.response} />
      </Suspense>
    </div>
  );
}

export default App;
