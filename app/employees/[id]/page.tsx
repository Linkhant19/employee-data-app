// app/employees/[id]/page.tsx

import FullEmployee from "@/components/full-employee";
import getEmployeeById from "@/lib/getEmployeeById";
import { redirect } from "next/navigation";
import { getBonusPointValue } from "@/lib/getBonusPointValue";
import { getServerSession } from "next-auth";
import { getAuthOptions } from "@/lib/authOptions"; 

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


