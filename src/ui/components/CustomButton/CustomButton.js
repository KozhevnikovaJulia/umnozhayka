import React from 'react'
import s from './CustomButton.module.css'

export const CustomButton = (props) => {
  const { title, onClick } = props
  return (
    <button className={s.btn} onClick={onClick}>
      {title}
    </button>
  );
};

