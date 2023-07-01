export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: employeesList,

    getNumberOfDepartments(employeesList) {
      let num = 0;
      for (const elem in employeesList) {
        if (Object.prototype.hasOwnProperty.call(employeesList, elem)) {
          num += 1;
        }
      }
      return num;
    },
  };
  return obj;
}
