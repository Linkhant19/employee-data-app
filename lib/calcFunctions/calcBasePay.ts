// lib/calcFunctions/calcBasePay.ts

// we create a dictionary of months with how many days they have
const months : Record<string, number> = {
    "Jan": 31,
    "Feb": 28,
    "Mar": 31,
    "Apr": 30,
    "May": 31,
    "Jun": 30,
    "Jul": 31,
    "Aug": 31,
    "Sep": 30,
    "Oct": 31,
    "Nov": 30,
    "Dec": 31,
};

export default function calcBasePay(salary: number, absences: number, month: string, year: number): number {
    const numDays = months[month];
        
    const dailyRate = salary / numDays;
    const num = salary - ((absences - 3) * dailyRate);
    const s = num.toFixed(2);

    return Number(s);
}