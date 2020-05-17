class Comment {
    constructor(post, id, zodiac_id){
         this.id = id;
        this.post = post;
        this.zodiac_id = zodiac_id;
        this.baseURL = `http://localhost:3000/zodiacs/${zodiac_id}/comments`;        
    }
    // called in Zodiac.js to Post fetch for loadComments.
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
            
    }
     // called by addComments to load and delete comments made
    loadComments = (list) => {
        const li = document.createElement('li')
        const button = document.createElement('button')
        
        li.innerHTML = `${this.post}`
        button.setAttribute('class', 'remove')
        button.setAttribute('data-comment-id', this.id)
        button.innerHTML = 'Remove'
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
        li.appendChild(button)
        list.appendChild(li)
    }
}
