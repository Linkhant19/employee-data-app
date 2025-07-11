// app/page.tsx

import EmployeeDisplay from "@/components/employee-display";
import getAllEmployee from "@/lib/getAllEmployee";
import LogoutButton from "@/components/logout-button";
import LoginButton from "@/components/login-button";

import { getServerSession } from "next-auth";
import { getAuthOptions } from "@/lib/authOptions"; 

export default async function Home() {
  const session = await getServerSession(await getAuthOptions()); 
  console.log("SESSION:", session);
  console.log("USER ID:", session?.user?.id);

  if (!session?.user?.id) {
    return <p>You must be signed in to view this page.
      <LogoutButton />
      <LoginButton />
    </p>;
  }

  const employees = await getAllEmployee(session.user.id);

  return (
    <div>
      <EmployeeDisplay inputEmployees={employees} />
    </div>
  );
}
