import mongoose from 'mongoose';

export interface CategoryDocument extends mongoose.Document {
    categoryName: string;
    categoryImage: string;
    subcategory: [{
        name: string;
        image: string
    }]
}

const CategorySchema = new mongoose.Schema({
   categoryName: {
       type: String,
       required: true
   },
   categoryImage: {
       type: String,
       required: true
   },
   subCategory: {
       name: {
           type: String
       },
       image: {
           type: String
       }
   },
   isActive: {
       type: Boolean,
       default: true
   }
}, { timestamps: true });

const Category = mongoose.model<CategoryDocument>("categories", CategorySchema);

export default Category;