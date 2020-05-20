class Zodiac {
    constructor(id){
         this.id = id;
        this.adapter = new ZodiacsAdapter()
        this.fetchAndLoadZodiacs()        
        this.main = document.querySelector('main') 
    }
    // Adapter fetch used to call on renderZodiacs at init
    fetchAndLoadZodiacs(){
        this.adapter.getZodiacs().then(json => this.renderZodiacs(json))
    }
    // called by fetchAndLoadZodiacs to render block
    renderZodiacs = (zodiacHash) => {
           zodiacHash.forEach(zodiac => {
            const p = document.createElement('p')
                p.textContent = `${zodiac.attributes.name}`
            const input = document.createElement('input')
                input.id = zodiac.id
            const button = document.createElement('button')
                button.innerText = 'Add Behavior Here'
                button.onclick = function(){ 
                    let id = this.parentElement.dataset.id
                    let value = document.getElementById(id).value

                    let comment = new Comment(value, id, zodiac.id)
                    comment.addComments(ul)
                    console.log(this)
                    //^^/ CALLS ON: addComment fetch from Comment.Js
                    // To find value and id: console.log(document.getElementById(this.parentElement.dataset.id).value)
                }

            const ul = document.createElement('ul')
            const div = document.createElement('div')
                div.appendChild(p)
                div.appendChild(button)
                div.appendChild(input)
                div.appendChild(ul) 
                div.setAttribute('class', 'card')
                div.setAttribute('data-id', zodiac.id)
            this.main.append(div)
            
            console.log(zodiac);
           // calls on loadComment in Comment.Js for existing comments
            zodiac.attributes.comments.forEach(comment => {
                let newComment = new Comment(comment.post, comment.id, zodiac.id)
                // newComment.loadComments(ul)
                newComment.loadComments(ul) // beta
            })
           })

    }
       
}