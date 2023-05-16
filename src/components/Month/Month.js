import classes from "./Month.module.css";
import Birthday from "./Birthday";
import {birthdayss} from "../bh"
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
//console.warn(props.index, props.month)

    return <div className={classes.maincont}>
        <div className={`${classes.header} ${isMonthActive && classes.active}`}>{props.month}</div>
        <div className={classes.body}>
            {birthdayss[props.index-1].map((x) =>{
                return <Birthday key={x.name} person={x}/>
            })}
            {birthdayss[props.index-1].length === 0 && <div className={classes.empty}>:o</div>}

        </div>
    </div>
}
export default Month
