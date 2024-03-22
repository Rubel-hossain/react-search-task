const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        loading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter((posts) => posts.objectID !== action.payload),
      };
    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    case "GET_PREV_PAGE":
      return {
        ...state,
        page: state.page <= 0 ? 0 : state.page - 1,
      };
    case "GET_NEXT_PAGE":
      var pageNumberIncrement = state.page + 1;
      if(pageNumberIncrement >= state.nbPages){
        pageNumberIncrement = 0;
      }
      return {
        ...state,
        page: pageNumberIncrement,
      };
    default: {
      return state;
    }
  }
};

export default reducer;
