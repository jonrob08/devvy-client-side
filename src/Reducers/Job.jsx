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
    case "CREATE_JOB":
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      }
    default:
      return state;
  }
};

export default JobReducer;
