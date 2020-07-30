class Comment {
    //removed id
    constructor(id, post, zodiac_id){
        this.id = id;
        this.post = post;
        this.zodiac_id = zodiac_id;
    }
    //removed static D2
    addComment(){
        debugger 
        // let zodiacId = parseInt(event.target.dataset.id) // D2 //removed this.zodiac_id
        let url = `http://localhost:3000/zodiacs/${this.zodiac_id}/comments`
        debugger
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({post: this.post, zodiac_id: this.zodiac_id}) // this.id may or may not serve a purpose. // removed this.zodiac_id
        }
        fetch(url, configObj)
         .then(res => res.json())
         .then(json => { 
            //  debugger 
                let c = new Comment(json.id, json.post, json.zodiac_id) //why does the id work here?
                c.loadComment()
         })
         .catch(error => console.log("Error: " + error))       
    }
     //removed data
    // makeComment(){    
    //     // data.preventDefault() //should probably delete
    //     debugger
    //     const ul = document.getElementById(this.zodiac_id)
    //     const li = document.createElement('li')
    //         li.innerText = `${this.post}`
    //     // let editBtn = document.createElement('button')
    //     //     editBtn.setAttribute('class', 'edit')
    //     //     // debugger
    //     //     editBtn.setAttribute("data-id", data.id) // need id of comment
    //     //     editBtn.innerText = 'Edit' 
    //     //     editBtn.addEventListener("click", this.editThis)
    //         // debugger
    //     let button = document.createElement('button')
    //         button.setAttribute('class', 'remove')
    //         button.setAttribute("data-id", this.id) // need id of comment
    //         button.innerText = 'Remove'   
    //         button.addEventListener("click", this.deleteBtn)
    //     debugger   
    //         li.appendChild(button)
    //         // li.appendChild(editBtn)
    //         ul.appendChild(li)
    // }

  // previous function
  // removed data from params 
   loadComment(){
        debugger
        // data.forEach(post => {
            debugger
        const ul = document.getElementById(`${this.zodiac_id}`)
        // debugger
        const li = document.createElement('li')
            li.innerText = `${this.post}`
        // let editBtn = document.createElement('button')
        //     editBtn.setAttribute('class', 'edit')
        //     // debugger
        //     editBtn.setAttribute("data-id", post.id) 
        //     editBtn.innerText = 'Edit' 
        //     editBtn.addEventListener("click", this.editThis)
        let button = document.createElement('button')
            button.setAttribute('class', 'remove')
            // debugger
            button.setAttribute("data-id", this.id) 
            button.innerText = 'Remove' 
            button.addEventListener("click", this.deleteBtn)
        // debugger
            li.appendChild(button)
            // li.appendChild(editBtn)
            ul.appendChild(li) 
        // })
        
    }
 
    // editThis(e){
    //     e.preventDefault()
    //     let url = `http://localhost:3000/zodiacs/${e.target.parentElement.parentElement.id}/comments/${e.target.dataset.id}`
    //     debugger
    //     const configObj = {
    //         method: "PATCH",
    //         headers:{
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify({post: this.post, zodiac_id: this.zodiac_id}) 
    //     }
    //         fetch(url, configObj)
                    //// might need these .then
    //             // .then(response => response.json())
    //             // .then(json => console.log(json))
    //         debugger
    //         let input = document.querySelector(`input[data-id="${e.target.parentElement.parentElement.id}"]`).value
    //         let previouseText = e.target.parentElement.innerText.split(/\n/)[0] // need a way to target the one text and not the buttons too.
    //         debugger
    //             previouseText = input
    //         debugger

    // }

    deleteBtn(e){
        e.preventDefault()
        // debugger
        let url = `http://localhost:3000/zodiacs/${e.target.parentElement.parentElement.id}/comments/${e.target.dataset.id}`
        const configObj = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",   
            }
          };
         fetch(url, configObj)
         e.target.parentElement.remove()
    }
}


    