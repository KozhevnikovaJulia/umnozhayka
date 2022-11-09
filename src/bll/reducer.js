const SET_SPEED = 'SET_SPEED'
const SET_TASK_BUTTONS = 'SET_TASK_BUTTONS'
const SET_TIMER = 'SET_TIMER'
const SET_ANSWERS = 'SET_ANSWERS'
const SET_FIRST_MULTIPLIER = 'SET_FIRST_MULTIPLIER'
const SET_SECOND_MULTIPLIER = 'SET_SECOND_MULTIPLIER'
const SET_LINK_IS_ACTIVE = 'SET_LINK_IS_ACTIVE'
const SET_RESULT_VISIBLE = 'SET_RESULT_VISIBLE'

const initialState = {
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
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_SPEED:
        return { ...state, speed:action.speed}
      case SET_TASK_BUTTONS:
        return { ...state, taskButtons:action.taskButtons}
      case SET_TIMER:
        return { ...state, timer:action.timer}
      case SET_ANSWERS:
        return { ...state, answers:action.answers}
      case SET_FIRST_MULTIPLIER:
        return { ...state, firstMultiplier:action.firstMultiplier}
      case SET_SECOND_MULTIPLIER:
        return { ...state, secondMultiplier:action.secondMultiplier}
      case SET_LINK_IS_ACTIVE:
        return { ...state, linkIsActive:action.linkIsActive}
      case SET_RESULT_VISIBLE:
        return { ...state, resultVisible:action.resultVisible}
      default:
        return state
    }
  }

 export const setSpeed = speed => ({type:SET_SPEED, speed})
 export const setTaskButtons = taskButtons => ({type:SET_TASK_BUTTONS, taskButtons})
 export const setTimer = timer => ({type:SET_TIMER, timer})
 export const setAnswers = answers => ({type:SET_ANSWERS, answers})
 export const setFirstMultiplier = firstMultiplier => ({type:SET_FIRST_MULTIPLIER, firstMultiplier})
 export const setSecondMultiplier = secondMultiplier => ({type:SET_SECOND_MULTIPLIER, secondMultiplier})
 export const setLinkIsActive = linkIsActive => ({type:SET_LINK_IS_ACTIVE, linkIsActive})
 export const setResultVisible= resultVisible => ({type:SET_RESULT_VISIBLE, resultVisible})