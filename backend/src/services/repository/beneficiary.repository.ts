/** @format */

import mongoose, { Types } from 'mongoose';
import Beneficiary, {
	BeneficiaryDocument,
} from '../../model/beneficiary.model';
import { BaseRepository } from './base.repository';
import { IBeneficiaryRepository } from './interfaces/beneficiary.interface';

export class BeneficiaryRepository
	extends BaseRepository<BeneficiaryDocument>
	implements IBeneficiaryRepository<BeneficiaryDocument>
{
	constructor() {
		super(Beneficiary);
	}
	async findAllByUserId(user_id: string): Promise<BeneficiaryDocument[]> {
		return this.model.find({ user_id: user_id }).exec();
	}
}
