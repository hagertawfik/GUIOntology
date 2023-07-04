let lessonName = document.getElementById("exampleFormControlInput10");
let msgdeletelesson = document.getElementById("msgdeletelesson");
let deletelessonbtn = document.getElementById("deletelessonbtn");

deletelessonbtn.addEventListener("click", async function () {

    let lessonObject ={
      lessonName :lessonName.value,
    }
  //   console.log(lessonObject);
   await deletelesson(lessonObject)
    })

    async function deletelesson(lessonObject) {
  
        const response = await fetch(`http://localhost:5000/lesson/deletelesson/${lessonObject.lessonName}`, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
          },
        })
        const json =await response.json()
            // console.log(json);
            msgdeletelesson.innerHTML = json.message 
      }