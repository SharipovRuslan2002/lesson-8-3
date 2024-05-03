// 1-task 


// let textarea = document.getElementById("myTextarea");
// let input = document.getElementById("myInput");
// let resultDiv = document.getElementById("result");

// input.addEventListener("keyup", function() {
//   let inputValue = input.value.toLowerCase();
//   let textareaValue = textarea.value.toLowerCase();

//   if (textareaValue.indexOf(inputValue) !== -1) {
//     resultDiv.textContent = "Matnda so'z mavjud";
//   } else {
//     resultDiv.textContent = "Matnda so'z mavjud emas";
//   }
// }
// )

// textarea.addEventListener("keyup", function() {
//   let inputValue = input.value.toLowerCase();
//   let textareaValue = textarea.value.toLowerCase();

//   if (textareaValue.indexOf(inputValue) !== -1) {
//     resultDiv.textContent = "Matnda so'z mavjud";
//   } else {
//     resultDiv.textContent = "Matnda so'z mavjud emas";
//   }
// }
// )


// 2-task 


let  fileInput = document.getElementById('myFileInput');
let  fileSizeDisplay = document.getElementById('fileSize');

fileInput.addEventListener('change', function() {
  let  file = this.files[0]

  if (file) {
    var fileSizeInKB = file.size / 1024
    fileSizeDisplay.textContent = 'Fayl o\'lchami: ' + fileSizeInKB.toFixed(2) + ' KB';
  } else {
    fileSizeDisplay.textContent = 'Fayl tanlanmagan';
  }
}
)


// 3-task 


function qavs_soni(matn) {
    let ochuvchi = 0;
    let yopuvchi = 0;
    for (let i = 0; i < matn.length; i++) {
        if (matn[i] === '(') {
            ochuvchi++;
        } else if (matn[i] === ')') {
            yopuvchi++;
        }
    }
    return ochuvchi === yopuvchi;
}

function hisoblash() {
    const matn = document.getElementById('matn').value;
    if (qavs_soni(matn)) {
        alert("Jami ochuvchi va yopuvchi qavslar soni teng.");
    } else {
        alert("Jami ochuvchi va yopuvchi qavslar soni teng emas.");
    }
}
