import React from 'react'
import s from './NumberButton.module.css'
import { useSelector } from 'react-redux'

export const NumberButton = (props) => {
  const { title, onClick } = props
  const taskButtons = useSelector((state) => state.app.taskButtons)
  const currentTaskButtonIsSelected = taskButtons[title]
  return (
    <button className={currentTaskButtonIsSelected ? s.btnSelected : s.btn} onClick={onClick}>
      {title}
    </button>
  );
};

