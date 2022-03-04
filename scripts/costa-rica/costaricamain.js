import { costaRicanCities } from "./cities/CityDataProvider.js";
import { costaRicanLandmarks } from "./landmarks/LandmarkDataProvider.js";
import { costaRicanCelebrities } from "./celebrities/CelebritiesDataProvider.js";

import { arrayObjectDisplay } from "../functions.js";


let newFullArray = costaRicanCities.concat(costaRicanLandmarks, costaRicanCelebrities)

arrayObjectDisplay(newFullArray)

// arrayObjectDisplay(costaRicanCities)
// arrayObjectDisplay(costaRicanCelebrities)
// arrayObjectDisplay(costaRicanLandmarks)