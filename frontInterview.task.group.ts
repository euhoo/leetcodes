import _ from 'lodash';

interface StudentI {
  name: string,
  age: number,
  groupId: number
}
type GroupedStudentsI = { [key: number]: StudentI[] }
const studentsData: StudentI[] = [
  {
    name: 'Vasya',
    age: 18,
    groupId: 103,
  },
  {
    name: 'Petya',
    age: 17,
    groupId: 103,
  },
  {
    name: 'Olya',
    age: 19,
    groupId: 103,
  },
  {
    name: 'Kira',
    age: 17,
    groupId: 203,
  },
  {
    name: 'Igor',
    age: 18,
    groupId: 103,
  },
  {
    name: 'Elisey',
    age: 17,
    groupId: 103,
  },
  /*203*/
  {
    name: 'Vasya203',
    age: 17,
    groupId: 203,
  },
  {
    name: 'Petya203',
    age: 17,
    groupId: 203,
  },
  {
    name: 'Olya203',
    age: 19,
    groupId: 203,
  },
  {
    name: 'Kira203',
    age: 18,
    groupId: 203,
  },
  {
    name: 'Igor203',
    age: 17,
    groupId: 203,
  },
  {
    name: 'Elisey203',
    age: 18,
    groupId: 203,
  },

];

export const filterStudents = (students: StudentI[]): GroupedStudentsI => students
  .filter(s => s.age > 17)
  .reduce((acc, current) => {
    const { groupId } = current;
    const accGroupById = acc[groupId] || [];
    return { ...acc, [groupId]: [...accGroupById, current] };
  }, {} as GroupedStudentsI);

export const filterWithLodash = (students: StudentI[]): GroupedStudentsI => {
  return _.groupBy(students.filter(s => s.age > 17), 'groupId');
};
export const filterWithOnlyLodash = (students: StudentI[]): GroupedStudentsI => {
  return _
    .chain(students)
    .filter(s => s.age > 17)
    .groupBy('groupId')
    .value();
};
