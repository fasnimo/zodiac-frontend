document.addEventListener("DOMContentLoaded", function(){
    fetchZodiacs()
    eventL()
    
})
function eventL(){
    let btn = document.querySelector("#sort")
        btn.addEventListener("click", Zodiac.sortName)
}

function fetchZodiacs(){
    fetch("http://localhost:3000/zodiacs")
    .then(response => response.json())
    .then(arrayOfZodiacs => {
        arrayOfZodiacs.forEach((element) => {
            let zodiac = new Zodiac(element.id, element.name)
                zodiac.renderZodiac() 
            element.comments.forEach((c) => {
                let comment = new Comment(c.id, c.post, c.zodiac_id) 
                   comment.loadComment() 
            })  
        })
    })  
}


