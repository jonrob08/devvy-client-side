import { createContext, useReducer, useEffect } from "react";
import { ProfileInfo } from "../API/User";
import PostInit from "../InitStates/PostInit";
import UserInit from "../InitStates/UserInit";
import JobInit from "../InitStates/JobInit";
import PostReducer from "../Reducers/Post";
import UserReducer from "../Reducers/User";
import JobReducer from "../Reducers/Job";
import { HandleErr } from "../Utils/Utils";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [PostGState, dispatchPost] = useReducer(PostReducer, PostInit);
  const [UserGState, dispatchUser] = useReducer(UserReducer, UserInit);
  const [JobGState, dispatchJob] = useReducer(JobReducer, JobInit);

  //passed value
  const values = {
    PostGState,
    dispatchPost,
    UserGState,
    dispatchUser,
    JobGState,
    dispatchJob
  };
  // get userdata when page refreshed
  useEffect(() => {
    (async () => {
      await ProfileInfo()
        .then((res) => {
          dispatchUser({ type: "USER_INFO", payload: res.data });
        })
        .catch((err) => {
          HandleErr(err);
        });
    })();
  }, []);
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
