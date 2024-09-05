import axios from "axios";

export interface LocationInfo {
  lat: string;
  lon: string;
  display_name: string;
}

export async function fetchLocationData(apiURL: string, location: string) {
  
}