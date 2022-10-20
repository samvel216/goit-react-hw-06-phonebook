import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactReducer from 'redux/contacts/contacts-reducer';
import filterReducer from './filter/filter-reducer';

const rootReducer = combineReducers({
   contacts: contactReducer,
    filter: filterReducer,
})
const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ["contacts"],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);


// export const store = configureStore({
//    reducer: {
//     contacts: contactReducer,
//     filter: filterReducer,
   
//   },
// })

