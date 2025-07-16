// lib/calcFunctions/calcBasePay.ts

const numDays = 31;
export default function calcBasePay(salary: number, absences: number): number {
    const dailyRate = salary / numDays;
    const num = salary - ((absences - 3) * dailyRate);
    const s = num.toFixed(2);

    return Number(s);
}