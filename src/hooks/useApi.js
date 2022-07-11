import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function useApi(reducer, action, url) {
  const list = useSelector((state) => state[reducer].list);
  const dispatch = useDispatch();

  const getData = useCallback(async () => {
    const auxList = await axios.get(url);
    dispatch(action(auxList.data));
  }, []);

  useEffect(() => {
    list.length === 0 && getData();
  }, []);

  return list;
}
