import { koreanCities } from "./cities/CityDataProvider";
import { koreanLandmarks } from "./landmarks/LandmarkDataProvider";
import { koreanCelebrities } from "./celebrities/CelebritiesDataProvider";
import { arrayObjectDisplay } from "../functions";

console.log(arrayObjectDisplay(koreanCities))
console.log(arrayObjectDisplay(koreanLandmarks))
console.log(arrayObjectDisplay(koreanCelebrities))