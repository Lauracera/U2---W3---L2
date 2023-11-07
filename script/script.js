window.addEventListener("DOMContentLoaded", () => {
  const saveBtn = document.getElementById("saveBtn");
  const resetBtn = document.getElementById("resetBtn");

  saveBtn.onclick = setSaveBtn;
  resetBtn.onclick = setResetBtn;
});

const loadData = () => {
  const dataInStorage = localStorage.getItem("save");
  const html = document.documentElement;

  if (dataInStorage) {
    html.classList.add("data");
  } else {
    html.classList.remove("data");
  }
};

const setSaveBtn = () => {
  localStorage.setItem("save", "data");

  loadData();
};

const setResetBtn = () => {
  localStorage.setItem("save");

  loadData();
};
