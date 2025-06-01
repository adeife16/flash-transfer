import { UserDocument } from "../src/model/users.model";

export interface IConfig {
    PORT: number | string;
    DB: string,
    SALT: string,
    SECRET: string,
    USERNAME: string,
    PASSWORD: string,
    ADMINID: string,
    SPACE_ACCESS_KEY: string,
    SENDGRID_KEY: string,
    Twilio:{
        AccountSid: string;
        AuthToken: string;
    }
}

export interface IUser {
    _id: string;
    name: string;
    email: string;
    error: string;
}

export interface ITokenPayload {
    expired: boolean;
    valid: boolean;
    decoded: {
        _id: string;
        role?: string;
    } | null;
}

export interface IBid {
    bidBy: UserDocument["id"];
    bidPrice: number;
    bidCreatedAt: Date;
    bidUpdatedAt: Date;
}

export interface ISubcategory{
    subCategory: array<{
        name: string;
        image: string;
    }>
}