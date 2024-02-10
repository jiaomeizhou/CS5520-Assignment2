import React, { createContext, useContext, useReducer } from 'react';

const ActivityContext = createContext();

const initialState = {
  activities: [],
};

const activityReducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_ACTIVITY':
      return {
        ...state,
        activities: [...state.activities, action.payload],
      };
    default:
      return state;
  }
};

const ActivityProvider = ({ children }) => {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  return (
    <ActivityContext.Provider value={{ state, dispatch }}>
      {children}
    </ActivityContext.Provider>
  );
};

const useActivity = () => {
  const context = useContext(ActivityContext);
  if (!context) {
    throw new Error('useActivity must be used within an ActivityProvider');
  }
  return context;
};

export { ActivityProvider, useActivity };
