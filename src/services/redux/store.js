import { configureStore } from '@reduxjs/toolkit';
import savedReducer from './savedSlice';

import {
  persistStore,
  persistReducer
} from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { combineReducers } from 'redux';

// Persist config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['saved'], // only persist saved slice
};

// Combine reducers
const rootReducer = combineReducers({
  saved: savedReducer,
});

// Wrap with persistReducer
const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // important for redux-persist
    }),
});

export const persistor = persistStore(store);


// Redux State
//     ↓
// redux-persist
//     ↓
// AsyncStorage
//     ↓
// App restart
//     ↓
// State rehydrated


// Provider
//   → PersistGate
//     → NavigationContainer
//       → Context
//         → Screens


// const dispatch = useDispatch();

// dispatch(addQuestion(item));
// dispatch(removeQuestion(item.id));
// const savedQuestions = useSelector(
//   state => state.saved.savedQuestions
// );
// dispatch(clearAllQuestions())