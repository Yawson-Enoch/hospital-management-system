let userImg = document.querySelector(".user-img");

let userProfile = document.querySelector(".user-profile");

let arrow = document.querySelector(".arrow");

userImg.addEventListener("click", () => {
  arrow.classList.toggle("active");
  userProfile.classList.toggle("active");
});

// dashboard toggle

let bars = document.querySelector(".fa-bars");

let dashboard = document.querySelector(".dashboard");

let times = document.querySelector(".fa-times");

bars.addEventListener("click", () => {
  dashboard.classList.add("active");
});

times.addEventListener("click", () => {
  dashboard.classList.remove("active");
});
