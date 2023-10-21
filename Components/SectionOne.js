import React from 'react'
import classes from "../CSS/homePage.module.css"
import MainNavigation from '../Components/MainNavigation'
import Button from '../Components/Button'



export default function SectionOne() {
  return  <div className={classes.homeContainer}>
  <MainNavigation/>
  <div className={classes.homeContainerText}>

    <h1 className={classes.homeContainerH1}>
      PREMIUM NANNY AND TUITION SERVICES
    </h1>

    <p className={classes.homeContainerPara}>
      Tailored Education and Personalized Care For Your Loved Ones
    </p>

    <Button buttontext="Enquire Now" style={classes.Button}/>
  </div>
</div>
}
