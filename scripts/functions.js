

// Function that takes an array of objects and returns HTML
export const arrayObjectDisplay = (array) => {
    
    for(let item of array) {

        //check for cities
        if (item.population){
            const citiesHTML = document.querySelector(".cities")
            citiesHTML.innerHTML += `
                <li><b>${item.name}</b></li>
                <li>${item.population}</li>
                <li>${item.description}</li>
                <li><a href='${item.link}' target='_blank'>More Information</a></li><br>
                `
            continue
        }

        //check for landmarks
        if (item.year){
            const landmarksHTML = document.querySelector(".landmarks")
            landmarksHTML.innerHTML += `
                <li><b>${item.name}</b></li>
                <li>${item.year}</li>
                <li>${item.description}</li>
                <li><a href='${item.link}' target='_blank'>More Information</a></li><br>
                `
            continue
        }

        //check for citizens
        if (item.occupation){
            const citizensHTML = document.querySelector(".citizens")
            citizensHTML.innerHTML += `
                <li><b>${item.name}</b></li>
                <li>${item.occupation}</li>
                <li>${item.description}</li>
                <li><a href='${item.link}' target='_blank'>More Information</a></li><br>
                `
            continue
        }
    }
}

