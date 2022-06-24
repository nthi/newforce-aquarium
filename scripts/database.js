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
            length: 3,
            location: "Florida",
            food: "crustaceans"
        },
        {
            image: "../images/david-clode-xNpxB9bfLUE-unsplash",
            name:"Lavie",
            species: "Mandarinfish",
            length: 8,
            location: "Australia",
            food: "Small invertibrates"
        },
        {
            image: "../images/david-clode-LLwRRi7FCtY-unsplash",
            name:"Princess Peach",
            species:"Anthias",
            length: 15,
            location: "Australia",
            food: "Zooplankton"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}