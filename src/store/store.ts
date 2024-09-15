import { configureStore } from '@reduxjs/toolkit';
import activePageReducer from './slices/ActivePageSlice';
import ProjectsSlice from './slices/ProjectsSlice';
const store = configureStore({
    reducer: {
        activePage: activePageReducer,
        projects: ProjectsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;