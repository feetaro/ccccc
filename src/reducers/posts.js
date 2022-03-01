const initialState = {
  posts: [
    { id: 1, title: "Reduxについて" },
    {
      id: 2,
      title: "ReduxのHooksについて"
    }
  ]
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INSERT":
      return {
        ...state
      };
    default:
      return state;
  }
};

export default postsReducer;
