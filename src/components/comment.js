class Comment {
    //removed id
    constructor(post, zodiac_id){
        // this.id = id;
        this.post = post;
        this.zodiac_id = zodiac_id;
    }

    addComment(){ 
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
        // data.preventDefault() //should probably delete
        debugger
        const ul = document.getElementById(data.zodiac_id)
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
        debugger   
            li.appendChild(button)
            // li.appendChild(editBtn)
            ul.appendChild(li)
    }

  // previous function 
  // data comes from index.js
    loadComment(data){
        debugger
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


// Revisit
// class Comment {
//     constructor(id, post, zodiac_id){
//         this.id = id;
//         this.post = post;
//         this.zodiac_id = zodiac_id;
//     }

//     static addComment(){
//         event.preventDefault()
//         let zodiacId = parseInt(event.target.dataset.id) // convert id string to number
//         debugger
//         let comment = document.querySelector(`input[data-id="${zodiacId}"]`).value  // input value
//         let url = `http://localhost:3000/zodiacs/${zodiacId}/comments`
//         const configObj = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json",
//             },
//             body: JSON.stringify({post: comment, zodiac_id: zodiacId}) // this.id may or may not serve a purpose.
//         }
//         fetch(url, configObj)
//         .then(res => res.json())
//         .then(comment => {
//             let c = new Comment(comment.id, comment.post, comment.zodiac_id) //why does the id work here?
//             debugger;
//                 c.loadComment()
//         })
//     }

//     loadComment(comment){
//         // let div = document.querySelector(`div[data-id="${this.zodiac_id}"]`)
//         // let ul = document.createElement("ul")
//             // ul.setAttribute("class", "commentUl")
//             // ul.setAttribute("id", this.zodiac_id)
//         let ul = document.getElementById(`${this.zodiac_id}`)
//         let li = document.createElement("li")
//             li.textContent = `${this.post}`
//         let dBtn = document.createElement("button")
//             dBtn.setAttribute("class", "remove")
//             dBtn.setAttribute("data-id", this.id)
//             dBtn.textContent = "Delete"
//             debugger
//             dBtn.addEventListener("click", Comment.deleteBtn)
//             debugger
//             li.appendChild(dBtn)
//             ul.appendChild(li)
           
//             //this stand alone
//             // debugger
//             // ul.innerHTML += 
//             //     `
//             //         <li>${this.post}</li><button class="remove" type="button" data-id=${this.id}> 
//             //             Delete
//             //         </button>
//             //     `
//             // let ul = document.querySelector(`ul[data-ul="${this.zodiac_id}"]`)
//             // let dBtn = document.querySelector(`button[data-id="${this.id}"]`) 
//             //     debugger 
//             //     dBtn.addEventListener("click", this.deleteBtn)
//             // debugger
            
//             //this is with first commented out lines of function
//             // div.appendChild(ul)
//     }

//     // could make this a static function.
//    static deleteBtn(event){
//        debugger
//         // event.preventDefault()
//         let zodiacId = Number.parseInt(event.target.parentElement.parentElement.id)
//         let url = `http://localhost:3000/zodiacs/${zodiacId}/comments/${event.target.dataset.id}`
//         debugger
//         const configObj = {
//             method: "DELETE",
//             headers: {
//               "Content-Type": "application/json",
//               "Accept": "application/json",   
//             }
//           };
//          fetch(url, configObj)
//          event.target.parentElement.remove()
//     }
// }        