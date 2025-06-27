// app/employees/[id]/page.tsx

import FullEmployee from "@/components/full-employee";
import getEmployeeById from "@/lib/getEmployeeById";
import { redirect } from "next/navigation";
import { getBonusPointValue } from "@/lib/getBonusPointValue";

export default async function FullEmployeePage({ params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const bonusPointValue = await getBonusPointValue();
    
    try {
        const employee = await getEmployeeById(id);

        if (!employee) {
            return redirect("/");
        }

        return (
            <div>
                <FullEmployee person={employee} bonusPointValue={bonusPointValue} />
            </div>
        );
    } catch (error) {
        console.error(error);
        return redirect("/");
    }

}
