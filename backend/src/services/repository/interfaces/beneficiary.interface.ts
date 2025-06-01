/** @format */

import { IBaseRepository } from './base.interface';
import { Types } from 'mongoose';

export interface IBeneficiaryRepository<T> extends IBaseRepository<T> {
	findAllByUserId(user_id: string): Promise<T[]>;
}
