import "./App.css";
import { lazy, Suspense, useContext } from "react";
import Loader from "./components/NullLoader";
import { GlobalContext } from "./context/global";
// import rankbank from "./images/rankbank";
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
        <p>logo</p>
        {/* <img src="rankbank"/> */}
      </div>
      <Suspense fallback={<Loader />}>
        <Slide slides={slides.response} overviewList={overviewList.response} />
      </Suspense>
    </div>
  );
}

export default App;
