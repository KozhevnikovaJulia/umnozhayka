import React from 'react'
import s from './HomePage.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { CustomButton } from '../../components/CustomButton/CustomButton'
import { setFirstMultiplier, setSecondMultiplier, setResultVisible, setAnswers } from '../../../bll/reducer'
import { numbers9 } from '../../../assets/data/data'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const taskButtons = useSelector((state) => state.app.taskButtons)
  const dispatch = useDispatch()
  const navigate = useNavigate()

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

  const onClickStartTest = () => {
    navigate('/test')
    dispatch(setResultVisible(false))

   const selectedNumbersArr = []
   numbers9.map(item=> {
    taskButtons[item] === true && selectedNumbersArr.push(item)
    return item
   })

   const updatedFirstMultiplier = {
    1: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
    2: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
    3: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
    4: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
    5: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
    6: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
    7: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
    8: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
    9: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
    10: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
    11: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
    12: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
    13: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
    14: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)],
    15: selectedNumbersArr[Math.floor(Math.random()*selectedNumbersArr.length)]
   }
   dispatch(setFirstMultiplier(updatedFirstMultiplier))

   const updatedSecondMultiplier = {
    1: numbers9[Math.floor(Math.random()*numbers9.length)],
    2: numbers9[Math.floor(Math.random()*numbers9.length)],
    3: numbers9[Math.floor(Math.random()*numbers9.length)],
    4: numbers9[Math.floor(Math.random()*numbers9.length)],
    5: numbers9[Math.floor(Math.random()*numbers9.length)],
    6: numbers9[Math.floor(Math.random()*numbers9.length)],
    7: numbers9[Math.floor(Math.random()*numbers9.length)],
    8: numbers9[Math.floor(Math.random()*numbers9.length)],
    9: numbers9[Math.floor(Math.random()*numbers9.length)],
    10: numbers9[Math.floor(Math.random()*numbers9.length)],
    11: numbers9[Math.floor(Math.random()*numbers9.length)],
    12: numbers9[Math.floor(Math.random()*numbers9.length)],
    13: numbers9[Math.floor(Math.random()*numbers9.length)],
    14: numbers9[Math.floor(Math.random()*numbers9.length)],
    15: numbers9[Math.floor(Math.random()*numbers9.length)]
   }
   dispatch(setSecondMultiplier(updatedSecondMultiplier))
   dispatch(setAnswers({
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
  })) 
  }
  return (
    <div className={s.wrapper}>     
        <h2>Таблица умножения</h2>
        <div className={s.contentBlock}>
            <div className={s.tableBlock}>
              <span> 1 х 1 = 1</span>        
              <span> 1 х 2 = 2</span>
              <span> 1 х 3 = 3</span>
              <span> 1 х 4 = 4</span>
              <span> 1 х 5 = 5</span>
              <span> 1 х 6 = 6</span>
              <span> 1 х 7 = 7</span>
              <span> 1 х 8 = 8</span>
              <span> 1 х 9 = 9</span>
              <span> 1 х 10 = 10</span>
            </div>
            <div className={s.tableBlock}>
              <span> 2 х 1 = 2</span>        
              <span> 2 х 2 = 4</span>
              <span> 2 х 3 = 6</span>
              <span> 2 х 4 = 8</span>
              <span> 2 х 5 = 10</span>
              <span> 2 х 6 = 12</span>
              <span> 2 х 7 = 14</span>
              <span> 2 х 8 = 16</span>
              <span> 2 х 9 = 18</span>
              <span> 2 х 10 = 20</span>
            </div>
            <div className={s.tableBlock}>
              <span> 3 х 1 = 3</span>        
              <span> 3 х 2 = 6</span>
              <span> 3 х 3 = 9</span>
              <span> 3 х 4 = 12</span>
              <span> 3 х 5 = 15</span>
              <span> 3 х 6 = 18</span>
              <span> 3 х 7 = 21</span>
              <span> 3 х 8 = 24</span>
              <span> 3 х 9 = 27</span>
              <span> 3 х 10 = 30</span>
            </div>
            <div className={s.tableBlock}>
              <span> 4 х 1 = 4</span>        
              <span> 4 х 2 = 8</span>
              <span> 4 х 3 = 12</span>
              <span> 4 х 4 = 16</span>
              <span> 4 х 5 = 20</span>
              <span> 4 х 6 = 24</span>
              <span> 4 х 7 = 28</span>
              <span> 4 х 8 = 32</span>
              <span> 4 х 9 = 36</span>
              <span> 4 х 10 = 40</span>
            </div>
            <div className={s.tableBlock}>
              <span> 5 х 1 = 5</span>        
              <span> 5 х 2 = 10</span>
              <span> 5 х 3 = 15</span>
              <span> 5 х 4 = 20</span>
              <span> 5 х 5 = 25</span>
              <span> 5 х 6 = 30</span>
              <span> 5 х 7 = 35</span>
              <span> 5 х 8 = 40</span>
              <span> 5 х 9 = 45</span>
              <span> 5 х 10 = 50</span>
            </div>
            <div className={s.tableBlock}>
              <span>6 х 1 = 6</span>
              <span>6 х 2 = 12</span>
              <span>6 х 3 = 18</span>
              <span>6 х 4 = 24</span>
              <span>6 х 5 = 30</span>
              <span>6 х 6 = 36</span>
              <span>6 х 7 = 42</span>
              <span>6 х 8 = 48</span>
              <span>6 х 9 = 54</span>
              <span>6 х 10 = 60</span>
            </div>
            <div className={s.tableBlock}>
              <span>7 х 1 = 7</span>
              <span>7 х 2 = 14</span>
              <span>7 х 3 = 21</span>
              <span>7 х 4 = 28</span>
              <span>7 х 5 = 35</span>
              <span>7 х 6 = 42</span>
              <span>7 х 7 = 49</span>
              <span>7 х 8 = 56</span>
              <span>7 х 9 = 63</span>
              <span>7 х 10 = 70</span>
            </div>
            <div className={s.tableBlock}>
              <span>8 х 1 = 8</span>
              <span>8 х 2 = 16</span>
              <span>8 х 3 = 24</span>
              <span>8 х 4 = 32</span>
              <span>8 х 5 = 40</span>
              <span>8 х 6 = 48</span>
              <span>8 х 7 = 56</span>
              <span>8 х 8 = 64</span>
              <span>8 х 9 = 72</span>
              <span>8 х 10 = 80</span>
            </div>
            <div className={s.tableBlock}>
              <span>9 х 1 = 9</span>
              <span>9 х 2 = 18</span>
              <span>9 х 3 = 27</span>
              <span>9 х 4 = 36</span>
              <span>9 х 5 = 45</span>
              <span>9 х 6 = 54</span>
              <span>9 х 7 = 63</span>
              <span>9 х 8 = 72</span>
              <span>9 х 9 = 81</span>
              <span>9 х 10 = 90</span>
            </div>
            <div className={s.tableBlock}>
              <span> 10 х 1 = 10</span>        
              <span> 10 х 2 = 20</span>
              <span> 10 х 3 = 30</span>
              <span> 10 х 4 = 40</span>
              <span> 10 х 5 = 50</span>
              <span> 10 х 6 = 60</span>
              <span> 10 х 7 = 70</span>
              <span> 10 х 8 = 80</span>
              <span> 10 х 9 = 90</span>
              <span> 10 х 10 = 100</span>
            </div>
        </div>
        <CustomButton title={'Начать\n тестирование'} onClick={onClickStartTest}/>
    </div>
  );
};

