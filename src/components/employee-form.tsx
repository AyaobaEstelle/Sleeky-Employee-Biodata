const EmployeeForm = () => {
  const employee = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    emergencyContact: "",
    bankName: "",
    bankAccountNumber: "",
    accountName: "",
    nokName: "",
    nokNumber: "",
    nokRelationship: "",
    role: "",
    startDate: "",
    birthday: "",
    educationLevel: "",
  };

  return (
    <div className=" font-serif">
      <form className="max-w-xl mx-auto p-6 rounded shadow-md">
        <h1 className=" flex justify-center text-4xl font-bold mb-7 uppercase text-green-700">
          Sleeky Programmers
        </h1>
        <h2 className="text-3xl font-bold mb-6 text-green-700">Employee Biodata</h2>
        <div className="grid gap-4 mb-4">
          {[
            { label: "First Name", type: "text", name: "firstName" },
            { label: "Last Name", type: "text", name: "lastName" },
            { label: "Email", type: "email", name: "email" },
            { label: "Address", type: "text", name: "houseAddress" },
            { label: "Phone Number", type: "tel", name: "phone" },
            {
              label: "Emergency Contact Number",
              type: "tel",
              name: "emergencyContact",
            },
            { label: "Bank Name", type: "text", name: "bankName" },
            {
              label: "Bank Account Number",
              type: "text",
              name: "bankAccountNumber",
            },
            { label: "Account Name", type: "text", name: "accountName" },
            { label: "Next of Kin (NOK) Name", type: "text", name: "nokName" },
            { label: "(NOK) Phone Number", type: "tel", name: "nokNumber" },
            {
              label: "(NOK) Relationship",
              type: "text",
              name: "nokRelationship",
            },
            { label: "Role", type: "text", name: "role" },
            { label: "Employment Start Date", type: "date", name: "startDate" },
            { label: "Date of Birth", type: "date", name: "birthday" },
            {
              label: "Educational Level",
              type: "text",
              name: "educationLevel",
            },
          ].map(({ label, type, name }) => (
            <div key={name} className="flex flex-col text-gray-700">
              <label htmlFor={name} className="mb-3 font-semibold text-gray-700">
                {label}
              </label>
              <input
                type={type}
                id={name}
                name={name}
                className="p-2 border rounded"
                required
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-900  text-white py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
