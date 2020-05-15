class Comment {
    constructor(post, id, zodiac_id){
         this.id = id;
        this.post = post;
        this.zodiac_id = zodiac_id;
        this.baseURL = `http://localhost:3000/zodiacs/${zodiac_id}/comments`;
           
    }
    
    addComments() {
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({id: this.id, post: this.post, zodiac_id: this.zodiac_id})
        }
        return fetch(`${this.baseURL}`, configObj)
         .then(res => res.json())
         .then(json => {
            this.loadComments(json)
        })
        .then(setTimeout("location.reload(true)", 100))
        .catch(error => console.log("Error: " + error))
        //      if (json.message) {
        //        alert(json.message)
        //        } else {
        //        this.loadComments(json) //added list
        //       }   
        //   })
        //   .catch(error => console.log("Error: " + error))
        //   .then(location.reload())
          

        // try {
        // const response = await fetch(`${this.baseURL}`, configObj)
        //     const json = await response.json()
        //         if (json.message) {        //make < 6 if possible 
        //             alert(json.message)
        //         } else {
        //             this.loadComments(json) //added list
        //         }
        //         this.location.reload(true) // need to refactor this to work!
        // }catch(error){
        //         console.log("Error: " + error)
        //     }
        
    }

    // debugger
            // .then(res => res.json())
            // .then(json => {
            //     // json.data()
            //     if (json.message) {
            //         alert(json.message)
            //     } else {
            //         this.loadComments(json) //added list
            //     }   
    // })
            // .catch(error => console.log("Error: " + error))

 
                    //added json
    loadComments = (list) => {
        //  debugger
        // const list = document.querySelector(`div[data-id]='${comment.zodiac_id}'`)
        const li = document.createElement('li')
        const button = document.createElement('button')
        
        li.innerHTML = `${this.post}`
        button.setAttribute('class', 'remove')
        button.setAttribute('data-comment-id', this.id)
        button.innerHTML = 'Remove'
        button.addEventListener('click', function(e){
            debugger
              const url = `http://localhost:3000/zodiacs/${e.target.dataset.commentId}/comments`
              const reqObj = {
                  method: 'DELETE',
                  headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",   
                  }
                };
              return fetch(url, reqObj)
              .then(res => res.json())
              .then(json => e.target.parentElement.remove(json))
            //   e.target.parentElement.remove()
              // ${this.baseURL} // 'this' keyword was being called in the wrong scope
        })
        li.appendChild(button)
        list.appendChild(li)
    }
}
        
        // button.addEventListener('click', function(list) {
        //     debugger
        //     const configObj = {
        //         method: "DELETE",
        //         headers: {
        //             "Content-Type": "application/json",
        //             "Accept": "application/json",
        //     }
        // }

       
        //     return fetch(`${this.baseURL}/${this.target.dataset.commentId}`, configObj) // changed from list to this
        //         this.target.parentElement.remove() // changed form list to this
        //     // .then(res => res.json()) // might not need this and below
        //         // .then(json => {
        //         //      return json.remove(list)
        //         // })
        // })
       

        //   deleteComment = () => {
        //         const url = `${this.baseURL}/${list.target.dataset.commentId}`
        //         const reqObj = {method: 'DELETE'};
        //         fetch(url, reqObj)
        //         .then(li.remove())
        //     }
    //^^  // button.onclick = function(list) {
        // //     
        //     let comId = this.dataset.commentId
        // //     // let text = this.parentElement.textContent
        // //     //let value = this.classList.value
            
        // //     // let zod = new Comment(this.id, this.post, this.zodiac_id)
        // //     // zod.deleteComments(comId)
        // //  
        //     list.deleteComments()
        // }

    // async deleteComments(list, zodiac) {
    //     const res = await fetch(`${this.baseURL}`,list, zodiac,{
    //         method: "delete"
    //     })
    //     const json = await res.json()
    // }


    //  deleteComments = (list) => {
    //     const configObj = {
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json",
    //         }
    //     }
    //     return fetch(`${this.baseURL}`, list, configOjb)
    //         this.post.remove(list)
    //     }
    // }   
