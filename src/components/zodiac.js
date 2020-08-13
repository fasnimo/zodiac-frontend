class Zodiac {
    static sortAll = []

    constructor(id, name){
        this.id = id
        this.name = name   
        Zodiac.sortAll.push(this)    // put debugger here.
    }
    
    
    static sortName(){
        let main = document.querySelector("main")
            main.innerHTML = ""
        Zodiac.sortAll.sort((a, b) => {
            let aB = a.name
            let bC = b.name
            if(aB < bC){
                return -1
            } else if(aB > bC){
                return 1
            }
        })
        Zodiac.sortAll.forEach(obj => {
            obj.renderZodiac()
        })
    }
    renderZodiac(){ 
        let main = document.querySelector('main')
        const div = document.createElement('div')
            div.setAttribute("class", "card")
            div.setAttribute("data-id", this.id)
        const ul = document.createElement('ul')
            ul.setAttribute('id', this.id)
        const p = document.createElement("p")
            p.textContent = `${this.name.toUpperCase()}` 
        const input = document.createElement("input")
            input.setAttribute("class", "innerInput")
            input.setAttribute("data-id", this.id)
        const button = document.createElement("button")
            button.setAttribute("data-id", this.id) 
            button.setAttribute("class", "add-btn")
            button.innerText = "Enter Behavior"
            button.onclick = this.addBtn             
            div.appendChild(p)
            div.appendChild(button)
            div.appendChild(input)
            div.appendChild(ul) 
            main.append(div)
    }  
    addBtn(){
        Comment.addComment() 
        let input = event.target.nextElementSibling
            input.value = " " 
           
    }
}


  
