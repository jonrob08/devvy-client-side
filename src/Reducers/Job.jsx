const JobReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_JOBS":
      return {
        ...state,
        jobs: action.payload,
      };
    case "GET_ONE_JOB":
      return {
        ...state,
        jobDetail: action.payload,
      };
    default:
      return state;
  }
};

export default JobReducer;
