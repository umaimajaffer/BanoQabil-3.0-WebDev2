//MARK SHEET
const totalMarks = 200;

const students = [
  {
    name: "Ali",
    scienceMarks: 90,
    englishMarks: 70,
  },
  {
    name: "Huzaifa",
    scienceMarks: 10,
    englishMarks: 40,
  },
  {
    name: "Asim",
    scienceMarks: 40,
    englishMarks: 60,
  },
];

function calculateMarks(student) {
  const total = student.scienceMarks + student.englishMarks;
  const percentage = (total / totalMarks) * 100;
  return { percentage, total };
}

const marksheetContainer = document.getElementById("marksheet");

students.forEach(student => {
  const result = calculateMarks(student);

  const studentCard = document.createElement("div");
  studentCard.classList.add("bg-white", "shadow-md", "rounded-lg", "p-6");

  studentCard.innerHTML = `
    <h2 class="text-2xl font-bold text-gray-800 mb-4">${student.name}</h2>
    <p class="text-gray-700"><strong>Science:</strong> ${student.scienceMarks}</p>
    <p class="text-gray-700"><strong>English:</strong> ${student.englishMarks}</p>
    <p class="text-gray-700"><strong>Total Marks:</strong> ${result.total}</p>
    <p class="text-gray-700"><strong>Percentage:</strong> ${result.percentage.toFixed(2)}%</p>
    <p class="${result.percentage >= 40 ? 'text-green-600' : 'text-red-600'} font-bold">
      ${result.percentage >= 40 ? 'PASSED' : 'FAILED'}
    </p>
  `;

  marksheetContainer.appendChild(studentCard);
});
