function toggleMenu() {
  const navList = document.querySelector("#navbar ul");
  navList.classList.toggle("show");
}

function submitForm(event) {
  event.preventDefault();
  alert("✅ Message sent successfully!");
}
