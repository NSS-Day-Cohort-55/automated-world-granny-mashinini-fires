import { swissCities } from "./cities/CityDataProvider.js";
import { swissLandmarks } from "./landmarks/LandmarkDataProvider.js";
import { swissCelebrities } from "./celebrities/CelebritiesDataProvider.js";
import { arrayObjectDisplay } from "../functions.js";

let newFullArray = swissCities.concat(swissLandmarks, swissCelebrities)


arrayObjectDisplay(newFullArray)


// arrayObjectDisplay(swissCities)

// arrayObjectDisplay(swissLandmarks)

// arrayObjectDisplay(swissCelebrities)