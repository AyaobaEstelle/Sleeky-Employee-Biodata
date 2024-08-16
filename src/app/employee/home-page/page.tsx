import Link from "next/link";
import React from "react";
import EmployeeForm from "@/components/employee-form";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold mb-7 uppercase">Sleeky Programmers</h1>
      <h2 className="text-4xl font-bold mb-6 italic">Employee Details</h2>
      <div className="flex space-x-4">
        <Link href="/employee/form">
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-900 text-white rounded">
            Add Employee
          </button>
        </Link>
        <Link href="/employee/list">
          <button className="px-4 py-2 bg-green-500 hover:bg-green-900 text-white rounded">
            View Employees
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
