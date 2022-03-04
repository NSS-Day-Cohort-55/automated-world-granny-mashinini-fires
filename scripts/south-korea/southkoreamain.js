import { koreanCities } from "./cities/CityDataProvider.js";
import { koreanLandmarks } from "./landmarks/LandmarkDataProvider.js";
import { koreanCelebrities } from "./celebrities/CelebritiesDataProvider.js";
import { arrayObjectDisplay } from "../functions.js";

let newFullArray = koreanCities.concat(koreanLandmarks, koreanCelebrities)


arrayObjectDisplay(newFullArray)
