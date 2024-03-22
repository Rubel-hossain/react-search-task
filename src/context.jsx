import { createContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
const initialState = {
  loading: false,
  query: "",
  page: 0,
  nbPages: 50,
  hits: [],
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  let API = `http://hn.algolia.com/api/v1/search?query=${state.query}&page=${state.page}`;

  const fetchAPIdata = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const data = await fetch(url).then((res) => res.json());
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          page: data.page,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getPrevPage = () => {
    dispatch({ type: "GET_PREV_PAGE" });
  };
  const getNextPage = () => {
    dispatch({ type: "GET_NEXT_PAGE" });
  };
  const removePost = (postId) => {
    dispatch({ type: "REMOVE_POST", payload: postId });
  };
  const searchInputChange = (searchInput) => {
    dispatch({ type: "SEARCH_QUERY", payload: searchInput });
  };
  useEffect(() => {
    fetchAPIdata(API);
  }, [API]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        removePost,
        searchInputChange,
        getPrevPage,
        getNextPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
