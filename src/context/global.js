import { createContext, useEffect, useMemo, useState } from "react";
import { initialState } from "../Reducer/api";
import { useOverviewListApi } from "../service/overview";
import { useSlideApi } from "../service/slides";

const GlobalContext = createContext(null);

const GlobalProvider = ({ children }) => {
  const [slides, setSlides] = useState(initialState);
  const [overviewList, setOverviewList] = useState(initialState);

  useSlideApi().then((res) => {
    setSlides(res);
  });

  useOverviewListApi().then((res) => {
    setOverviewList(res);
  });
  const globalValues = useMemo(
    () => ({
      slides,
      setSlides,
      overviewList,
    }),
    [slides, setSlides, overviewList]
  );

  return (
    <GlobalContext.Provider value={globalValues}>
      {children}
    </GlobalContext.Provider>
  );
};
export { GlobalContext, GlobalProvider };
