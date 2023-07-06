let nodename = document.getElementById("exampleFormControlInput1");
let definition = document.getElementById("exampleFormControlInput2");
let example = document.getElementById("exampleFormControlInput3");
let charchteristic = document.getElementById("exampleFormControlInput4");
let parentname = document.getElementById("exampleFormControlInput5");
let domain = document.getElementById("exampleFormControlInput6");
let subDomain = document.getElementById("exampleFormControlInput7");
let concept = document.getElementById("exampleFormControlInput8");
let level = document.getElementById("exampleFormControlInput9");
let ourbtnAdd = document.getElementById("ourbtnAdd");
let ourbtnDelet = document.getElementById("ourbtnDelet");


ourbtnAdd.addEventListener("click", async function () {
  let nodeObject = {
    name : nodename.value,
    definition : definition.value,
    examples :[example.value],
    characteristics : [charchteristic.value],
    parentName :parentname.value,
    domain: domain.value,
    subDomain: subDomain.value,
    concept: concept.value,
    level :Number(level.value) 
  }

// await AddNode(nodeObject);
})

async function AddNode(nodeObject) {
  
  const response = await fetch(`http://localhost:5000/energy/addenergy`, {
    method: 'POST',
    body: JSON.stringify(nodeObject),
    headers: {
      "Content-Type": "application/json",
    },
  })
  const json = await response.json()
  document.getElementById('addDone').innerHTML = json.message
}
