import _ from "lodash";
import locations from "../utils/locations.json";

export function getDistricts(){
  try {
    const data = locations.map((id: any) => {
      return id.state
    })
    return data;
  } catch (error: any) {
    throw new Error(error as any)
  }
}

export function getCities(district: string | undefined){
  try {
    const data = locations.filter((districts: any) => {
      return districts.state == district
    })
    return data;
  } catch (error: any) {
    throw new Error(error as any)
    
  }
}