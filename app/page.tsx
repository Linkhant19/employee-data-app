// app/page.tsx

import EmployeeDisplay from "@/components/employee-display";

export default async function Home() {

  return (
    <div>
      <EmployeeDisplay inputEmployees={[]} />
    </div>
  );
}