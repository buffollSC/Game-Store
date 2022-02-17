import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { 
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, 
} from 'redux-persist' 
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web8/
import cartReducer from './cart/reducer';
import gamesReducer from './games/reducer';
import userReducer from './users/reducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    game: gamesReducer,
    user: userReducer,
});
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
export const persistor = persistStore(store)
export default store;