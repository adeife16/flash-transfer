/** @format */

import { IBaseRepository } from './interfaces/base.interface';
import { Model, Document } from 'mongoose';

export class BaseRepository<T> implements IBaseRepository<T> {
	protected model: Model<T>;
	constructor(model: Model<T>) {
		this.model = model;
	}
	async findById(id: string): Promise<T | null> {
		return this.model.findById(id).exec();
	}
	async findAll(): Promise<T[]> {
		return this.model.find({}).exec();
	}
	async create(item: T): Promise<T> {
		return this.model.create(item);
	}
	async update(id: string, item: Partial<T>): Promise<T | null> {
		return this.model.findByIdAndUpdate(id, item, { new: true }).exec();
	}
	async delete(id: string): Promise<boolean> {
		const result = await this.model.findByIdAndDelete(id).exec();
		return !!result;
	}
}
