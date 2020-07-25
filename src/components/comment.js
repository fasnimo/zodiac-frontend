class Comment {
    //removed id
    constructor(post, zodiac_id){
        // this.id = id;
        this.post = post;
        this.zodiac_id = zodiac_id;
    }

    addComments(){ 
        let url = `http://localhost:3000/zodiacs/${this.zodiac_id}/comments`
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({id: this.id, post: this.post, zodiac_id: this.zodiac_id}) // this.id may or may not serve a purpose.
        }
        return fetch(url, configObj)
         .then(res => res.json())
         .then(json => {  
            this.makeComment(json)
         })
         .catch(error => console.log("Error: " + error))       
    }
     
    makeComment(data){    
        // data.preventDefault()  
        // debugger
        const ul = document.getElementById(this.zodiac_id)
        const li = document.createElement('li')
            li.innerText = `${this.post}`
        // let editBtn = document.createElement('button')
        //     editBtn.setAttribute('class', 'edit')
        //     // debugger
        //     editBtn.setAttribute("data-id", data.id) // need id of comment
        //     editBtn.innerText = 'Edit' 
        //     editBtn.addEventListener("click", this.editThis)
            // debugger
        let button = document.createElement('button')
            button.setAttribute('class', 'remove')
            button.setAttribute("data-id", data.id) // need id of comment
            button.innerText = 'Remove'   
            button.addEventListener("click", this.deleteBtn)
        // debugger   
            li.appendChild(button)
            // li.appendChild(editBtn)
            ul.appendChild(li)
    }

  // when loaded ul is null
  // data comes from index.js
    loadComments(data){
        // debugger
        data.forEach(post => {
            // debugger
        const ul = document.getElementById(`${post.zodiac_id}`)
        // debugger
        const li = document.createElement('li')
            li.innerText = `${post.post}`
        // let editBtn = document.createElement('button')
        //     editBtn.setAttribute('class', 'edit')
        //     // debugger
        //     editBtn.setAttribute("data-id", post.id) 
        //     editBtn.innerText = 'Edit' 
        //     editBtn.addEventListener("click", this.editThis)
        let button = document.createElement('button')
            button.setAttribute('class', 'remove')
            // debugger
            button.setAttribute("data-id", post.id) 
            button.innerText = 'Remove' 
            button.addEventListener("click", this.deleteBtn)
        // debugger
            li.appendChild(button)
            // li.appendChild(editBtn)
            ul.appendChild(li) 
        })
        
    }

    // editThis(e){
    //     debugger
    //     e.preventDefault()
    //     let url = `http://localhost:3000/zodiacs/${e.target.parentElement.parentElement.id}/comments/${e.target.dataset.id}`
    //     const configObj = {
    //         method: "PATCH",
    //         headers:{
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify({id: this.id, post: this.post, zodiac_id: this.zodiac_id}) 
    //     }
    //         fetch(url, configObj)
    //         let previouseText = e.target.parentElement.innerText // need a way to target the one text and not the buttons too.
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
