import { formatDistanceToNow, parseISO } from "date-fns"

export const getTimeDifference = (mongoDBDate:string) =>{
    const date = parseISO(mongoDBDate)
    const timeDiff = formatDistanceToNow(date, {addSuffix:true})
    return timeDiff
}