// components/full-employee.tsx

import { EmployeeProps } from "@/types";
import Employee from "./employee";
import updateName from "@/lib/updateName";
import UpdateNameForm from "@/components/update-name-form";

export default function FullEmployee({ person }: { person: EmployeeProps }) {
    return (
        <div>
            <Employee data={person} />
            <UpdateNameForm action={updateName} id={person.id} />
        </div>
    );
}