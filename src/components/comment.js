class Comment {
    constructor(id, post, zodiac_id){
        this.id = id;
        this.post = post;
        this.zodiac_id = zodiac_id;
        // this.baseURL = `http://localhost:3000/zodiacs/${zodiac_id}/comments`; 
        // this.btnURL = `http://localhost:3000/zodiacs/${zodiac_id}/comments/${this.id}`      
    }

    addComments() { 
        let url = `http://localhost:3000/zodiacs/${this.zodiac_id}/comments`
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({id: this.id, post: this.post, zodiac_id: this.zodiac_id})
        }
        // return fetch(`${this.baseURL}`, configObj)
        return fetch(url, configObj)
         .then(res => res.json())
         .then(this.makeComment())
         .catch(error => console.log("Error: " + error))       
    }

    makeComment = () => { 
        const ul = document.getElementById(`zodiac-id-${this.zodiac_id}`)
        const li = document.createElement('li')
            li.innerText = `${this.post}`
        const button = this.createBtn()     
            li.appendChild(button)
            ul.appendChild(li)
    }

    loadComments = () => {
        const ul = document.getElementById(`zodiac-id-${this.zodiac_id}`)
        const li = document.createElement('li')
            li.innerText = `${this.post}`
        const button = this.createBtn()
            li.appendChild(button)
            ul.appendChild(li) 
    }

    createBtn = () => {
        // let url = this.btnURL
        let url = `http://localhost:3000/zodiacs/${this.zodiac_id}/comments/${this.id}`
        let button = document.createElement('button')
            button.setAttribute('class', 'remove')
            button.setAttribute('data-btn', this.id) //changed from "data-btn-id" to "data-btn"
            debugger
            button.innerText = 'Remove' 
            
            button.addEventListener('click', function(e){        
                const configObj = {
                      method: "DELETE",
                      headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",   
                      }
                    };
                   fetch(url, configObj)
                    .then(res => res.json())
                    .then(info => e.target.parentElement.remove(info))
                    .catch(error => console.log(error)) 
            })   
            return button
    }
}
