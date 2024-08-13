import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Employee } from "@/app/utils/types";

interface EmployeeTableProps {
  data: Employee[]
}



const EmployeeTable = ({ data }: EmployeeTableProps) => {


  return (
    <div className="mx-auto bg-white p-6">
      <h2 className="text-2xl font-bold mb-6">Employee List</h2>
      <Card>
        <CardHeader>
          <CardTitle>Recent Sales</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-8">
          {data.map((employee) => (
            <div key={employee.id} className="flex items-center gap-4">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarFallback>{`${employee.firstName.charAt(0)}${employee.lastName.charAt(0)}`}</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  {`${employee.firstName} ${employee.lastName}`}
                </p>
                <p className="text-sm text-muted-foreground">
                  {employee.email}
                </p>
              </div>
              <div className="ml-auto font-medium">{employee.role}</div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployeeTable;