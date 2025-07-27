// types.ts

export type EmployeeProps = {
    id: string;
    employeeId: string;
    name: string;
    salary: number;
    absences: number;
    otdays: number;
    othours: number;
    weddinghours: number;
    status: string;
    weddingpay: number;
    bonusmultiplier: number;
    bonusvalue: number;

    // payroll month and year (not their employment date)
    date: string;

    basepay: number;
    totalpay: number;
};