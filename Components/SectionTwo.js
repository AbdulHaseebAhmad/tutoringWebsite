import React from "react";
import Button from "./Button";
import classes from "../CSS/homePage.module.css"
import image1 from "../Assets/IMG_6948 (1) 1.png"
import image2 from "../Assets/2023-07-07 14.52 1.png";
import image3 from "../Assets/Frame 238.png";
import image4 from "../Assets/Frame 237.png";

export default function SectionTwo() {
  return (
    <>
        <div className={classes.SectionTwoContainer}>

            <div className={classes.subSectionOneofTwo}>
                <div className={classes.sectionTwoLeft}>

                    <div className={classes.tagOne}>
                        <img src={image3} alt='safe&secure' className={classes.safeIage}/>
                        <p className={classes.tagOneText}>
                            Safe & Secure
                        </p>
                    </div>

                    <img src={image1} alt="sectionTwoImage" className={classes.imageOne}/>
                    <img src={image2} alt="sectionTwoImage" className={classes.imageTwo}/>

                    <div className={classes.tagTow}>
                        <img src={image4} alt='safe&secure' className={classes.safeIage}/>
                        <p className={classes.tagOneText}>
                            Personalized Car
                        </p>
                    </div>
                
                
                
                </div>


                <div className={classes.sectionTwoRight}>

                    <h3 className={classes.sectioTwoRightTitle}>
                        Always Keeping You Smilling And Happy
                    </h3>

                    <p className={classes.sectionTwoPara}>
                        Tutor & Nanny is a exclusive education and
                        nanny care service determined to provide the comfort
                        for every family when it comes to education and care. 
                    </p>

                    <ul className={classes.listContainer}>
                        <li>Tutor-Pupil Matching service</li>
                        <li>Tutor-Pupil Matching service</li>
                        <li>Tutor-Pupil Matching service</li>
                    </ul>

                    <Button buttontext="Enquire Now" style={classes.ButtonTwo}/>
                    
                </div>      
            </div>
                

        </div>


    </>
  )
}
