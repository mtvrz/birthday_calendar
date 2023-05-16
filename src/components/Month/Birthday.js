import classes from "./Birthday.module.css"
import {useEffect, useState} from "react";

const Birthday = (props) =>{
    const [oj, setOj] = useState(false)

    useEffect(()=>{
        const pad = (x) => {
            return (x < 10) ? '0' + x.toString() : x.toString();
        }
        const date = new Date();
        const formatedDate = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
        formatedDate.includes(props.person.date) && setOj(true)
    },[])

    return <div className={`${classes.main} ${oj && classes.active}`}>
<div className={`${classes.name} ${oj && classes.active}`}>{props.person.name}</div>
        <div className={`${classes.date} ${oj && classes.active}`}>{props.person.shortDate}</div>
    </div>
}
export default Birthday