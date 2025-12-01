// Generate day boxes
export function generateDayBoxes() {
  const grid = document.getElementById("adventGrid");

  for (let day = 1; day <= 24; day++) {
    const rotation = (((day * 7) % 5) - 2) * 0.5;
    const dayBox = createDayBox(day, rotation);
    grid.appendChild(dayBox);
  }
}

// Create individual day box
function createDayBox(day, rotation) {
  const button = document.createElement("button");
  button.className = "day-box";
  button.style.transform = `rotate(${rotation}deg)`;
  button.setAttribute("data-day", day);
  button.addEventListener("click", () => handleDayClick(day));

  // Create SVG for sketchy border
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "day-box-svg");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.setAttribute("preserveAspectRatio", "none");

  // Main box path with hand-drawn effect
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const d = `
          M 2 ${2 + (day % 3)} 
          L ${98 + (day % 2)} 3 
          L ${97 - (day % 2)} ${97 + (day % 3)} 
          L ${3 - (day % 2)} 98 
          Z
      `;
  path.setAttribute("d", d);
  path.setAttribute("class", "day-box-path");
  svg.appendChild(path);

  // Day number
  const numberDiv = document.createElement("div");
  numberDiv.className = "day-number";
  numberDiv.textContent = day;

  // Corner marks (will be added if not opened)
  const topLeftCorner = document.createElement("div");
  topLeftCorner.className = "corner-mark top-left";

  const bottomRightCorner = document.createElement("div");
  bottomRightCorner.className = "corner-mark bottom-right";

  button.appendChild(svg);
  button.appendChild(numberDiv);
  button.appendChild(topLeftCorner);
  button.appendChild(bottomRightCorner);

  return button;
}
