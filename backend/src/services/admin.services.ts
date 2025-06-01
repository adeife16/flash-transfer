import { sign } from "../utils/jwt.utils";
import config from "../../enviorments/default";
import Membership from "../model/membership.model";
import { DocumentDefinition, Types } from "mongoose";
import { MembershipDocument } from "../model/membership.model";

const { USERNAME, ADMINID, PASSWORD } = config;

// Login admin
export const loginAdmin = async(username: string, password: string) => {
  try {
    if(USERNAME == username && PASSWORD == password){
      const token = sign({role: "ADMIN", _id: ADMINID})
      return {token, role: "ADMIN"};
    } else {
      return { error: "Invalid credentials"}
    }
  } catch (error: any) {
    throw new Error(error as any)
  }
}

export const addMembership = async(input: DocumentDefinition<MembershipDocument>) => {
  try {
    const memObj = await Membership.create(input);
    return memObj;
  } catch (error) {
    throw new Error(error as any)
  }
}

export const getMemberships = async() => {
  try {
    const memObj = await Membership.find({}, "-createdAt -updatedAt -__v");
    return memObj;
  } catch (error) {
    throw new Error(error as any)
  }
}