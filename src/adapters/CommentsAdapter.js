// class CommentsAdapter {
//     constructor(){
//         this.url = `http://localhost:3000/zodiacs/${this.zodiac_id}/comments`
//     }

//     commentPost = () =>{ 
//         // let url = `http://localhost:3000/zodiacs/${this.zodiac_id}/comments`
//         const configObj = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json",
//             },
//             body: JSON.stringify({id: this.id, post: this.post, zodiac_id: this.zodiac_id}) // this.id may or may not serve a purpose.
//         }
//          fetch(url, configObj)
//          .then(res => res.json())
//          .then(makeComment())
//          .catch(error => console.log("Error: " + error))       
//     }
// }