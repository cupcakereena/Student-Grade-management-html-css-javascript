import { StudentGrade } from "@/types/grade";

const STORAGE_KEY = 'gradeHistory';

export function saveGradeHistory(history: StudentGrade[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch (error) {
    console.error('Failed to save grade history:', error);
  }
}

export function loadGradeHistory(): StudentGrade[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to load grade history:', error);
    return [];
  }
}

export function addGradeToHistory(grade: StudentGrade): StudentGrade[] {
  const history = loadGradeHistory();
  const newHistory = [grade, ...history];
  saveGradeHistory(newHistory);
  return newHistory;
}

export function removeGradeFromHistory(id: number): StudentGrade[] {
  const history = loadGradeHistory();
  const newHistory = history.filter(grade => grade.id !== id);
  saveGradeHistory(newHistory);
  return newHistory;
}

export function clearGradeHistory(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear grade history:', error);
  }
}
