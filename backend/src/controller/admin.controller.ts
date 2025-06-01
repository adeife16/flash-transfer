import { Request, Response } from "express";
import { addMembership, loginAdmin } from "../services/admin.services";
import log from "../logger";

export async function LoginAdmin(req: Request, res: Response) {
  try {
    const { username, password } = req.body;
    const user = await loginAdmin(username, password);
    if(user.hasOwnProperty('error')){
      return res.status(403).json(user)
    } else {
      return res.status(200).json({data: user})
    }
  } catch(e: any){
    log.error(e);
    res.status(400).json({ error: e.message as string });
  }
}

export async function AddMembership(req: Request, res: Response) {
  try {
    const data = req.body;
    const result = await addMembership(data);
    res.send({data: result});
  } catch (e: any) {
    log.error(e);
    res.status(400).json({ error: e.message ? e.message : "error" });
  }
}