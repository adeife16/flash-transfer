/** @format */

import { IBaseRepository } from './base.interface';
import {BeneficiaryDocument} from "../../../model/beneficiary.model"
export interface IUser<T> extends IBaseRepository<T> {
	getBeneficiaryInformationById(user_id:string):Promise<Array<BeneficiaryDocument>>;
	getFee(user_id:string,type: EXCHANGE_TYPE):Promise<number>;
}
