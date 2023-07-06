let lessonName = document.getElementById("exampleFormControlInput10");
let lessonNumber = document.getElementById("exampleFormControlInput11");
let listOfnodes = document.getElementById("exampleFormControlInput12");
let addlessonbtn = document.getElementById("addlessonbtn");
let addExistlessonbtn1 = document.getElementById("addExistlessonbtn1");
let msg = document.getElementById("msg");
let deletelessonbtn1 = document.getElementById("deletelessonbtn1");

function addnode(){
    var selected = [];
    for (var option of listOfnodes.options)
    {
        if (option.selected) {
            selected.push(option.value);
        }
    }
    return selected;
}


addlessonbtn.addEventListener("click", async function () {

  let lessonObject ={
    lessonName :lessonName.value,
    lessonNumber :Number(lessonNumber.value) ,
    nodes : addnode()
  }
//   console.log(lessonObject);
 await AddLesson(lessonObject)
  })

  addExistlessonbtn1.addEventListener("click", async function () {

    let lessonObject ={
      lessonName :lessonName.value,
      lessonNumber :Number(lessonNumber.value) ,
      nodes : addnode()
    }

  addNodeInExistLesson(lessonObject)
    })
  async function AddLesson(lessonObject) {
  
    const response = await fetch(`http://localhost:5000/lesson/addlesson`, {
      method: 'POST',
      body: JSON.stringify(lessonObject),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const json =await response.json()
        msg.innerHTML = json.message 
  }

  async function addNodeInExistLesson(lessonObject){
    let newobj = {
        nodes : lessonObject.nodes
    }
    const response = await fetch(`http://localhost:5000/lesson/addnodes/${lessonObject.lessonName}`, {
        method: 'PATCH',
        body: JSON.stringify(newobj),
        headers: {
          "Content-Type": "application/json",
        },
      })
      const json = await response.json()
      msg.innerHTML = json.message 
  }


  deletelessonbtn1.addEventListener("click", async function () {
   
  let lessonObject ={
    lessonName :lessonName.value,
    lessonNumber :Number(lessonNumber.value) ,
    NodeName : addnode()  
  }

  console.log(lessonObject); 
 await deleteNodesInlesson(lessonObject)

})


async function deleteNodesInlesson(lessonObject) {
  for (let index = 0; index < lessonObject.NodeName.length; index++) { 
    let nodeobj = {
      NodeName : lessonObject.NodeName[index]
    }
    const response = await fetch(`http://localhost:5000/lesson/deletenodefromlesson/${lessonObject.lessonName}`, {
      method: 'PATCH',
      body: JSON.stringify(nodeobj),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const json =await response.json()
        msg.innerHTML = json.message 
  }
  
  }
  

    