// const app = new App()
    
document.addEventListener("DOMContentLoaded", function(){
    fetchZodiacs()
})

// perhaps I can load the created comments when the page loads with this fetch.
const fetchZodiacs = () => {
    fetch("http://localhost:3000/zodiacs")
    .then(response => response.json())
    .then(arrayOfZodiacs => {
        arrayOfZodiacs.forEach((element) => {
            debugger
            let zodiac = new Zodiac(element.id, element.name)
                debugger
                zodiac.renderZodiacs() 
            element.comments.forEach((post) => {
                debugger
                let comment = new Comment(post.id, post.post, post.zodiac_id)
                   comment.loadComments(element.comments)
            })  
        })
    })  
}

//Come back to this!!!

// const comment = () => {
//     fetch(`http://localhost:3000/zodiacs/:id/comments/:id`) //need id's
//     .then(response => response.json())
//     .then(arrayOfComments => {
//         arrayOfComments.data.forEach((element) => {
//             let comment = new Comment(element.post)
//         })
//     })
// }

