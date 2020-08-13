class Comment {
    constructor(id, post, zodiac_id){
        this.id = id;
        this.post = post;
        this.zodiac_id = zodiac_id;
    }
    static addComment(){
        let url = `http://localhost:3000/zodiacs/${event.target.dataset.id}/comments`
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({post: event.target.nextElementSibling.value, zodiac_id: event.target.dataset.id}) 
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
        let button = document.createElement('button')
            button.setAttribute('class', 'remove')
            button.setAttribute("data-id", this.id) 
            button.innerText = 'Remove' 
            button.onclick = this.deleteBtn
            li.appendChild(button)
            ul.appendChild(li)         
    }
    deleteBtn(){
        let url = `http://localhost:3000/zodiacs/${event.target.parentElement.parentElement.id}/comments/${event.target.dataset.id}`
        const configObj = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",   
            }
          };
         fetch(url, configObj)
         event.target.parentElement.remove()
    }
}


    