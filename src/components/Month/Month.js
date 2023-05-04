import classes from "./Month.module.css";
import Birthday from "./Birthday";
import {useEffect, useState} from "react";

const Month = (props) =>{
   //const [month, setMonth] = useState(props.month)
    const [isMonthActive, setIsMonthActive] = useState(false)
useEffect(()=>{
    const date = new Date()
    if (date.getMonth()+1 == props.index){
        setIsMonthActive(true)
    }
    },[])
//console.warn(props.index)

    return <div className={classes.maincont}>
        <div className={`${classes.header} ${isMonthActive && classes.active}`}>{props.month}</div>
        <div className={classes.body}>
            <Birthday />
            <Birthday />

        </div>
    </div>
}
export default Month
