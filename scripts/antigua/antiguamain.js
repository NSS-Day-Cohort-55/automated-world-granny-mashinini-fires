import { antiguanCities } from "./cities/CityDataProvider.js";
import { antiguanLandmarks } from "./landmarks/LandmarkDataProvider.js";
import { antiguanCelebrities } from "./celebrities/CelebritiesDataProvider.js";
import { arrayObjectDisplay } from "../functions.js";

let newFullArray = antiguanCities.concat(antiguanLandmarks, antiguanCelebrities)


arrayObjectDisplay(newFullArray)

// arrayObjectDisplay(antiguanCities)

// arrayObjectDisplay(antiguanLandmarks)

// arrayObjectDisplay(antiguanCelebrities)