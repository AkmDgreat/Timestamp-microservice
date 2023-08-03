const { StatusCodes } = require("http-status-codes")

/* const currentTime = (req, res) => {
    const dateObject = new Date()
    if (dateObject == "Invalid Date") {
        return res.status(StatusCodes.BAD_REQUEST).json({ error: "Invalid Date" })
    }
    
    const unix = dateObject.getTime() / 1000

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
    })
}
 */

const currentTime = (req, res) => {
    const currentTime = new Date()
    const currentTimeInUTC = currentTime.toUTCString()
    const currentUnix = Date.parse(currentTime)

    res.status(StatusCodes.OK).json({
        unix: currentUnix, 
        utc: currentTimeInUTC
    })
}

module.exports = currentTime