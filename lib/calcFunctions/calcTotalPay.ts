// lib/calcFunctions/calcTotalPay.ts

const numDays = 31;
export default function calcTotalPay(salary: number, othours: number, weddinghours: number, weddingpay: number, bonusmultiplier: number, bonuspointsvalue: number, absences: number, basepay: number): number {
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