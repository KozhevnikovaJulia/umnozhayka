import React, { useState } from 'react'
import s from './Header.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { numbers9 } from '../../../assets/data/data'
import { setFirstMultiplier, setSecondMultiplier, setLinkIsActive } from '../../../bll/reducer'
import bookPink from '../../../assets/images/bookPink.png'

export const Header = () => {
  const [navVisible, setNavVisible] = useState(false)
  const linkIsActive = useSelector((state) => state.app.linkIsActive)
  const taskButtons = useSelector((state) => state.app.taskButtons)
  const dispatch = useDispatch()

  const onClickTestPage = () => {
    dispatch(setLinkIsActive('3'))
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
  }

  const onClickSeeMore = () => {
    setNavVisible(!navVisible)
  }
  return (
    <div className={s.wrapper}>
      <div className={s.headerContent}>
         <div className={s.headerText}>Таблицу умножения выучить легко!</div>
         <div className={s.nav}>
             <img src={bookPink} alt='bookPink' style={{ width: '90px', height: '90px', margin:'20px' }} />
             <div className={s.linksBlock}>   

                   <a href='#' onClick={onClickSeeMore} className={s.toggleHolder}>
                        <div id={s.toggle}>
                          <div className={s.menuLine}></div>
                        </div>
                   </a>          
                  <div className={s.linksWrapper}> 
                      <Link className={linkIsActive === '1' ? s.pinkText : s.greyText} to="/" onClick={()=>{dispatch(setLinkIsActive('1'))}}>Главная</Link>
                      <div className={s.linkHover}></div>
                      {linkIsActive === '1' && <div className={s.linkActive}></div>}
                  </div>
                  <div className={s.linksWrapper}>
                       <Link className={linkIsActive === '2' ? s.pinkText : s.greyText} to="/settings" onClick={()=>{dispatch(setLinkIsActive('2'))}}>Настройки</Link>
                       <div className={s.linkHover}></div>
                       {linkIsActive === '2' && <div className={s.linkActive}></div>}
                  </div>
                  <div className={s.linksWrapper}>
                       <Link className={linkIsActive === '3' ? s.pinkText : s.greyText} to="/test" onClick={onClickTestPage}>Тестирование</Link>
                       <div className={s.linkHover}></div>
                       {linkIsActive === '3' && <div className={s.linkActive}></div>}
                  </div>
             </div>
         </div>
         {navVisible &&
             <div className={s.verticalLinksBlock}>     
                 <div className={s.smallLinksWrapper}> 
                     <Link className={linkIsActive === '1' ? s.pinkText : s.greyText} to="/" onClick={()=>{dispatch(setLinkIsActive('1'))}}>Главная</Link>
                 </div>
                 <div className={s.smallLinksWrapper}>
                      <Link className={linkIsActive === '2' ? s.pinkText : s.greyText} to="/settings" onClick={()=>{dispatch(setLinkIsActive('2'))}}>Настройки</Link>
                 </div>
                 <div className={s.smallLinksWrapper}>
                      <Link className={linkIsActive === '3' ? s.pinkText : s.greyText} to="/test" onClick={onClickTestPage}>Тестирование</Link>
                </div>
              </div>
          }
      </div>
    </div>
  );
};

