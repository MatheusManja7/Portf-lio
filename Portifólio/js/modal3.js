const openModalButton3 = document.querySelector("#projetos-box-matheus3");
const closeModalButton3 = document.querySelector("#fechar-modal3");
const modal3 = document.querySelector("#modal3");
const fade3 = document.querySelector("#fade3");

const toggleModal3 = () => {
  [modal3, fade3].forEach((el) => el.classList.toggle("hide3"));
};

[openModalButton3, closeModalButton3, fade3].forEach((el) => {
  el.addEventListener("click", () => toggleModal3());
});

