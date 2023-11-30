const fs = require('fs').promises;

const countStudent = function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((content) => {
        const result = [];
        const headers = ['firstname', 'lastname', 'age', 'field'];

        content
          .trim() // remove trailing whitespace
          .split('\n') // split to lines
          .forEach((lines, index) => {
          // remove the headers
            if (index === 0) return;

            // split into comman separated words
            const values = lines.split(',');

            if (values.length === headers.length) {
            // create object to store header:value pair
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
        // console log the number of student in field and list of firnames
        Object.entries(studentByField).forEach(([field, names]) => {
          console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        });
        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
};

module.exports = countStudent;
