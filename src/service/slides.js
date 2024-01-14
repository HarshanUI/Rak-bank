import axios from "axios";
import { useReducer, useEffect } from "react";
import { userApiReducer, initialState, ACTIONS } from "../Reducer/api";

const useSlideApi = async () => {
  const [state, dispatch] = useReducer(userApiReducer, initialState);
  useEffect(() => {
    dispatch({ type: ACTIONS.CALL_API });
    const getSlides = async () => {
      let response = await axios.get("/slides");
      if (response.status == 200) {
        dispatch({ type: ACTIONS.SUCCESS, data: response.data });
        return;
      }
      dispatch({ type: ACTIONS.ERROR, error: response.error });
    };
    getSlides();
  }, []);

  return state;
};

export { useSlideApi };
