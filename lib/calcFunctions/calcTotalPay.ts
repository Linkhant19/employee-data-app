// lib/calcFunctions/calcTotalPay.ts

import getCollection, { DATA_COLLECTION } from "@/db";

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

export default function calcTotalPay(salary: number, bonusmultiplier: number, bonuspointsvalue: number, totalbonuspoints: number, absences: number, date: string, basepay: number): number {
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

    const daily = salary / numDays;

    const days_worked = (numDays - absences);

    const bonus_points = (salary / 100) * bonusmultiplier;

    const one_point_value = bonuspointsvalue / totalbonuspoints;

    const bonus_pay = ((bonus_points * one_point_value) / numDays) * (days_worked + 3);

    const num = basepay + bonus_pay;
    const s = num.toFixed(0);

    return Number(s);
}