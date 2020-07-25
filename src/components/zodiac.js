let main = document.querySelector('main') // removed from constuctor.

class Zodiac {
    constructor(id, name){
        this.id = id
        this.name = name       
    }

    renderZodiacs(){
        // debugger
        const div = document.createElement('div')
            div.setAttribute("class", "divCard")
            div.setAttribute("data-id", this.id)
        const ul = document.createElement('ul')
            ul.setAttribute('id', this.id)
        const p = document.createElement("p")
            p.textContent = `${this.name}`
        const input = document.createElement("input")
            input.setAttribute("class", "innerInput")
            input.setAttribute("data-id", this.id)
        const button = document.createElement("button")
            let zodId = this.id
            // debugger
            button.setAttribute("data-id", "btn-post")// not sure about this one<<
            button.innerText = "Add Behavior Here"
            button.onclick = function(e){ 
                e.preventDefault()       
                // let post = document.getElementById(zodiac.id).value // works the same as below.
                    // debugger
                let post = e.target.nextElementSibling.value // this gets comment post
                let id = e.target.nextElementSibling.id // this gets id of 1.                       
                let comment = new Comment(post ,zodId) //removed id to create a comment.
                    // debugger
                    comment.addComments()        
            }
            div.appendChild(p)
            div.appendChild(button)
            div.appendChild(input)
            div.appendChild(ul) 
            div.setAttribute('class', 'card')
            div.setAttribute('data-id', this.id)
            main.append(div)
            debugger
            
            // below doesn't have a such thing as zodiac attributes comments
            
            // let newComment = new Comment(id, post, this.id)
            //     newComment.loadComments()

            // zodiac.attributes.comments.forEach(comment => {
            //     let newComment = new Comment(comment.id, comment.post, zodiac.id)
            //         newComment.loadComments()
            // })
    } 


    // fetchAndLoadZodiacs(){
    //     this.adapter.getZodiacs().then(json => this.renderZodiacs(json))
    // }
   
    // renderZodiacs = (zodiacHash) => {
    //     zodiacHash.forEach(zodiac => {
    //         const div = document.createElement('div')
    //         const ul = document.createElement('ul')
    //             ul.setAttribute('id',`zodiac-id-${zodiac.id}`)
    //             // debugger
    //         const p = document.createElement('p')
    //             p.textContent = `${zodiac.attributes.name}`
    //         const input = document.createElement('input')
    //             input.className = "inside"
    //             input.id = zodiac.id
    //         const button = document.createElement('button')
    //             button.setAttribute("id", "btn-post")
    //             button.innerText = 'Add Behavior Here'    
    //             button.onclick = function(e){ 
    //                 e.preventDefault()       
    //             // let post = document.getElementById(zodiac.id).value // works the same as below.
    //                     // debugger
    //         let post = e.target.nextElementSibling.value // this gets comment post
    //         let id = e.target.nextElementSibling.id // this gets id of 1.                       
    //         let comment = new Comment(id, post ,zodiac.id) //removed id and post
    //                     debugger
    //         comment.addComments()        
    //             }
    //             div.appendChild(p)
    //             div.appendChild(button)
    //             div.appendChild(input)
    //             div.appendChild(ul) 
    //             div.setAttribute('class', 'card')
    //             div.setAttribute('data-id', zodiac.id)
    //         this.main.append(div)
            
    //         zodiac.attributes.comments.forEach(comment => {
    //             let newComment = new Comment(comment.id, comment.post, zodiac.id)
    //             newComment.loadComments()
    //         })
    //     })

    // }
       
}