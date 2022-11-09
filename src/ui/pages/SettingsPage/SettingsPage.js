import React from 'react'
import s from './SettingsPage.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { CustomRange } from '../../components/CustomRange/CustomRange'
import { NumberButton } from '../../components/NumberButton/NumberButton'
import { setTaskButtons } from '../../../bll/reducer'

export const SettingsPage = () => {
  const taskButtons = useSelector((state) => state.app.taskButtons)
  const dispatch = useDispatch()

  const highestId = window.setTimeout(() => {
    for (let i = highestId; i >= 0; i--) {
      window.clearTimeout(i);
    }  
  }, 0);
  const highestIdTimer = window.setInterval(() => {
    for (let i = highestIdTimer; i >= 0; i--) {
      window.clearInterval(i);
    }  
  }, 0);
  
  const onClickNumberButton = (number) => {
    const updateState = {...taskButtons}
    updateState[number] = !updateState[number]
        dispatch(setTaskButtons(updateState))
    }
  return (
    <div className={s.wrapper}>
        <h2>Настройки</h2>
        <div className={s.itemWrapper}>
            <div className={s.itemTitle}>Выберите время выполнения теста</div>
            <div>
                <CustomRange/>    
                <div className={s.rangeLabel}>
                    <span>0</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                </div>
            </div>           
        </div>
        <div className={s.itemWrapper}>
            <div className={s.itemTitle}>Выберите числа для теста</div>
            <div className={s.numbersWrapper}>
                <div>
                  <NumberButton title={'1'} onClick={()=> {onClickNumberButton('1')}}/>
                  <NumberButton title={'2'} onClick={()=> {onClickNumberButton('2')}}/>
                  <NumberButton title={'3'} onClick={()=> {onClickNumberButton('3')}}/>
                </div>
                <div>
                  <NumberButton title={'4'} onClick={()=> {onClickNumberButton('4')}}/>
                  <NumberButton title={'5'} onClick={()=> {onClickNumberButton('5')}}/>
                  <NumberButton title={'6'} onClick={()=> {onClickNumberButton('6')}}/>
                </div>
                <div>
                  <NumberButton title={'7'} onClick={()=> {onClickNumberButton('7')}}/>
                  <NumberButton title={'8'} onClick={()=> {onClickNumberButton('8')}}/>
                  <NumberButton title={'9'} onClick={()=> {onClickNumberButton('9')}}/>
                </div>
            </div>
        </div>
    </div>
  );
};

