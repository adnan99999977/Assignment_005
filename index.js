// function to get inner text from parent node and convert into number
function getInnerTextIntoNum(id) {
  let getText = document.getElementById(id);
  let text = getText.innerText;
  let numText = parseInt(text);
  return numText;
}

// function for find class list as a loop and get an Array

function findingAllClasses(cls) {
  let className = document.querySelectorAll(cls);
  let texts = [];
  for (let cls of className) {
    let text = cls.innerText;
    texts.push(text);
  }
  return texts;
}

let loveIcon = document.querySelectorAll(".loveicon");
for (let icon of loveIcon) {
  icon.addEventListener("click", function () {
    let box = document.getElementById("heart_box");
    let heart = getInnerTextIntoNum("heart_text");
    let newText = heart + 1;
    box.children[0].innerText = newText;
  });
}

// Add this service into the Call History section with:
// Service name
// Service number

let history = {
    service:"ফায়ার সার্ভিস",
    date : new Date().toLocaleTimeString()
}


let callBtn = document.querySelectorAll(".call_btn");
let serviceName = findingAllClasses(".service_name");
let number = findingAllClasses(".service_num");

callBtn.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    let textNum = getInnerTextIntoNum("coin_box");
    if (textNum <= 0) {
      alert(" Sorry! Out of coin");
      return;
    }
    let name = serviceName[index];
    let num = number[index];
    alert("📞 ফোন করা হচ্ছে " + name + " " + num + "....");
    let newValue = textNum - 20;
    if (newValue < 0) newValue = 0;
    document.getElementById("coin_box").children[0].innerText = newValue;


       
  });
});


// 5. Call History Section
// Show all called services with name & number. This will empty initially. when call button clicked it will filled dynamically.
// A Clear History button on the right
// Clicking this button will remove all data from call history

let copyBtns = document.querySelectorAll(".copy_btn");
let numbers = findingAllClasses(".service_num");
copyBtns.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    let copyBox = getInnerTextIntoNum("copy_box");
    let newText = copyBox + 1 + " " + "copy";
    document.getElementById("copy_box").children[0].innerText = newText;
    let copyNum = number[index];
    navigator.clipboard.writeText(copyNum);
    alert("Hotline number copied successfully");
  });
});
