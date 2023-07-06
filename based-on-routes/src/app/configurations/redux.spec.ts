import { describe, beforeAll, expect, it } from 'vitest'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import sagas from '../sagas/sagas';
import home, { SOME_ACTION_REQUEST } from '../../Home/reducers/reducer';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

describe('Redux Store', () => {
    let store: ToolkitStore;
  
    beforeAll(() => {
      store = configureStore({
        reducer: combineReducers({
            home
        }),
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(sagas.middleware),
      });
  
      sagas.initializer();
    });
  
    it('should dispatch actions and update state', () => {
      // Dispatch actions and assert the state changes
      // For example:
      store.dispatch({ type: SOME_ACTION_REQUEST });
      const state = store.getState();
      expect(state.home.list).toEqual(['new todo']);
    });
  
    // Add more tests as needed
  });
  