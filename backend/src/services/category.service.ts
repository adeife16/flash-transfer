import { DocumentDefinition } from 'mongoose';
import { ISubcategory } from '../../types/config';
import Category, { CategoryDocument } from "../model/category.model"; 

// Create category
export async function createCategory(input: DocumentDefinition<CategoryDocument>){
    try {
        const category = await Category.create(input)
        return category;
    } catch (error: any) {
        throw new Error(error as any)
    }
}

// Get category by name
export async function getcategoryByName(category: string){
    return await Category.findOne({categoryName: category})
}

// Get category by subcategory name
export async function getCategoryBySubcategory(subCategoryName: string){
    return await Category.find({"subCategory.name":subCategoryName});
}

// Update category
export async function updateCategory(categoryName: string, subCategory: ISubcategory){
    return await Category.findOneAndUpdate({categoryName: categoryName}, {$addToSet: {
        "subCategory": { $each: subCategory }
    }}, {new: true})
}

// Get categories
export async function getCategories(){
    return await Category.find({}, "-__v");
}