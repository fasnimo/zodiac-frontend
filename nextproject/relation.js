// class Relation{
//     constructor(id, zodiacId, plantId){
//         this.id = id;
//         this.zodiacId = zodiacId;
//         this.plantId = plantId;
//         this.relationAdapter = new RelationAdapter()
//         this.relationDropdowns = document.getElementById('relation-dropdowns')
//         this.relationTypeSelect= document.getElementById('relation-type-select')
//         this.relationList = document.querySelector('#accordion-example')
//         this.addRelationForm = document.querySelector('.add-relation-container')
//         this.newRelationButton = document.getElementById('new-relation-btn')
//         this.selectRelation = document.getElementById('selected-relation')
//         this.addRelation = false 
//         this.submitButton = document.querySelector('.submit') // handel submitform 
//         this.formInputs = document.querySelectorAll('.input-text')
//         this.relationTypeSelect.addEventListener('click', this.handleRelationChange)//first event
//         this.relationDropdowns.addEventListener('change', this.handleChange)
//         this.newRelationButton.addEventListener('click', this.displayForm)
//         this.submitButton.addEventListener('click', this.handleSubmitForm)     
//     }

//         handleRelationChange = (event) => {
//             this.selectRelation.style.display = 'none'
//             // this.relationList.innerText = ``
//             let selection = event.target.value
//             if (selection == 'plant') {
//                 this.plantRelation.style.display = 'block'
//                 this.zodiacRelation.style.display = 'none'
//             } else if (selection == 'zodiac') {
//                 this.zodiacRelation.style.display = 'block'
//                 this.plantRelation.style.display = 'none'
//             }
//         }
    

//         renderCards(objRelations, objId) {
//             // debugger
//             let array = this.plants.concat(this.zodiacs)
//             // debugger
//             let objName, objType=""
    
//             if (objRelations.name === undefined) {
//                 // debugger
//                 objName = objRelations.name
//                 objType = "zodiac"
//             } else if (this.plant.id.kind === undefined){
//                 objName = this.plant.id.kind
//                 // debugger
//                 objType = "plant"
//             }
//             let object = array.find(element => element.id === objId)
//             // debugger
//             let cardDiv = document.createElement("div")
//             cardDiv.classList.add('card')
    
//             let cardHeaderDiv = document.createElement("div")
//             cardHeaderDiv.classList.add("card-header", "relation-card")
//             //
//             cardHeaderDiv.id = `heading${objRelations.id}`
//             ///
//             // let buttonInHeaderDiv = document.createElement("button")
//             // buttonInHeaderDiv.classList.add("list-group-item", "list-group-item-action", "relation-item")
//             // let h3InButton = document.createElement("h3")
//             //
//             // h3InButton.textContent = objRel
//             ///
//             // buttonInHeaderDiv.textContent = h3InButton
    
//             // cardHeaderDiv.appendChild(buttonInHeaderDiv)
    
//             // everything above is for the first div within the parent card div
    
//             let collapseDiv = document.createElement("div")
            
//             collapseDiv.id = `collapse${objRelations.id}`
            
//             collapseDiv.classList.add("collapse")
//             collapseDiv.setAttribute("data-id", objRelations.id)
//             //debugger
//             collapseDiv.setAttribute("data-parent", "#accordionExample")
    
//             let cardBody = document.createElement("div")
//             cardBody.classList.add("card-body")
            
//             let pExplanation = document.createElement("p")
//             //
//             pExplanation.textContent = `${object[Object.keys(object)[1]]} relationship is with ${objName}!`
//             // debugger
//             cardBody.appendChild(pExplanation)
//             collapseDiv.appendChild(cardBody)
//             cardDiv.append(cardHeaderDiv, collapseDiv)
//             // cardDiv.append(cardHeaderDiv)
    
//             this.relationList.appendChild(cardDiv)
//             // debugger
        
//         }

//         findMatching(relationAtt, objNum, objId) {
//             // debugger
//             let name = objId.split("-")[0]
//             let match = relationAtt.filter(e => e.attributes[name].id === Number(objNum));// use bracket notations to interpolate here
//                 return match;
//         };

//         handleChange = (event) => {
//             // debugger
//             this.relationList.innerHTML = ``
//             let objNum = event.target.value
//             let objId = event.target.id
//             fetch(this.relationURL)
//             .then(res => res.json())
//             .then(relation => this.findMatching(relation.data, objNum, objId))
//             .then(matched => matched.forEach(match => {
//                 if(objId == "zodiac-dropdowns") {
//                     // debugger
//                     let plantRel = match.attributes.plant
//                     this.renderCards(plantRel, objNum)
//                 } else if (objId == "plant-dropdowns") {
//                     // debugger
//                     let zodiacRel = match.attributes.zodiac
//                     this.renderCards(zodiacRel, objNum)
//                 }
//             }))
//             // debugger
//         }

//         //third event listener shows & hides create new relation form
//     displayForm = () => {
//         this.addRelation = !this.addRelation //initially set to a false at the top
//         if (this.addRelation) {
//             this.addRelationForm.style.display = 'block'   
//         } else {
//             this.addRelationForm.style.display = 'none'
//         }
//     }
    
// } 