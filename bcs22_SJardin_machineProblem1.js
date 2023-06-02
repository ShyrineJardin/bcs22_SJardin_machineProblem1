// ITCS 227 Source Code Template for 2T AY 2022-2023
/*
  Program: Computation for Grades using Function
  Programmer: Shyrine Jardin
  Section: BCS22
  Start Date: June 02, 2023
  End Date: June 02,2023
*/
function createRow(data) {
  var row = document.createElement('tr');

  for (var i = 0; i < data.length; i++) {
    var cell = document.createElement('td');
    cell.textContent = data[i];
    row.appendChild(cell);
  }

  return row;
}

function StudentGrade() {
  var tableBody = document.getElementById('tableBody');

  for (var i = 0; i < 5; i++) {
    var name = prompt(`Enter the name of the student ${i + 1}: `);

    var totalEnabling = 0;
    for (var j = 0; j < 5; j++) {
      var enabling = parseFloat(prompt(`Enter enabling assessment ${j + 1}: `));
      totalEnabling += enabling;
    }
    var classPart = totalEnabling / 5;

    var totalSummative = 0;
    for (var k = 0; k < 3; k++) {
      var summative = parseFloat(prompt(`Enter summative assessment ${k + 1}: `));
      totalSummative += summative;
    }
    var aveSummative = totalSummative / 3;

    var finalAs = parseFloat(prompt('Enter major exam grade: '));

    var finalGrade = (classPart * 0.3) + (aveSummative * 0.3) + (finalAs * 0.4);

    var letterGrade = '';
    if (finalGrade >= 90) {
      letterGrade = 'A';
    } else if (finalGrade >= 80) {
      letterGrade = 'B';
    } else if (finalGrade >= 70) {
      letterGrade = 'C';
    } else if (finalGrade >= 60) {
      letterGrade = 'D';
    } else {
      letterGrade = 'F';
    }

    var rowData = [
      name,
      aveSummative.toFixed(2),
      classPart.toFixed(2),
      finalAs.toFixed(2),
      finalGrade.toFixed(2),
      letterGrade
    ];

    var row = createRow(rowData);
    tableBody.appendChild(row);
  }
}

StudentGrade();
