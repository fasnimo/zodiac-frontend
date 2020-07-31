class Comment {
    constructor(id, post, zodiac_id){
        this.id = id;
        this.post = post;
        this.zodiac_id = zodiac_id;
    }
    static addComment(event){
        debugger
       // removed this.zodiac_id
        let url = `http://localhost:3000/zodiacs/${event.target.dataset.id}/comments`
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({post: event.target.nextElementSibling.value, zodiac_id: event.target.dataset.id}) // this.id may or may not serve a purpose. // removed this.id, this.post, this.zodiac_id
        }
        fetch(url, configObj)
         .then(res => res.json())
         .then(json => { 
                let c = new Comment(json.id, json.post, json.zodiac_id)
                c.loadComment()
         })
         .catch(error => console.log("Error: " + error))       
    }
    
   loadComment(){
        const ul = document.getElementById(`${this.zodiac_id}`)
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
            button.setAttribute("data-id", this.id) 
            button.innerText = 'Remove' 
            button.addEventListener("click", this.deleteBtn)
            li.appendChild(button)
            // li.appendChild(editBtn)
            ul.appendChild(li)         
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
        // e.preventDefault()
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


    