class Zodiac {
    constructor(id){
         this.id = id;
        // this.name = name;
        // this.comment = comment;
        this.adapter = new ZodiacsAdapter()
        this.fetchAndLoadZodiacs()        
        this.main = document.querySelector('main') 
    }

    fetchAndLoadZodiacs(){
        this.adapter.getZodiacs().then(json => this.renderZodiacs(json))
        //  this.adapter.getZodiacs().then(json => json.data.forEach(zodiacs => this.renderZodiacs(zodiacs)))
        // .then(json => json.data.forEach(zodiac => this.renderZodiacs(zodiac)))
    }

    renderZodiacs = (zodiacHash) => {
           zodiacHash.forEach(zodiac => {
            const p = document.createElement('p')
                p.textContent = `${zodiac.attributes.name}`
            const input = document.createElement('input')
                input.id = zodiac.id
            const button = document.createElement('button')
                button.innerHTML = 'Add Behavior Here'
                button.onclick = function(){ 
                    let id = this.parentElement.dataset.id
                    let value = document.getElementById(id).value
                    // Comment.funTest()
                    // debugger
                    let comment = new Comment(value, id, zodiac.id)
                    comment.addComments()
                    console.log(this)
                    // console.log(document.getElementById(this.parentElement.dataset.id).value)
                }
            
                // button.addEventListener('click', this.addComments)
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
           
            zodiac.attributes.comments.forEach(comment => {
                // debugger
                let newComment = new Comment(comment.post, comment.id, zodiac.id)
                newComment.loadComments(ul) //added comment
            })
           })

    }
       
}