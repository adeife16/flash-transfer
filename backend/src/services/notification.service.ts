import { DocumentDefinition, Types } from "mongoose";
import Notifcations, { notificationDocument } from "../model/notification.model";

export async function CreateNotifications(input: DocumentDefinition<notificationDocument>, user: string) {
  try {
     input.notifyBy = user;
    return await Notifcations.create(input);
  } catch (error: any) {
    throw new Error(error as any);
  }
}

export async function getNotifications() {
  try{
    return await Notifcations.find({});
  } catch(error: any) {
    throw new Error(error as any);
  }
}

export async function getNotificationById(id: string) {
  try{
    return await Notifcations.findOne({_id: new Types.ObjectId(id)})
  } catch(error: any){
    throw new Error(error as any)
  }
}

