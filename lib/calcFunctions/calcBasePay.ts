// lib/calcFunctions/calcBasePay.ts

// we create a dictionary of months with how many days they have
const months : Record<string, number> = {
    "01": 31,
    "02": 28,
    "03": 31,
    "04": 30,
    "05": 31,
    "06": 30,
    "07": 31,
    "08": 31,
    "09": 30,
    "10": 31,
    "11": 30,
    "12": 31
};

export default function calcBasePay(salary: number, absences: number, date: string): number {
    // if date is null, default month 01 and year 2025
    if (!date) {
        date = "01-2025";
    }

    // our date format is mm-yyyy
    const month = date.split("-")[0];
    const year = date.split("-")[1];
    let numDays = months[month];


    // check if it is a leap year
    if (Number(year) % 4 === 0 && Number(year) % 100 !== 0 || Number(year) % 400 === 0) {
        if (month === "02") {
            numDays = 29;
        }
    }
        
    const dailyRate = salary / numDays;
    const num = salary - ((absences - 3) * dailyRate);
    const s = num.toFixed(0);

    return Number(s);
}