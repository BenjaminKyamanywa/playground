// call browser window onload funtion
window.onload = () => {
  const container = document.getElementById("container");
  const createLabel = () => {
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = name;
    container.appendChild(label);
  }
}