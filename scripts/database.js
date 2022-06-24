/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            image: "../images/adam-melrose-_1FbuCzlMqo-unsplash",
            name: "Bart",
            species: "Yellow Tang",
            food: "crustaceans",
            size: 3
        },
        {
            image: "../images/david-clode-xNpxB9bfLUE-unsplash",
            name:"Lavie",
            species: "Mandarinfish",
            food: "Small invertibrates",
            size: 8
        },
        {
            image: "../images/david-clode-LLwRRi7FCtY-unsplash",
            name:"Princess Peach",
            species:"Anthias",
            food: "Zooplankton",
            size: 15
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}