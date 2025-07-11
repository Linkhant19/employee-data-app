// lib/calcFunctions/calcBasePay.ts

const numDays = 31;
export default function calcBasePay(salary: number, absences: number): number {
    const dailyRate = salary / numDays;

    return salary - ((absences - 3) * dailyRate);
}