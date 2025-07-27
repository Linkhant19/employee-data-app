// app/page.tsx

import EmployeeDisplay from "@/components/employee-display";
import getAllEmployee from "@/lib/getAllEmployee";
import Header from "@/components/header";

import { getServerSession } from "next-auth";
import { getAuthOptions } from "@/lib/authOptions"; 

export default async function Home() {
  const session = await getServerSession(await getAuthOptions()); 

  if (!session?.user?.id) {
    return (
      <>
        <Header userId={null} userImage={null}/>
      </>
    );
  }

  const employees = await getAllEmployee(session.user.id);

  return (
    <div>
      <Header userId={session.user.id} userImage={session.user.image}/>
      <EmployeeDisplay inputEmployees={employees} />
    </div>
  );
}
