let count: number = 0;

let html1 = [
  `<h1>Personal Info</h1>
  <p>Please provide your name, email address, and phone number.</p>
  <label for="name">Name</label>
  <input type="text" id="name" class="info">
  <label for="email">Email Address</label>
  <input type="email" id="email" class="info">
  <label for="number">Phone Number</label>
  <input type="number" id="number" class="info">`,

  `<h1>Select your plan</h1>
  <p id="option">You have the option of monthly or yearly billing.</p>`,

  `<h1>Pick add-ons</h1>
  <p id="option">Add-ons help enhance your gaming experience.</p>`,

  `<h1>Finishing up</h1>
  <p id="option">Double-check everything looks OK before Confirming.</p>`
];


function func():void {
  if (circles) {
    circles.forEach((val, index) => {
      const element = val as HTMLElement;
      if (count == index) {
        element.style.backgroundColor = "hsl(206, 94%, 87%)";
        element.style.color = "hsl(213, 96%, 18%)";
      } else {
        element.style.backgroundColor = "transparent";
        element.style.color = "white";
      }
    });
  }
  if (myDiv) {
    myDiv.innerHTML = html1[count];
  }
  if (count > 0 && count < 3) {
    goBack1.style.display = "block";
    goBack2.style.display = "block";
    Confirm.style.display = "none";
    next1.style.display = "block";
    next2.style.display = "block";
  } else if (count > 2) {
    Confirm.style.display = "block";
    next1.style.display = "none";
    next2.style.display = "none";
  }
  else {
    goBack1.style.display = "none";
    goBack2.style.display = "none";
    next1.style.display = "block";
    next2.style.display = "block";
  }
}
 


let goBack1 = document.querySelector("#goBack1") as HTMLElement;
let goBack2 = document.querySelector("#goBack2") as HTMLElement;
let next1 = document.querySelector("#btn1") as HTMLElement;
let next2 = document.querySelector("#btn2") as HTMLElement;
let circles = document.querySelectorAll(".circles");
let myDiv = document.querySelector("#stepInfo");
let Confirm = document.querySelector("#confirm") as HTMLElement;
let planA = document.querySelector("#MyplansA") as HTMLElement;
let planB = document.querySelector("#MyplansB") as HTMLElement;
let plansA = document.querySelectorAll(".plansA");
let plansB = document.querySelectorAll(".plansB");
let headingA = document.querySelectorAll(".headingA");
let headingB = document.querySelectorAll(".headingB");
let tick = document.querySelectorAll(".tick");
let txt1 = document.querySelectorAll(".txt1");
let txt2 = document.querySelectorAll(".txt2");
let free = document.querySelectorAll(".free");
let planBtn = document.querySelector("#planBtn") as HTMLElement;
let ways = document.querySelector("#ways") as HTMLElement;
let cir = document.querySelector("#cir") as HTMLElement;
let req1 = document.querySelector("#required1") as HTMLElement;

function next(): void {
  if (count < 4) {
    count++;
    func();
    if (count == 1) {
      ways.style.display = "flex";
      planA.style.display = "flex"
      planB.style.display = "none"
      if (obj1.length == 0) {
        req1.style.display = "block";
        return;
      }
    }
    else if (count == 2){
      ways.style.display = "none";
      planB.style.display = "block"
      planA.style.display = "none"
      req1.style.display = "none";
    }
    else {
      ways.style.display = "none";
      planB.style.display = "none"
      planA.style.display = "none"
      req1.style.display = "none";
    }
  }
}

function previous(): void {
  if (count > -1) {
    count--;
    func();
    if (count == 1) {
      ways.style.display = "flex";
      planA.style.display = "flex"
      planB.style.display = "none"
    }
    else if (count == 2){
      ways.style.display = "none";
      planB.style.display = "block"
      planA.style.display = "none"
    }
    else {
      ways.style.display = "none";
      planA.style.display = "none"
      planB.style.display = "none"
    }
  }
}


if (next1) {
  next1.addEventListener("click", next);
}
if (next2) {
  next2.addEventListener("click", next);
}
if (goBack1) {
  goBack1.addEventListener("click", previous);
}
if (goBack2) {
  goBack2.addEventListener("click", previous);
}

let paid1: Number[][] = [[9,12,15],[90,120,150]];
let paid2: Number[][]= [[1,2,2],[10,20,20]];

let counting: Number = 0;
if (planBtn) {
  planBtn.addEventListener('click',()=>{
    if (counting == 0) {
      cir.style.left = "45%";
      txt1.forEach((val,index)=>{
        const element = val as HTMLElement;
        element.innerHTML = `$${paid1[1][index]}/yr`;
      })
      txt2.forEach((val,index)=>{
        const element = val as HTMLElement;
        element.innerHTML = `+$${paid2[0][index]}/yr`
      })
      free.forEach((val)=>{
        const element = val as HTMLElement;
        element.style.display = "block";
      })
      counting = 1;
    }
    else {
      cir.style.left = "0%";
      txt1.forEach((val,index)=>{
        const element = val as HTMLElement;
        element.innerHTML = `$${paid1[0][index]}/mo`
      })
      txt2.forEach((val,index)=>{
        const element = val as HTMLElement;
        element.innerHTML = `+$${paid2[1][index]}/mo`
      })
      free.forEach((val)=>{
        const element = val as HTMLElement;
        element.style.display = "none";
      })
      counting = 0;
    }
    })
}

interface data1 {
  package: string,
  price: string
}
interface data2 {
  package: string,
  price: string
}

let obj1: data1[];
let obj2: data2[] = [];

plansA.forEach((val,index)=>{
  val.addEventListener('click',()=>{
    plansA.forEach((val1)=>{
      val1.classList.remove("clickOnA");
      val1.classList.add("clickOffA");
    })
    if (val.classList.contains("clickOnA")) {
      val.classList.remove("clickOnA");
      val.classList.add("clickOffA");
    }
    else {
      val.classList.remove("clickOffA");
      val.classList.add("clickOnA");
    }
    obj1 = [{package: headingA[index].innerHTML, price: txt1[index].innerHTML}];
  })
})
tick.forEach((val,index)=>{
  val.addEventListener('click',()=>{
    if (plansB[index].classList.contains("clickOnB") && txt2[index].classList.contains("txtpurple")) {
      plansB[index].classList.remove("clickOnB");
      plansB[index].classList.add("clickOffB");
      txt2[index].classList.remove("txtpurple");
      txt2[index].classList.add("txtblack");
      obj2.forEach((val)=>{
        if (val.package == headingB[index].innerHTML) {
          obj2.splice(index,1);
        }
      })
    }
    else {
      plansB[index].classList.remove("clickOffB");
      plansB[index].classList.add("clickOnB");
      txt2[index].classList.remove("txtblack");
      txt2[index].classList.add("txtpurple");
      obj2.push({package: headingB[index].innerHTML, price: txt2[index].innerHTML});
    }
    console.log(obj2);
  })
})