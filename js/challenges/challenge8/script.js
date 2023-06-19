const codingSchool = {
    name: "_nology",
    languages: ["JavaScript", "Java"],
    offices: [
        {
            country: "Australia",
            city: "Sydney",
        },
        {
            country: "UK",
            city: "Bristol",
        },
    ],
};

// Using destructuring, create a function that returns the city of the first office of the given company

// @param {name: string, languages: string[], offices: {country: string, city: string}[]}

// @returns {string}  the name of the city of the first office

const returnFirstCity = (obj) => {
    const { offices } = obj;
    return offices[0].city 
};

console.log(returnFirstCity(codingSchool));
