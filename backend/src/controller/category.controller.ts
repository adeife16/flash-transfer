import { Request, Response } from 'express';
import log from '../logger';
import { createCategory, getCategories, getcategoryByName, getCategoryBySubcategory, updateCategory } from '../services/category.service';

export async function CreateCategory(req: Request, res: Response){
    try {
        const { categoryName, subCategory,  } = req.body;
        const category = await getcategoryByName(categoryName);
        if(subCategory){
             const sub_cat = await getCategoryBySubcategory(subCategory[0].name);
             if(sub_cat.length){
                return res.status(400).json({
                    error: 'Subcategory already exists.'
                })
            }
        }
        
        if (category && subCategory) {
            const subCat = await updateCategory(categoryName, subCategory)
            return res.send({   
                data: subCat
            })
        }
        if(category && !subCategory){
            return res.status(400).json({error: 'Category already exists.'})
        }
        const categoryObj = await createCategory(req.body);
        res.send({
            data: categoryObj
        })
    } catch (error: any) {
        log.error(error);
       res.status(400).json({error: error.message ? error.message as string : 'error'})
    }
}

export async function GetCategory(req: Request, res: Response){
    const categories = await getCategories();
    res.send({
        data: categories
    })
}