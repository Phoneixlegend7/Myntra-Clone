import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/createSlice";
import { fetchActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector(store => store.status);
    const dispatch = useDispatch();
    useEffect(() => {
      // Fetch product data from the backend
      if(fetchStatus.fetchDone) return;
      const controller = new AbortController();
      const signal = controller.signal;

      dispatch(fetchActions.markFetchingStarted());

      fetch('http://localhost:8080/items', {signal}) // Replace with your backend URL
        .then((res) => res.json())
        .then(({items}) =>{
          dispatch(fetchActions.markFetchDone());
          dispatch(itemActions.addInitialItems(items[0]));
          dispatch(fetchActions.markFetchingEnded());
          
        }
        )

        return () => controller.abort();
    }, [fetchStatus]);
    return <>
    </>
}

export default FetchItems;