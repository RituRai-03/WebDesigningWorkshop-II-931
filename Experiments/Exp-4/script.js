function calculateResult() {
   
    let numSubjects = parseInt(document.getElementById("numSubjects").value);

    if (isNaN(numSubjects) || numSubjects <= 0) {
        alert("Please enter a valid number of subjects (greater than 0).");
        return;
    }

  
    let totalMarks = 0;
    for (let i = 1; i <= numSubjects; i++) {
        let mark = parseFloat(prompt("Enter marks for Subject " + i + " (out of 100):"));
        if (isNaN(mark) || mark < 0 || mark > 100) {
            alert("Invalid marks for Subject " + i + ". Please enter a value between 0 and 100.");
            return;
        }
        totalMarks += mark;
    }

    
    let averageMarks = parseFloat((totalMarks / numSubjects).toFixed(2));

    
    let grade, gradeClass;
    if (averageMarks >= 90) {
        grade = "A"; gradeClass = "text-success";
    } else if (averageMarks >= 75) {
        grade = "B"; gradeClass = "text-primary";
    } else if (averageMarks >= 60) {
        grade = "C"; gradeClass = "text-warning";
    } else if (averageMarks >= 40) {
        grade = "D"; gradeClass = "text-info";
    } else {
        grade = "F"; gradeClass = "text-danger";
    }

    
    let resultStatus = averageMarks >= 40 ? "PASS" : "FAIL";
    let resultClass = averageMarks >= 40 ? "text-success" : "text-danger";

    
    let resultBox = document.getElementById("resultBox");
    resultBox.innerHTML = `
        <h4 class="mb-3">📊 Result Summary</h4>
        <p><strong>Number of Subjects:</strong> ${numSubjects}</p>
        <p><strong>Total Marks:</strong> ${totalMarks}</p>
        <p><strong>Average Marks:</strong> ${averageMarks} / 100</p>
        <p><strong>Grade:</strong> <span class="${gradeClass}">${grade}</span></p>
        <p><strong>Result:</strong> <span class="${resultClass}">${resultStatus}</span></p>
    `;
    resultBox.classList.remove("d-none"); 
}
