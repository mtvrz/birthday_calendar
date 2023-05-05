import classes from "./MainPage.module.css";
import {useEffect, useState} from "react";
import {birthdayss} from "../components/bh"
import Month from "./Month/Month";

const MainPage = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const [isTheDay, setIsTheDay] = useState(false)
    const [day, setday] = useState("-")
    const [dayNUM, setdayNUM] = useState("-")
    const [month, setmonth] = useState("-")
    const [osravenec, setOsravenec] = useState("")
    const [isCalVisible, setIsCalVisible] = useState(false)
    const [sorted, setSorted] = useState([])
    let y = 0

    const group_method = () => {

    }
    const sort_method = (x) => {
        // date: "01-04"
        // interests: "-"
        // name: ""
        setSorted([...sorted])
    }
    useEffect(() => {

        const pad = (x) => {
            return (x < 10) ? '0' + x.toString() : x.toString();
        }
        let temCond = false
        let temName = ""
        const date = new Date();
        const formatedDate = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
        console.log(formatedDate, days[date.getDay()], months[date.getMonth()], date.getDate())
        setday(days[date.getDay()])
        setdayNUM(date.getDate())
        setmonth(months[date.getMonth()])
        console.log(birthdayss)
        birthdayss.map(y => {
            y.map(x => {
                setSorted([...sorted,])
                sort_method(x)
                if (formatedDate.includes(x.date)) {
                    if (temCond === true) {
                        temName = `${temName} a ${x.name}`
                        setOsravenec(temName)
                    }
                    if (temCond === false) {
                        temName = x.name
                        temCond = true
                        setOsravenec(temName)
                    }
                    setIsTheDay(true)
                }
            })
        })
    }, [])

    const click_calendar_handler = () => {
        isCalVisible ? setIsCalVisible(false) : setIsCalVisible(true)
    }

    return <div className={classes.main}>
        <div className={classes.calendar} onClick={click_calendar_handler}>
            <div className={classes.pages}>
                <div className={classes.page}>
                    <p className={classes.month}>{month}</p>
                    <p className={classes.day}>{`${dayNUM}.`}</p>
                    <p className={classes.dayName}>{day}</p></div>
            </div>
        </div>
        {isTheDay === true && isCalVisible === false ? <div className={classes.str}>
            <h4>Dnes slaví</h4>
            <p>{osravenec}</p>
        </div> : ""}
        <div className={`${isCalVisible ? classes.bigCal : classes.bigCalH}`}>
            {months.map(x => {
                if (isCalVisible) {
                    y++
                    return <Month month={x} index={y}/>
                }
            })}
        </div>
    </div>
}
export default MainPage