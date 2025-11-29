import { configureStore} from "@reduxjs/toolkit";
import itemSlice from "./ItemSlice";
import fetchSlice from "./fetchStatusSlice";
import bagSlice from "./BagSlice";



const MyntraStore = configureStore({
   reducer:{
     items:itemSlice.reducer,
     fetchstatus: fetchSlice.reducer,
     bagItems: bagSlice.reducer,
   }
});

export default MyntraStore;