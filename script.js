async function fetchData() {
  const data = await fetch("./data.json");
  const res = await data.json();
  const graphContainer = document.getElementById("graph-container");
  let maxAmount = 0;

  // Get the max number
  for (let i = 0; i < res.length; i++) {
    if (res[i].amount > maxAmount) {
      maxAmount = res[i].amount;
    }
  }

  for (let i = 0; i < res.length; i++) {
    const bar = document.createElement("div");
    const day = document.createElement("div");
    day.textContent = res[i].day;
    bar.classList.add("bar");
    day.classList.add("day");
    if(res[i].amount === maxAmount) bar.classList.add("blue");
    bar.style.height = `${(res[i].amount / maxAmount) * 100}%`;
    bar.appendChild(day);
    graphContainer.appendChild(bar);
  }
}
fetchData();
