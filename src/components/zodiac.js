class Zodiac {
    constructor(id){
        this.id = id
        this.adapter = new ZodiacsAdapter()
        this.fetchAndLoadZodiacs()        
        this.main = document.querySelector('main') 
    }

    fetchAndLoadZodiacs(){
        this.adapter.getZodiacs().then(json => this.renderZodiacs(json))
    }
   
    renderZodiacs = (zodiacHash) => {
        zodiacHash.forEach(zodiac => {
            const div = document.createElement('div')
            const ul = document.createElement('ul')
                ul.setAttribute('id',`zodiac-id-${zodiac.id}`)
            const p = document.createElement('p')
                p.textContent = `${zodiac.attributes.name}`
            const input = document.createElement('input')
                input.id = zodiac.id
            const button = document.createElement('button')
                button.innerText = 'Add Behavior Here'
                button.onclick = function(){ 
                        // debugger
                        let id = this.parentElement.dataset.id // this only gets the zodiac's id.
                        // zodiac.attributes.comments.forEach(comment => ) //lets me see the current ids.
                        let post = document.getElementById(id).value // works the same as below.
                        // let post = document.querySelector('input').value //may delete
                        // debugger
                        // let commentId = zodiac.attributes.comments.find(comment => comment).id + 1 // gets the ids of existing comments not new ones.
                        let ids = zodiac.attributes.comments.forEach(comment => comment.id)
                        // debugger
                        let comment = new Comment(ids, post, zodiac.id) //removed id
                        debugger
                        comment.addComments()
                }
                // button.onclick = function(){ 
                //     // debugger
                //     let id = this.parentElement.dataset.id
                //     // debugger
                //     let value = document.getElementById(id).value

                //     let comment = new Comment(value, zodiac.id) //removed id
                //     debugger
                //     comment.addComments()
                // }
                div.appendChild(p)
                div.appendChild(button)
                div.appendChild(input)
                div.appendChild(ul) 
                div.setAttribute('class', 'card')
                div.setAttribute('data-id', zodiac.id)
            this.main.append(div)
            
            zodiac.attributes.comments.forEach(comment => {
                let newComment = new Comment(comment.id, comment.post, zodiac.id)
                newComment.loadComments()
            })
        })

    }
       
}