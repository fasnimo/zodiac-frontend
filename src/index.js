document.addEventListener("DOMContentLoaded", function(){
    fetchZodiacs()
})
const fetchZodiacs = () => {
    fetch("http://localhost:3000/zodiacs")
    .then(response => response.json())
    .then(arrayOfZodiacs => {
        arrayOfZodiacs.forEach((element) => {
            let zodiac = new Zodiac(element.id, element.name)
                zodiac.renderZodiac() 
            element.comments.forEach((c) => {
                debugger
                let comment = new Comment(c.id, c.post, c.zodiac_id) //not sure if the parameters are needed.
                   comment.loadComment() //element.comments
            })  
        })
    })  
}

