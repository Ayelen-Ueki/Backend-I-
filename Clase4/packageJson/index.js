import moment from "moment";

const calculateDays = (newBirthDay) => {
    const now = moment()
    const birthDay=moment(newBirthDay, "DD-MM-YYYY");
    if(!birthDay.isValid()) return "Error, fecha de cumpleaños invalida."

    const days = now.diff(birthDay, "days");
    return `Desde que naciste hasta hoy pasaron ${days} dias.`;
}

console.log(calculateDays("03-07-1996"));