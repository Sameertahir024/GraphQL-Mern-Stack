import { gql } from "@apollo/client";
import client from "../apolloClient/Client";

// GraphQL query to fetch employee data with pagination
export const GET_EMPLOYEES = gql`
  query GetEmployees($limit: Int) {
    employees(limit: $limit) {
      id
      name
      age
      class
      subjects
      attendance
    }
  }
`;

// GraphQL query to fetch a single employee by ID
export const GET_EMPLOYEE = gql`
  query GetEmployee($id: ID!) {
    employee(id: $id) {
      id
      name
      age
      class
      subjects
      attendance
    }
  }
`;

// Function to fetch employees data
export const fetchEmployees = async (limit) => {
  try {
    const { data } = await client.query({
      query: GET_EMPLOYEES,
      variables: { limit },
    });

    console.log("this is", data);
    return data.employees;
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error;
  }
};

// Function to fetch a single employee by ID
export const fetchEmployee = async (id) => {
  try {
    const { data } = await client.query({
      query: GET_EMPLOYEE,
      variables: { id },
    });
    return data.employee;
  } catch (error) {
    console.error("Error fetching employee:", error);
    throw error;
  }
};

// GraphQL mutation to update an existing employee
export const UPDATE_EMPLOYEE = gql`
  mutation UpdateEmployee(
    $id: ID
    $name: String
    $age: Int
    $class: String
    $subjects: [String]
    $attendance: Int
  ) {
    updateEmployee(
      id: $id
      name: $name
      age: $age
      class: $class
      subjects: $subjects
      attendance: $attendance
    ) {
      id
      name
      age
      class
      subjects
      attendance
    }
  }
`;

const ADD_EMPLOYEE = gql`
  mutation AddEmployee(
    $name: String!
    $age: Int!
    $class: String!
    $subjects: [String!]!
    $attendance: Int!
  ) {
    addEmployee(
      name: $name
      age: $age
      class: $class
      subjects: $subjects
      attendance: $attendance
    ) {
      id
      name
      age
      class
      subjects
      attendance
    }
  }
`;

// Function to add a new employee
export const addEmployee = async (employeeData) => {
  try {
    const { data } = await client.mutate({
      mutation: ADD_EMPLOYEE,
      variables: employeeData,
    });

    return data.addEmployee;
  } catch (error) {
    console.error("Error adding employee:", error);
    throw error;
  }
};

// Function to update an existing employee
export const updateEmployee = async (employeeData) => {
  try {
    const { data } = await client.mutate({
      mutation: UPDATE_EMPLOYEE,
      variables: employeeData,
    });
    return data.updateEmployee;
  } catch (error) {
    console.error("Error updating employee:", error);
    throw error;
  }
};

export const DELETE_EMPLOYEE = gql`
  mutation DeleteEmployee($id: ID!) {
    deleteEmployee(id: $id) {
      success
      message
    }
  }
`;

export const deleteEmployee = async (id) => {
  try {
    const { data } = await client.mutate({
      mutation: DELETE_EMPLOYEE,
      variables: { id },
    });
    return data.deleteEmployee;
  } catch (error) {
    console.error("Error deleting employee:", error);
    throw error;
  }
};
