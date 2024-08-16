import { ReactNode } from "react"

export interface Employee {
    [x: string]: ReactNode
    id: string
    bankAccountNumber: string
    nokNumber: string
    phone: string
    startDate: string
    nokRelationship: string
    nokName: string
    houseAddress: string
    bankName: string
    email: string
    birthday: string
    lastName: string
    firstName: string
    educationLevel: string
    role: string
    accountName: string
    emergencyContact: string
}