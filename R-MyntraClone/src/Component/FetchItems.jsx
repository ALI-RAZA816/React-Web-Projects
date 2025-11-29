import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemActions } from '../Store/ItemSlice';
import { fetchSliceActions } from '../Store/fetchStatusSlice';

export default function FetchItems() {
    const fetchStatus = useSelector(store => store.fetchstatus);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (fetchStatus.fetchDone) return;

        const controller = new AbortController();
        const signal = controller.signal;
        dispatch(fetchSliceActions.markfetchingStart());
        fetch('http://localhost:8080/items', { signal })
        .then((res) => res.json())
        .then(({ items }) => {
            dispatch(fetchSliceActions.markfetchDone());
            dispatch(itemActions.addInitialItems(items[0]));
            dispatch(fetchSliceActions.markfetchingEnd());
            });

        return () => {
            controller.abort();
        }
        
    }, [fetchStatus]);
    return (
        <></>
    )
}
