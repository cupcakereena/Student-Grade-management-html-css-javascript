import { GradeInfo } from "@/types/grade";

export const SUBJECT_NAMES = [
  'Mathematics',
  'Science', 
  'English',
  'History',
  'Geography'
];

export function calculateGrade(percentage: number): GradeInfo {
  if (percentage >= 90) return { grade: 'A', color: 'green', gpa: 4.0 };
  if (percentage >= 80) return { grade: 'B', color: 'blue', gpa: 3.0 };
  if (percentage >= 70) return { grade: 'C', color: 'yellow', gpa: 2.0 };
  if (percentage >= 60) return { grade: 'D', color: 'orange', gpa: 1.0 };
  return { grade: 'F', color: 'red', gpa: 0.0 };
}

export function validateMarks(marks: number[]): boolean {
  return marks.every(mark => mark >= 0 && mark <= 100);
}

export function calculateTotalMarks(marks: number[]): number {
  return marks.reduce((sum, mark) => sum + mark, 0);
}

export function calculatePercentage(totalMarks: number, maxMarks: number): number {
  return (totalMarks / maxMarks) * 100;
}

export function getGradeColor(grade: string): string {
  switch (grade) {
    case 'A': return 'text-green-600 dark:text-green-400';
    case 'B': return 'text-blue-600 dark:text-blue-400';
    case 'C': return 'text-yellow-600 dark:text-yellow-400';
    case 'D': return 'text-orange-600 dark:text-orange-400';
    case 'F': return 'text-red-600 dark:text-red-400';
    default: return 'text-gray-600 dark:text-gray-400';
  }
}

export function getGradeBgColor(grade: string): string {
  switch (grade) {
    case 'A': return 'bg-green-50 dark:bg-green-900/20';
    case 'B': return 'bg-blue-50 dark:bg-blue-900/20';
    case 'C': return 'bg-yellow-50 dark:bg-yellow-900/20';
    case 'D': return 'bg-orange-50 dark:bg-orange-900/20';
    case 'F': return 'bg-red-50 dark:bg-red-900/20';
    default: return 'bg-gray-50 dark:bg-gray-900/20';
  }
}
