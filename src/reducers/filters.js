const filterDefaultState = {
  topicName: ""
};

export default (state = filterDefaultState, action) => {
  switch (action.type) {
    case "SET_TOPICNAME":
      return {
        ...state,
        topicName: action.topicName
      };
    default:
      return state;
  }
};
