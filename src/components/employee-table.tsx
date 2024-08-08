const EmployeeTable = () => {
  const employees: string[] = [];

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6">Employee List</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            {[
              "First Name",
              "Last Name",
              "Email",
              "Address",
              "Phone Number",
              "Emergency Contact Number",
              "Bank Name",
              "Bank Account Number",
              "Account Name",
              "NOK Name",
              "NOK Number",
              "NOK Relationship",
              "Role",
              "Employment Start Date",
              "Birthday",
              "Educational Level",
              "Actions",
            ].map((header) => (
              <th key={header} className="py-2 px-4 border-b">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index} className="hover:bg-gray-100">
              {Object.values(employee).map((value, i) => (
                <td key={i} className="py-2 px-4 border-b">
                  {value as string}
                </td>
              ))}
              <td className="py-2 px-4 border-b">
                <button className="bg-red-500 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
//  /employee/form -> /employee/form/page.tsx
//  /employee/list -> /employee/list/page.tsx
