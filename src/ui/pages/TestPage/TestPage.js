import React, { useEffect } from 'react'
import s from './TestPage.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { numbers15 } from '../../../assets/data/data'
import { EditableSpan } from '../../components/EditableSpan/EditableSpan'
import { CustomButton } from '../../components/CustomButton/CustomButton'
import { setAnswers, setTimer, setResultVisible } from '../../../bll/reducer'
import clockPink from '../../../assets/images/clockPink.png'

export const TestPage = () => {
  const resultVisible = useSelector((state) => state.app.resultVisible)
  const timer = useSelector((state) => state.app.timer)
  const speed  = useSelector((state) => state.app.speed)
  const answers = useSelector((state) => state.app.answers)
  const firstMultiplier = useSelector((state) => state.app.firstMultiplier)
  const secondMultiplier = useSelector((state) => state.app.secondMultiplier)
  const dispatch = useDispatch()

  const correctAnswerArr = []
  numbers15.map(item=> {
    const currentAnswerCorrect = +firstMultiplier[item] * (+secondMultiplier[item]) === +answers[item] ? true : false
    currentAnswerCorrect && correctAnswerArr.push(item)
    return item})

  const correctAnswerNumber = correctAnswerArr.length

  const onChangeAnswer = (newValue, name) => {
    const updateAnswers = {...answers}
    updateAnswers[name] = newValue
    dispatch(setAnswers(updateAnswers))
  };

  const onClickСheckResults = () => {
    dispatch(setResultVisible(true))
  }
  useEffect(() => {
    if (speed ===1) {
      const time1 = window.setTimeout(() => {
        dispatch(setResultVisible(true))
      }, 60000);
      return () => clearTimeout(time1);
    } else if (speed ===2) {
      const time2 = window.setTimeout(() => {
        dispatch(setResultVisible(true))
      }, 120000);
      return () => clearTimeout(time2);
    } else if (speed ===3) {
      const time3 = window.setTimeout(() => {
        dispatch(setResultVisible(true))
      }, 180000);
      return () => clearTimeout(time3);
    }
  }, [speed]);
  
  useEffect(() => {
    if (speed ===1) {
      dispatch(setTimer(60))
    } else if (speed ===2) {
      dispatch(setTimer(120))
    } else if (speed ===3) {
      dispatch(setTimer(180))
    }
  }, [speed]);

  useEffect(() => {
    if (speed && timer > 1 ) {
      const tic = window.setInterval(() => {
        dispatch(setTimer(timer-1))
      }, 1000);
      return () => clearInterval(tic);
    }   
  }, [timer, speed]);


  return (
    <div className={s.wrapper}>
      <div className={s.timerWrapper}>
         <h2>Тестирование</h2>
         <div className={s.timer}>
             { speed !==0 && <img src={clockPink} alt='clockPink' style={{ width: '70px', height: '70px' }} />}
             { speed !==0 && <span className={s.time}>{timer}</span>}
         </div>
         
      </div>
      
      <div className={s.contentBlock}>
          {numbers15.map(item=>{
            return <div className={s.itemWrapper}>
                       <div className={s.itemTitle}> {item} вопрос из 15</div>
                       <div className={s.itemContent}> {firstMultiplier[item]} X {secondMultiplier[item]} =  <EditableSpan value={answers[item]} name={item} onChange={onChangeAnswer} isDisabled={resultVisible ? true : false}/></div>
                   </div>
          } )}
      </div>
      <CustomButton title={'Посмотреть\n результаты'} onClick={onClickСheckResults}/>
     {resultVisible &&
     <div className={s.resultBlock}>
        <h2>Твой результат { correctAnswerNumber } верных ответов</h2>
        <div>
            { numbers15.map(item => {
            const currentAnswerCorrect = +firstMultiplier[item] * (+secondMultiplier[item]) === +answers[item] ? true : false
            return <div className={s.resultContent}> {firstMultiplier[item]} X {secondMultiplier[item]} =  <span className={currentAnswerCorrect ? s.greenText : s.redText}>{answers[item]}</span></div>         
            } 
            )}
        </div>
     </div>
      }
    </div>
  );
};

