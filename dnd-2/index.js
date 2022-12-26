const DragArea = document.querySelector(".AppBody"),
  DragText = DragArea.querySelector("h3"),
  button = DragArea.querySelector("button"),
  input = DragArea.querySelector("input");
let Myfile;

button.addEventListener("click", function () {
  input.click();
});

input.addEventListener("change", function () {
  Myfile = this.files[0];
  DragArea.classList.add("active");
  ShowMe();
});

DragArea.addEventListener("dragover", (event) => {
  event.preventDefault();
  DragArea.classList.add("active");
  DragText.textContent = "Release to Upload File";
});

DragArea.addEventListener("dragleave", () => {
  DragArea.classList.remove("active");
  DragText.textContent = "Drag & Drop";
});

DragArea.addEventListener("drop", (event) => {
  event.preventDefault();
  Myfile = event.dataTransfer.files[0];
  ShowMe();
});

function ShowMe() {
  let filetype = Myfile.type;
  let VaildEx = ["image/jpeg", "image/jpg", "image/png"];

  if (VaildEx.includes(filetype)) {
    let fileReader = new FileReader();
    console.log(fileReader);
    fileReader.onload = () => {
      let imgUrl = fileReader.result;
      let img = `<img src="${imgUrl}" alt="">`;

      DragArea.innerHTML = img;
    };
    fileReader.readAsDataURL(Myfile);
  } else {
    alert("Please upload an image file");
    DragArea.classList.remove("active");
    DragText.textContent = "Drage & Drop";
  }
}
