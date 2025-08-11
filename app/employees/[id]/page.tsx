// app/employees/[id]/page.tsx

import FullEmployee from "@/components/full-employee";
import getEmployeeById from "@/lib/getEmployeeById";
import getEmployeeHistory from "@/lib/getEmployeeHistory";
import { redirect } from "next/navigation";
import { getBonusPointValue } from "@/lib/getBonusPointValue";
import { getServerSession } from "next-auth";
import { getAuthOptions } from "@/lib/authOptions"; 
import getTotalBonusPoints from "@/lib/getTotalBonusPoints";

export default async function FullEmployeePage({ params }: { params: { id: string } }) {
    const session = await getServerSession(await getAuthOptions()); 

    if (!session?.user?.id) {
        return redirect("/auth/signin");
    }

    const userId = session.user.id;
    const bonusPointValue = await getBonusPointValue();

    try {
        const param = await params;
        const employee = await getEmployeeById(param.id, userId);

        if (!employee) {
            return <p>NOOOO Employee</p>
        }

        const history = await getEmployeeHistory(employee.employeeId);

        const date = employee.date;
        const totalBonusPoints = await getTotalBonusPoints(userId, date);

        return (
            <div>
                <FullEmployee 
                    person={employee} 
                    bonusPointValue={bonusPointValue} 
                    totalBonusPoints={totalBonusPoints}
                    history={history}
                />
            </div>
        );
    } catch (error) {
        console.error(error);
        return redirect("/");
    }
}


