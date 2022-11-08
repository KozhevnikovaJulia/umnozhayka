const SET_CURRENT_NUMBER = 'SET_CURRENT_NUMBER'
const SET_HURD = 'SET_HURD'
const SET_FOR_SPEED = 'SET_FOR_SPEED'
const SET_TASK_BUTTONS = 'SET_TASK_BUTTONS'
const SET_TIMER = 'SET_TIMER'
const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION'
const SET_CURRENT_ANSWER = 'SET_CURRENT_ANSWER '
const SET_ANSWERS = 'SET_ANSWERS'
const SET_FIRST_MULTIPLIER = 'SET_FIRST_MULTIPLIER'
const SET_SECOND_MULTIPLIER = 'SET_SECOND_MULTIPLIER'

const initialState = {
    currentNumber:'1',
    forSpeed:true,
    hurd:true,
    taskButtons: {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
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
    currentQuestion:1,
    currentAnswer:'',
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
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CURRENT_NUMBER:
        return { ...state, currentNumber:action.currentNumber}
      case SET_HURD:
        return { ...state, hurd:action.hurd}
      case SET_FOR_SPEED:
        return { ...state, forSpeed:action.forSpeed}
      case SET_TASK_BUTTONS:
        return { ...state, taskButtons:action.taskButtons}
      case SET_TIMER:
        return { ...state, timer:action.timer}
      case SET_CURRENT_QUESTION:
        return { ...state, currentQuestion:action.currentQuestion}
      case SET_CURRENT_ANSWER:
        return { ...state, currentAnswer:action.currentAnswer}
      case SET_ANSWERS:
        return { ...state, answers:action.answers}
      case SET_FIRST_MULTIPLIER:
        return { ...state, firstMultiplier:action.firstMultiplier}
      case SET_SECOND_MULTIPLIER:
        return { ...state, secondMultiplier:action.secondMultiplier}
      default:
        return state
    }
  }

 export const setCurrentNumber = currentNumber => ({type:SET_CURRENT_NUMBER, currentNumber})
 export const setHurd = hurd => ({type:SET_HURD, hurd})
 export const setForSpeed = forSpeed => ({type:SET_FOR_SPEED, forSpeed})
 export const setTaskButtons = taskButtons => ({type:SET_TASK_BUTTONS, taskButtons})
 export const setTimer = timer => ({type:SET_TIMER, timer})
 export const setCurrentQuestion = currentQuestion => ({type:SET_CURRENT_QUESTION, currentQuestion})
 export const setCurrentAnswer = currentAnswer => ({type:SET_CURRENT_ANSWER, currentAnswer})
 export const setAnswers = answers => ({type:SET_ANSWERS, answers})
 export const setFirstMultiplier = firstMultiplier => ({type:SET_FIRST_MULTIPLIER, firstMultiplier})
 export const setSecondMultiplier = secondMultiplier => ({type:SET_SECOND_MULTIPLIER, secondMultiplier})