import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../Store/actions";

// @useSwr('series/getEpisodes', 'episodes')
//
// @fetchAction    string    name of async fn in a slice
// @property       string    property to get from a module
const useSWR = (fetchAction, property) => {
  const dispatch = useDispatch();

  const [module, action] = fetchAction.split("/");

  const data = useSelector((state) => state[module][property]["list"]);
  const status = useSelector((state) => state[module][property]["status"]);

  useEffect(() => {
    dispatch(allActions[action]());
  }, []);

  return [data, status];
};

export default useSWR;
