import { createStore, combineReducers } from 'redux'
import { reducer } from './reducer'

const rootReducer = combineReducers({app: reducer})

const app = sessionStorage.getItem('app')
  ? JSON.parse(sessionStorage.getItem('app'))
  : {
    linkIsActive: '1',
    resultVisible: false,
    speed: 0,
    taskButtons: {
      1: true,
      2: true,
      3: true,
      4: true,
      5: true,
      6: true,
      7: true,
      8: true,
      9: true,
    },
    answers: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      9: '',
      10: '',
      11: '',
      12: '',
      13: '',
      14: '',
      15: ''
    },
    timer:0,
    firstMultiplier: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      9: '',
      10: '',
      11: '',
      12: '',
      13: '',
      14: '',
      15: ''
    },
    secondMultiplier: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      9: '',
      10: '',
      11: '',
      12: '',
      13: '',
      14: '',
      15: ''
    }
    };


const persistedState = { app };

export const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  sessionStorage.setItem('app', JSON.stringify(store.getState().app));
});


