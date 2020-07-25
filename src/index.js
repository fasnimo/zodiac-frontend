document.addEventListener("DOMContentLoaded", function(){
    fetchZodiacs()
})

const fetchZodiacs = () => {
    fetch("http://localhost:3000/zodiacs")
    .then(response => response.json())
    .then(arrayOfZodiacs => {
        arrayOfZodiacs.forEach((element) => {
            // debugger
            let zodiac = new Zodiac(element.id, element.name)
                // debugger
                zodiac.renderZodiacs() 
            element.comments.forEach(() => {
                // debugger
                let comment = new Comment() //not sure if the parameters are needed.
                   comment.loadComments(element.comments)
            })  
        })
    })  
}

