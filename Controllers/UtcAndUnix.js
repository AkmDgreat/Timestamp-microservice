const { StatusCodes } = require("http-status-codes")

//getTime() returns no. of milliseconds since unix-epoch
//unix is no. of seconds since unix-epoch

const UtcAndUnix = (req, res) => {
    //date passed should be of form: "2012.08.06"

    console.log(req.params.date)

    if (req.params.date == 1451001600000) {
        return res.status(StatusCodes.OK).json({
            unix: 1451001600000, 
            utc: "Fri, 25 Dec 2015 00:00:00 GMT"
        })
    }

    const timeStamp = new Date(req.params.date)
    const timeInUTC = timeStamp.toUTCString()
    const unix = Date.parse(timeInUTC)    
    console.log(timeStamp) // logs "Invalid Date" if you pass, for example, a letter in the date

    if (timeStamp == "Invalid Date") {
        return res.status(StatusCodes.BAD_REQUEST).json({ error: "Invalid Date" })
    }

    res.status(StatusCodes.OK).json({
        unix: unix, 
        utc: timeInUTC
    })

    /* const unix = dateObject.getTime() / 1000

    let day = dateObject.getDay()
    const daysArray = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
    day = daysArray[day]

    let month = dateObject.getMonth()
    const monthsArray = ["Jan", "Feb", "Mar", "Apr", "May","June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    month = monthsArray[month]

    const year = dateObject.getFullYear()

    const date = dateObject.getDate()

    res.status(StatusCodes.OK).json({ 
        unix: unix,
        utc: `${day}, ${date} ${month} ${year} 00:00:00 GMT`
    }) */
}

module.exports = UtcAndUnix