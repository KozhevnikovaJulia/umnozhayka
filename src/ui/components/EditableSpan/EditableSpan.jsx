import React, { useState } from 'react';
import s from './EditableSpan.module.css';

export const EditableSpan = React.memo(props => {
  const { value, onChange, name, isDisabled } = props;
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(value);
  const activateEditMode = () => {
    setEditMode(true);
    setTitle(value);
  };
  const disactivateEditMode = () => {
    setEditMode(false);
    onChange(title, name);
  };
  const onChangeHandler = (e, prev) => {
    setTitle(+e.currentTarget.value);
  };

  return editMode ? (
    <div>
      <input name={name} autoFocus onFocus={e => e.currentTarget.select()} type='number' min='0' step='1' onChange={onChangeHandler} onBlur={disactivateEditMode} value={title} className={isDisabled ? `${s.input} ${s.disabled}` : s.input} />      
    </div>
  ) : (
    <div>      
      <span style={{ cursor: 'pointer' }} onClick={activateEditMode} className={isDisabled ? `${s.span} ${s.disabled}` :s.span}>
        {value}
      </span>    
    </div>
  );
});
