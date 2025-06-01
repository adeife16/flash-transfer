import { Request, Response } from 'express';
import log from '../logger';
import { getDistricts, getCities } from "../services/districtCities.service";

export function GetDistricts(req: Request, res: Response){
  try {
    const data = getDistricts();
    res.send({
      data: data
    })
  } catch (error: any) {
    log.error(error);
    res.status(400).json({error: error.message ? error.message : 'error'});
  }
}

export function GetCities(req: Request, res: Response){
  try {
    const data = getCities(req.query.district as string);
    res.send({
      data: data
    })
  } catch (error: any) {
    log.error(error);
    res.status(400).json({error: error.message ? error.message : "error"})
  }
}