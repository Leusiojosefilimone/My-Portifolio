//const darkIcon = document.querySelector(".dark-icon")
const modeIcon = document.querySelector("#mode-icon");

modeIcon.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  console.log(modeIcon.src)
  if (document.body.classList == "dark") {
    modeIcon.src = "./images/light_mode.png "
    
  } else {
    modeIcon.src = "./images/dark_mode.png"
    lightIcon.textContent = "dark";
  }
});

const menuButton = document.querySelector(".menu_button");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("open");
});

let projects = [
  {
    title: "Insure landing page",
    link: "https://leusiojosefilimone.github.io/insure-landing-page/",
    description: "page challenged by frontend mentor",
    image: "../images/insure.jpg",
  },
];

const swiperWrapper = document.getElementById("3");
projects.forEach((project) => {
  const swiperSlide = document.createElement("div");
  swiperSlide.className = "swiper-slide";

  const projectInfoContainer = document.createElement("div");
  projectInfoContainer.className = "project-info";

  const projectLink = document.createElement("a");
  projectLink.className = "project-link";

  const projectImg = document.createElement("img");
  projectImg.className = "project-img";

  const projectDecription = document.createElement("p");
  projectDecription.className = "description";

  projectLink.textContent = project.title;
  projectLink.href = project.link;
  projectImg.src = project.image;
  projectDecription.textContent = project.description;

  projectInfoContainer.appendChild(projectLink);
  projectInfoContainer.appendChild(projectDecription);
  swiperSlide.appendChild(projectImg);
  swiperSlide.appendChild(projectInfoContainer);

  swiperWrapper.appendChild(swiperSlide);
});
