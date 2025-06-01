/** @format */

import { BaseRepository } from './base.repository';
import { IUser } from './interfaces/user.interface';
import User, { UserDocument } from '../../model/users.model';
import { BeneficiaryDocument } from '../../model/beneficiary.model';
import { IBeneficiaryRepository } from './interfaces/beneficiary.interface';
import { BeneficiaryRepository } from './beneficiary.repository';
import { EXCHANGE_TYPE } from '../../controller/type';
export class UserRepository
	extends BaseRepository<UserDocument>
	implements IUser<UserDocument>
{
	beneficiaryInstance: IBeneficiaryRepository<BeneficiaryDocument>;
	constructor() {
		super(User);
		this.beneficiaryInstance = new BeneficiaryRepository();
	}
	async getBeneficiaryInformationById(
		user_id: string
	): Promise<BeneficiaryDocument[]> {
		return this.beneficiaryInstance.findAllByUserId(user_id);
	}
	async getFee(user_id: string, type: EXCHANGE_TYPE): Promise<number> {
		if (EXCHANGE_TYPE.CRYPTO_FIAT === type) {
			return 0.02;
		} else if (EXCHANGE_TYPE.FIAT_CRYPTO === type) {
			return 0.03;
		} else if (EXCHANGE_TYPE.FIAT_FIAT === type) {
			return 0.03;
		}
		return 0.03;
	}
}
