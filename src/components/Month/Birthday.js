import classes from "./Birthday.module.css"

const Birthday = (props) =>{
    return <div className={classes.main}>
<div className={classes.name}>{props.person.name}</div>
        <div className={classes.date}>{props.person.date}</div>
    </div>
}
export default Birthday