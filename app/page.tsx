// app/page.tsx

import EmployeeDisplay from "@/components/employee-display";
import getAllEmployee from "@/lib/getAllEmployee";

export default async function Home() {
  const employees = await getAllEmployee();

  return (
    <div>
      <EmployeeDisplay inputEmployees={employees} />
    </div>
  );
}