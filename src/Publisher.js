class Publisher {
    constructor(items, options = {}) {
        this.options = Object.assign(
            options,
            {
                title : "Article List",
                description : "Object Containing Articles",
                language : 'en'
            }
        )

        this.items = items
    }
}

export default Publisher