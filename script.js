const container = document.querySelector(".container");
const button =document.querySelector(".butt");
let dimensions;
let d;  
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
function createGridCell() {
  const cell = document.createElement("div");
  cell.classList.add("grid-cell");
  return cell;
}
function make_grid(val=16)
{
for (let i = 0; i < val; i++) {
  const row = document.createElement("div");
  row.classList.add("grid-row");
  row.style.display = "flex";

  for (let j = 0; j < val; j++) {
    const cell = createGridCell();
    row.appendChild(cell);
  }

  container.appendChild(row);
}}
make_grid(dimensions);
button.addEventListener("click",()=>
{
    let p=prompt("Enter new dimensions","16");
    if(p!=null)
        {
            dimensions=p;
            while (container.firstChild) {
                container.firstChild.remove()
            }
           make_grid(dimensions);
        }
})
const cells=document.querySelectorAll(".grid-cell");
cells.forEach(cell => {
    cell.addEventListener("mouseover",()=>
    {
        let rand_color=getRandomColor();
      cell.style.backgroundColor=rand_color;
    })
});
//changes