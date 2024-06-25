// Input data
const students = [
    {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
];

function calculateAverages(students) {
    return students.map((student, index) => {

        const scores = Object.values(student);

        const sum = scores.reduce((acc, score) => acc + score, 0);

        const average = sum / scores.length;

        return { [`student${index + 1}`]: { average: average } };
    });
}

const averages = calculateAverages(students);


console.log(JSON.stringify(averages, null, 2));

// Output the result
// [
//   {
//     "student1": {
//       "average": 64.2
//     }
//   },
//   {
//     "student2": {
//       "average": 64.2
//     }
//   },
//   {
//     "student3": {
//       "average": 64.2
//     }
//   }
// ]