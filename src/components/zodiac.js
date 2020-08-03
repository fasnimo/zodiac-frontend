// // let main = document.querySelector('main') //does main have to be here?

class Zodiac {
    constructor(id, name){
        this.id = id
        this.name = name       
    }

    renderZodiac(){
        let main = document.querySelector('main') // removed main from global.
        const div = document.createElement('div')
            div.setAttribute("class", "card")
            div.setAttribute("data-id", this.id)
        const ul = document.createElement('ul')
            ul.setAttribute('id', this.id)
        const p = document.createElement("p")
            p.textContent = `${this.name}`
        const input = document.createElement("input")
            input.setAttribute("class", "innerInput")
            input.setAttribute("data-id", this.id)
        const button = document.createElement("button")
            button.setAttribute("data-id", this.id) // this.id is the card id
            button.setAttribute("class", "add-btn")
            // debugger
            button.innerText = "Enter Behavior"
            // below put in serperate function.
            button.onclick = this.addBtn 
                // debugger
                // function(e){ 
                //     e.preventDefault()       
                //         Comment.addComment(e) 
                //     let input = e.target.nextElementSibling
                //         input.value = " "       
                //  }
            div.appendChild(p)
            div.appendChild(button)
            div.appendChild(input)
            div.appendChild(ul) 
            main.append(div)
    }  

    addBtn(e){
        e.preventDefault()       
        Comment.addComment(e) 
        let input = e.target.nextElementSibling
            input.value = " " 
    }
}

// class Zodiac {
//     constructor(id, name){
//         this.id = id
// 		this.name = name       
//     }
    
//      renderZodiac(){
//          let main = document.querySelector('main')
//             main.innerHTML += 
//             `
//             <div class="card" data-id="${this.id}">
//                 <p>${this.name}</p>
//                 <button data-id="${this.id}" class="add-button">
//                     Add Behavior
//                 </button>
//                 <input class="innerInput" data-id="${this.id}">
//                 <ul id="${this.id}"></ul>
//             </div>
//             `
//         let selectBtn = document.getElementsByClassName('add-button') // an Array of btns
//             for (const b of selectBtn)  // whatever btn is selected it will pass.
//                 b.addEventListener("click", () => {
//                 this.addBtn.call(this) //call appends the this of the outter scope.
//                 })
            
//      }
//         // does not delete after refresh.
//       addBtn(){
//          //event.preventDefault() //only needed for submit event.   
//         Comment.addComment(event) 
//         let input = event.target.nextElementSibling
//             input.value = "" // clears the input field.
//       }
// }
