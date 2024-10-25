const openModalButton4 = document.querySelector("#projetos-box-matheus4");
const closeModalButton4 = document.querySelector("#fechar-modal4");
const modal4 = document.querySelector("#modal4");
const fade4 = document.querySelector("#fade4");

const toggleModal4 = () => {
  [modal4, fade4].forEach((el) => el.classList.toggle("hide4"));
};

[openModalButton4, closeModalButton4, fade4].forEach((el) => {
  el.addEventListener("click", () => toggleModal4());
});
