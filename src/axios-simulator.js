import { v4 as uuid } from "uuid";
import { employees } from "./store";

export const axiosSimulator = {
  post: async (url, data) => {
    const employee = { id: uuid(), ...data };
    employees.push(employee);
    return { data: employee };
  },
  get: async (url) => {
    const parts = url.split("/");
    if (parts.length > 2) {
      const employeeId = url.split("/").pop();
      return { data: employees.find((e) => e.id === employeeId) };
    } else {
      return { data: employees };
    }
  },
  put: async (url, data) => {
    const employeeId = url.split("/").pop();
    const index = employees.findIndex((e) => e.id === employeeId);
    employees[index] = { id: employeeId, ...data };
    return { data };
  },
  delete: async (url) => {
    const employeeId = url.split("/").pop();
    employees.filter((e) => e.id !== employeeId);
  },
};
