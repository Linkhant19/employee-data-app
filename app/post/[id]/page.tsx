// app/post/[id]/page.tsx

import EmployeePreview from "@/components/employee-preview";
import getEmployeeById from "@/lib/getEmployeeById";
import { redirect } from "next/navigation";

export default async function FullEmployeePage({ params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    
    try {
        const employee = await getEmployeeById(id);

        if (!employee) {
            return redirect("/");
        }

        return (
            <div>
                <EmployeePreview person={employee} />
            </div>
        );
    } catch (error) {
        console.error(error);
        return redirect("/");
    }

}
