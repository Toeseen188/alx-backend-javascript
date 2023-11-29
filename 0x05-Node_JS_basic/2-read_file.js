const fs = require('fs');

const countStudents = function countStudents(path) {
  try {
    // read file from path synchronously
    const fileContent = fs.readFileSync(path, 'utf8');

    // parse CSV contents
    const result = [];
    const headers = ['firstname', 'lastname', 'age', 'field'];

    fileContent
      .trim() // remove trailing whitespace
      .split('\n') // split into lines
      .forEach((line, index) => {
      // skip the first line ( which is the header)
        if (index === 0) return;

        // splits values into into comma separated words
        const values = line.split(',');

        if (values.length === headers.length) {
        // create an object to hold both header:value
          const student = {};
          headers.forEach((header, i) => {
            student[header] = values[i].trim();
          });
          result.push(student);
        }
      });

    const studentByField = result.reduce((acc, student) => {
      if (!acc[student.field]) {
        acc[student.field] = [];
      }
      acc[student.field].push(student.firstname);
      return acc;
    }, {});

    // log the number of student
    console.log(`Number of students: ${result.length}`);
    // log the number of students in a field

    Object.entries(studentByField).forEach(([field, names]) => {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
