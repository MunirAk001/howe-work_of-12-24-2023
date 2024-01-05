import {
  potusre,
  DeleteUser,
  editUser,
  complet,
  FunctionUsersort,
} from "./api.js";

let newadd = document.querySelector(".newadd");
let SortFunction = document.querySelector(".SortFunction");

let form = document.querySelector(".form");
let box = document.querySelector(".box");
let table = document.querySelector(".table");
let addShow = document.querySelector(".addShow");
let Close_addShow = document.querySelector(".Close_addShow");

//
let opneEDItdialog = document.querySelector(".opneEDItdialog");
let editBTN = document.querySelector(".editBTN");
let deleteBTN = document.querySelector(".deleteBTN");
let Close_EDIt_dialog = document.querySelector(".Close_EDIt_dialog");
let StatusBtn = document.querySelector(".StatusBtn");
let slecte = document.querySelector(".slecte");
let prevSlide2 = document.querySelector(".prevSlide");

// let nextSlide = document.querySelector("#nextSlide");
let imgee = document.querySelector(".imgee");

const sliderDIV = document.querySelector(".slides-container");

const sleder_name = document.querySelector(".sleder_name");
const slidesH3 = document.querySelector(".slidesH3");
// const imgdiv = document.querySelector(".imgdiv");
// sleder
function gg() {
  let currentPosition = 2;
  let currentPosition2 = 0;

  

  function moveSlides(num) {
    currentPosition += num;
    //  slides.style.transition = "";
    sliderDIV.style.transform = `translateX(${currentPosition}px)`;
  }


  function moveSlides2(numD) {
    currentPosition2 += numD;
    //  slides.style.transition = "";
    sleder_name.style.transform = `translateX(${currentPosition2}px)`;
  }


  // nextSlide.onclick = () ={
    
  // }



  document.getElementById("prevSlide").addEventListener("click", () => {
    sliderDIV.style.transition = "transform  0.5s  ease-in-out";
    sleder_name.style.transition = "transform  0.5s  ease-in-out";

    moveSlides(400); 
    moveSlides2(400); 
  });



  document.getElementById("nextSlide").addEventListener("click", () => {
    sliderDIV.style.transition = "transform  0.5s  ease-in-out";
    sleder_name.style.transition = "transform  0.5s  ease-in-out";

    moveSlides(-400); // Move 200px to the right
    moveSlides2(-400); // Move 200px to the right
  });

  //  updateSlides();
}
gg();

let idx = null;

let now = new Date();
let gulpatmo = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;

newadd.onclick = () => {
  addShow.showModal();
};
Close_addShow.onclick = () => {
  addShow.close();
};

function get(data) {
  table.innerHTML = "";
  data.forEach((el) => {


  

    let p = document.createElement("p");

    let imgdiv = document.createElement("div");
    
    let img33 = document.createElement("img");
    img33.src = el.img;
    let sleder_title = document.createElement("p");
    sleder_title.innerHTML= el.title
    sleder_title.className = "sleder_title";
    
    
    p.innerHTML = el.info;
    // slidesH3.appendChild(sleder_title);

    // sleder_name.appendChild(p);

    let img = document.createElement("img");
    img.src = el.img;
    img.className = "imgclass";
    ///--------------------------------------------
    imgdiv.appendChild(img33);
  imgdiv.className = "imgdiv";
    // sliderDIV.appendChild(imgdiv);

    let div = document.createElement("tr");
    div.className = "tr";
    // let h1 = document.createElement("td");
    let h1 = document.createElement("td");
    h1.innerHTML = el.title;
    h1.className = "title";

    // Sort Button
    //     SortTitle.onclick = () => {

    //       SortUser()
    // }

    SortFunction.onclick = () => {
      FunctionUsersort(el.katagory);
    };

    // let chekbox = document.createElement("input")

    let katagory = document.createElement("h3");
    katagory.innerHTML = el.katagory;

    let katagory_leval = document.createElement("td");
    katagory_leval.className = " katagory_leval";

    let leval = document.createElement("h3");
    leval.innerHTML = el.leval;
    leval.className = " emli";

    let status = document.createElement("td");
    status.className = "status";
    status.innerHTML = el.status;

    let statush4 = document.createElement("h4");

    statush4.className = "statush4";

    let Employed = document.createElement("td");
    Employed.innerHTML = el.Employed;
    Employed.className = " emli";

    let emli = document.createElement("td");
    emli.innerHTML = el.emli;
    emli.className = " emli";

    // Delet BUTTON
    // let deletBTN = document.createElement("img");

    // deletBTN.src = "/DETLT.png";
    // deletBTN.className = "Editimge";
    // deletBTN.className = "Edit";

    // deletBTN.onclick = () => {
    // }
    deleteBTN.onclick = () => {
      DeleteUser(idx);
    };
    //  delete
    // Emd of Delete BUTTON
    let EditBTNTD = document.createElement("td");

    let EditBTN = document.createElement("img");
    EditBTN.src = "/OIP.jpg";
    EditBTN.className = "Editimge";
    EditBTN.onclick = () => {
      idx = el.id;

      opneEDItdialog.showModal();
    };

    Close_EDIt_dialog.onclick = () => {
      opneEDItdialog.close();
    };
    editBTN.onclick = () => {
      edit(el);
    };

    StatusBtn.type = "checkbox";
    StatusBtn.checked = el.status;
    StatusBtn.onclick = () => {
      el.status = !el.status;
      complet(el.id, el);
    };
    if (el.status) {
      status.innerHTML = "active";
      status.className = "active";
    } else {
      status.innerHTML = "unactive";
      status.className = "unactive";
    }

    let img2 = document.createElement("img");
    img2.src = el.img;
    img2.className = "imgclass2";

    let img_title = document.createElement("td");

    img_title.className = "img_title";

    img_title.append(img, h1);
    h1.append(emli);
    katagory_leval.append(katagory, leval);
    statush4.appendChild(status);
    table.appendChild(div);
    EditBTNTD.append(EditBTN);

    div.append(
      img_title,
      katagory_leval,
      statush4,
      Employed,
      // deletBTN,
      EditBTNTD
    );

    // iinfoDiv.append(infoTr,img2);

    box.appendChild(table);
  });
}

form.onchange = (ev) => {
  let file = ev.target.files[0];
  let read = new FileReader();
  read.readAsDataURL(file);
  form.onsubmit = (e) => {
    e.preventDefault();

    let obj = {
      Employed: gulpatmo,
      title: form["text"].value,
      status: false,
      // Employed: form["addEmployed"].value,
      emli: form["inpemil"].value,
      leval: form["addleval"].value,
      katagory: form["addkatagory"].value,
      info: form["addifo"].value,
      img: read.result,
    };

    potusre(obj);
    form.reset();
  };
};

// edit
let editModal = document.querySelector(".showEdit");
let formEdit = document.querySelector(".formEdit");
let Close_showEdit = document.querySelector(".Close_showEdit");
Close_showEdit.onclick = () => {
  editModal.close();
};

function edit(el) {
  editModal.showModal();

  //   showEdit.showModal();
  formEdit["inpEdit"].value = el.title;
  formEdit["imgEdit"].src = el.img;
  formEdit["inpstatus"].value = el.status;
  formEdit["inpemil"].value = el.emli;
  formEdit["inp_katagory"].value = el.katagory;
  formEdit["inp_leval"].value = el.leval;

  formEdit["imgEdit"].onchange = (ev) => {
    let file = ev.target.files[0];
    let read = new FileReader();
    read.readAsDataURL(file);
    formEdit.onsubmit = (e) => {
      e.preventDefault();
      let user = {
        Employed: gulpatmo,
        title: formEdit["inpEdit"].value,
        img: formEdit["imgEdit"].value,
        emli: formEdit["inpemil"].value,
        katagory: formEdit["inp_katagory"].value,
        leval: formEdit["inp_leval"].value,
        status: formEdit["inpstatus"].value,
        img: read.result,
      };

      editUser(idx, user);
    };
  };
}

export { get };
