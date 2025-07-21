// lib/calcFunctions/calcTotalPay.ts

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

export default function calcTotalPay(salary: number, othours: number, weddinghours: number, weddingpay: number, bonusmultiplier: number, bonuspointsvalue: number, absences: number, month: string, year: number, basepay: number): number {
    const numDays = months[month];
    const daily = salary / numDays;
    const extra_time_pay = (daily / 9) * othours;

    const wedding_pay = weddinghours * weddingpay;

    const days_worked = (numDays - absences);
    const bonus_points = (salary / 100) * bonusmultiplier;
    const bonus_pay = ((bonus_points * bonuspointsvalue) / numDays) * (days_worked + 3);

    const num = basepay + extra_time_pay + wedding_pay + bonus_pay;
    const s = num.toFixed(2);

    return Number(s);
}