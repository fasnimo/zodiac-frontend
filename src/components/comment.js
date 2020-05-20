class Comment {
    constructor(post, id, zodiac_id){
         this.id = id;
        this.post = post;
        this.zodiac_id = zodiac_id;
        this.baseURL = `http://localhost:3000/zodiacs/${zodiac_id}/comments`;        
    }
    // called in Zodiac.js to Post fetch for loadComments.
    addComments(ul) {
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
         .then(json => { // beta
            this.makeComment(json, ul) 
        })
        //  .then(json => {
        //     this.loadComments(json)
        // })
        // .then(setTimeout("location.reload(true)", 100))
        .catch(error => console.log("Error: " + error))       
    }

    makeComment = (data, ul) => { // beta
        //  debugger
        // const ul = document.querySelector('ul')//.parentElement.dataset.id
        // debugger
        const li = document.createElement('li')
        // debugger
            li.innerText = `${data.data.attributes.post}`
            //debugger
        const button = document.createElement('button')
            button.setAttribute('class', 'remove')
            button.setAttribute('data-comment-id', this.id)
            button.innerText = 'Remove' 
            button.addEventListener('click', function(e){
                const url = `http://localhost:3000/zodiacs/${e.target.parentElement.parentElement.parentElement.dataset.id}/comments/${e.target.dataset.commentId}`
                //  zodiac id: e.target.parentElement.parentElement.parentElement.dataset.id
                //  comment id: e.target.dataset.commentId  
                const reqObj = {
                      method: "DELETE",
                      headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",   
                      }
                    };
                  return fetch(url, reqObj)
                  .then(res => res.json())
                  .then(info => e.target.parentElement.remove(info)) // selected li to remove
                  .catch(error => console.log(error)) 
            })   
            // li.innerText = `${this.post}`
        li.appendChild(button)
        ul.appendChild(li)
        // debugger
       data.appendChild(ul)
    //    debugger
    }

     // called by addComments to load and delete comments made
    loadComments = (list) => {
        const li = document.createElement('li')
        const button = document.createElement('button')
        
        li.innerText = `${this.post}`
        button.setAttribute('class', 'remove')
        button.setAttribute('data-comment-id', this.id)
        button.innerText = 'Remove'
        button.addEventListener('click', function(e){
            const url = `http://localhost:3000/zodiacs/${e.target.parentElement.parentElement.parentElement.dataset.id}/comments/${e.target.dataset.commentId}`
            //  zodiac id: e.target.parentElement.parentElement.parentElement.dataset.id
            //  comment id: e.target.dataset.commentId  
            const reqObj = {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",   
                  }
                };
              return fetch(url, reqObj)
              .then(res => res.json())
              .then(info => e.target.parentElement.remove(info)) // selected li to remove
              .catch(error => console.log(error)) 
        })
        // list.appendChild(button) // beta
        li.appendChild(button)
        list.appendChild(li)
    }
}
