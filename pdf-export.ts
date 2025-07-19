import { StudentGrade } from "@/types/grade";

declare global {
  interface Window {
    html2pdf: any;
  }
}

export async function exportToPDF(student: StudentGrade, elementId: string): Promise<void> {
  try {
    if (!window.html2pdf) {
      throw new Error('html2pdf library not loaded');
    }

    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error('Element not found for PDF export');
    }

    const options = {
      margin: 1,
      filename: `${student.studentName}_Grade_Report.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    await window.html2pdf().set(options).from(element).save();
  } catch (error) {
    console.error('Failed to export PDF:', error);
    throw new Error('Failed to export PDF. Please try again.');
  }
}
