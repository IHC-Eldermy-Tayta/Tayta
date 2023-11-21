const inicio = document.querySelector("#inicio");
const servicios = document.querySelector("#services");
const contacto = document.querySelector("#contact");
const conoce_mas = document.querySelector("#conoce-mas");

const footerInicio = document.querySelector("#footer-inicio");
const footerServicios = document.querySelector("#footer-services");
const footerContacto = document.querySelector("#footer-contact");
const footerConoceMas = document.querySelector("#footer-conoce-mas");

inicio.addEventListener("click", (s) => {
  s.preventDefault();
  const sectionInicio = document.querySelector(".home-container");
  sectionInicio.scrollIntoView({ behavior: "smooth" });
});

servicios.addEventListener("click", (s) => {
  s.preventDefault();
  const sectionServicios = document.querySelector(".servicios");
  sectionServicios.scrollIntoView({ behavior: "smooth" });
});

contacto.addEventListener("click", (s) => {
  s.preventDefault();
  const sectionContacto = document.querySelector(".contacto");
  sectionContacto.scrollIntoView({ behavior: "smooth" });
});

conoce_mas.addEventListener("click", (s) => {
  s.preventDefault();
  const sectionConoce_mas = document.querySelector(".conoce-mas");
  sectionConoce_mas.scrollIntoView({ behavior: "smooth" });
});

footerInicio.addEventListener("click", (s) => {
  s.preventDefault();
  const sectionInicio = document.querySelector(".home-container");
  sectionInicio.scrollIntoView({ behavior: "smooth" });
});

footerServicios.addEventListener("click", (s) => {
  s.preventDefault();
  const sectionServicios = document.querySelector(".servicios");
  sectionServicios.scrollIntoView({ behavior: "smooth" });
});

footerContacto.addEventListener("click", (s) => {
  s.preventDefault();
  const sectionContacto = document.querySelector(".contacto");
  sectionContacto.scrollIntoView({ behavior: "smooth" });
});

footerConoceMas.addEventListener("click", (s) => {
  s.preventDefault();
  const sectionConoce_mas = document.querySelector(".conoce-mas");
  sectionConoce_mas.scrollIntoView({ behavior: "smooth" });
});
