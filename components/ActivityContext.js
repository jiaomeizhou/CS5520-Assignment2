import React, { createContext, useContext, useReducer } from 'react';

// Create a context for the activity
const ActivityContext = createContext();

const initialState = {
  activities: [],
};

// Create a reducer for the activity
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

// Create a provider for the activity
const ActivityProvider = ({ children }) => {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  return (
    <ActivityContext.Provider value={{ state, dispatch }}>
      {children}
    </ActivityContext.Provider>
  );
};

// Create a hook to use the activity
const useActivity = () => {
  const context = useContext(ActivityContext);
  if (!context) {
    throw new Error('useActivity must be used within an ActivityProvider');
  }
  return context;
};

export { ActivityProvider, useActivity };
