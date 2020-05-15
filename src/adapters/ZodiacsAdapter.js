class ZodiacsAdapter {
    constructor(){
         this.baseURL = "http://localhost:3000/zodiacs"
    }

        getZodiacs(){
        return fetch(`${this.baseURL}`)
            .then(res => res.json())
            .then(json => {
                return json.data
            })
            // .then(json => json.data.forEach(zodiac => this.renderZodiacs(zodiac)))
        }
}