const students = [
  {
    id: 10,
    name: 'John Smith',
    marks: [10, 8, 6, 9, 8, 7]
  },
  {
    id: 11,
    name: 'John Doe',
    marks: [9, 8, 7, 6, 7]
  },
  {
    id: 12,
    name: 'Thomas Anderson',
    marks: [6, 7, 10, 8]
  },
  {
    id: 13,
    name: 'Jean-Baptiste Emanuel Zorg',
    marks: [10, 9, 8, 9]
  }
];

console.log(averageStudentMark(10));
console.log(averageGroupMark(students));

function averageStudentMark(id) {
  const student = students.find((item) => item.id == id);

  if (!student) {
    return;
  }

  const averageMark = getAverageMark(student.marks);

  return averageMark;
}

function averageGroupMark(students) {
  const marks = students.reduce((previous, current) => [...previous, ...current.marks], []);
  const averageMark = getAverageMark(marks);

  return averageMark;
}

function getMarkSum(marks) {
  return marks.reduce((previousValue, currentValue) => previousValue + currentValue);
}

function getAverageMark(marks) {
  const markSum = getMarkSum(marks);
  const averageMark = markSum / marks.length;

  return averageMark;
}