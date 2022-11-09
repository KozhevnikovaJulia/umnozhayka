import React from 'react'
import s from './CustomRange.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setSpeed } from '../../../bll/reducer'

export const CustomRange = (props) => {
const speed = useSelector((state) => state.app.speed)
const dispatch = useDispatch()

const MAX = 10;
const getBackgroundSize = () => {
	return {
		backgroundSize: `${(speed * 100) / MAX}% 100%`,
	}
}
  return (
    <div className={s.rangeWrapper}>   
       
      <input 	step="1" type="range" 	min="0" max="10" onChange={(e) => dispatch(setSpeed(+e.target.value))} style={getBackgroundSize()} value={speed}/>
      <div className={s.rangeLabels}></div>
    </div>    
  )
}

