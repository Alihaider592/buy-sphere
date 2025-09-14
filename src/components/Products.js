// ✅ Imports from your assets
import T from '../assets/T.png';
import T2 from '../assets/T2.png';
import T10 from '../assets/T10.jpg';
import T3 from '../assets/T3.png';
import T9 from '../assets/T4.png';
import T4 from '../assets/T4.jpg';
import T5 from '../assets/T5.png';
import T6 from '../assets/T6.jpg';
import T7 from '../assets/T7.jpg';
import T8 from '../assets/T8.jpg';
import w1 from '../assets/w1.jpg';
import w2 from '../assets/w3.png';
import w3 from '../assets/w3.png';
import w4 from '../assets/w4.png';
import w5 from '../assets/w5.png';
import w6 from '../assets/w6.jpg';
import w7 from '../assets/w7.png';
import w8 from '../assets/w8.jpg';
import w9 from '../assets/w9.jpg';
import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';
import s4 from '../assets/s4.jpg'; 
import s5 from '../assets/s5.jpg';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.webp';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.jpg';
import p6 from '../assets/p6.jpg';

// ✅ All products (your original data)
export const products = [
  {descrition:"Include brand, model, and key features like Automatic Chronograph, Waterproof, and Luxury.",sizes:["M","L","XL"], _id: 11, _image: [w1],subcategory:"Topwear", _price: 35, _title: "Watches", _name: "Men - Gents Watch", _Subtitle: "Smart & Stylish" ,category:"men" },
  {descrition:"comfort features, durability, and intended use (e.g., running, formal, everyday).",sizes:["M","L","XL"], _id: 20, _image: [s1], _price: 55, _title: "Shoes",subcategory:"bottom wear", _name: "Men - Sneakers", _Subtitle: "Step in Style" ,category:"men" },
  {descrition:"Include the brand, fit, and wash, e.g., Men's Straight Fit Dark Wash Denim Jeans.",sizes:["M","L","XL"], _id: 29, _image: [p5],subcategory:"winter wear", _price: 25, _title: "Jeans", _name: "Men - Jeans", _Subtitle: "Classic Denim" ,category:"women" },
  {descrition:"Use descriptive keywords like Classic Fit Cotton Dress Shirt or Slim Fit Casual Button-Down.",sizes:["M","L","XL"], _id: 2, _image: [T2],subcategory:"Topwear", _price: 38, _title: "Shirts", _name: "Men - Shirts", _Subtitle: "Everyday Comfort" ,category:"men" },
  {descrition:"Include brand, model, and key features like Automatic Chronograph, Waterproof, and Luxury.",sizes:["M","L","XL"], _id: 15, _image: [w5],subcategory:"Topwear", _price: 30, _title: "Coat", _name: "Men - Coat", _Subtitle: "Smart & Stylish" ,category:"men" },
  {descrition:"Use descriptive keywords like Classic Fit Cotton Dress Shirt or Slim Fit Casual Button-Down.",sizes:["M","L","XL"], _id: 1, _image: [T],subcategory:"Topwear", _name: "Men Round pure cotton T-shirt", _price: 25 ,category:"men"},
  {descrition:"Include the brand, fit, and wash, e.g., Men's Straight Fit Dark Wash Denim Jeans.",sizes:["M","L","XL"], _id: 26, _image: [p2],subcategory:"bottom wear", _name: "Men Round pure cotton T-shirt", _price: 20 ,category:"men"},
  {descrition:"Include the brand, fit, and wash, e.g., Men's Straight Fit Dark Wash Denim Jeans.",sizes:["M","L","XL"], _id: 25, _image: [p1],subcategory:"winter wear", _name: "Men - Bag", _price: 35 ,category:"men" },
  {descrition:"Use descriptive keywords like Classic Fit Cotton Dress Shirt or Slim Fit Casual Button-Down.",sizes:["M","L","XL"], _id: 3, _image: [T10],subcategory:"Topwear", _name: "Men Round pure cotton T-shirt", _price: 50, bestseller: true   ,category:"men"},
  {descrition:"Use descriptive keywords like Classic Fit Cotton Dress Shirt or Slim Fit Casual Button-Down.",sizes:["M","L","XL"], _id: 4, _image: [T3],subcategory:"Topwear", _name: "Men Round pure cotton T-shirt", _price: 40,  bestseller: true ,category:"men" },
  {descrition:"Use descriptive keywords like Classic Fit Cotton Dress Shirt or Slim Fit Casual Button-Down.",sizes:["M","L","XL"], _id: 5, _image: [T4],subcategory:"Topwear", _name: "Men Round pure cotton T-shirt", _price: 35, bestseller: true ,category:"men" },
  {descrition:"Use descriptive keywords like Classic Fit Cotton Dress Shirt or Slim Fit Casual Button-Down.",sizes:["M","L","XL"], _id: 6, _image: [T9],subcategory:"Topwear", _name: "Men Round pure cotton T-shirt", _price: 28, bestseller: true ,category:"men" },
  {descrition:"Include brand, model, and key features like Automatic Chronograph, Waterproof, and Luxury.",sizes:["M","L","XL"], _id: 23, _image: [s4],subcategory:"bottom wear", _name: "Women - Heels", _price: 60, bestseller: true ,category:"women" },
  {descrition:"Use descriptive keywords like Classic Fit Cotton Dress Shirt or Slim Fit Casual Button-Down.",sizes:["M","L","XL"], _id: 7, _image: [T5],subcategory:"Topwear", _name: "Men Round pure cotton T-shirt", _price: 45, bestseller: true ,category:"men" },
  {descrition:"Use descriptive keywords like Classic Fit Cotton Dress Shirt or Slim Fit Casual Button-Down.",sizes:["M","L","XL"], _id: 8, _image: [T6],subcategory:"Topwear", _name: "Men Round pure cotton T-shirt", _price: 20 ,category:"men" },
  {descrition:"Include the brand, fit, and wash, e.g., Men's Straight Fit Dark Wash Denim Jeans.",sizes:["M","L","XL"], _id: 28, _image: [p4],subcategory:"winter wear", _name: "Men Round pure cotton T-shirt", _price: 18, bestseller: true ,category:"men" },
  {descrition:"Use descriptive keywords like Classic Fit Cotton Dress Shirt or Slim Fit Casual Button-Down.",sizes:["M","L","XL"], _id: 9, _image: [T7],subcategory:"Topwear", _name: "Men Round pure cotton T-shirt", _price: 33  ,category:"men" },
  {descrition:"Use descriptive keywords like Classic Fit Cotton Dress Shirt or Slim Fit Casual Button-Down.",sizes:["M","L","XL"], _id: 10, _image: [T8],subcategory:"Topwear", _name: "Men Round pure cotton T-shirt", _price: 55, bestseller: true },
  {descrition:"Include brand, model, and key features like Automatic Chronograph, Waterproof, and Luxury.",sizes:["M","L","XL"], _id: 12, _image: [w2],subcategory:"Topwear", _name: "Women - Dress", _price: 40 ,category:"women" },
  {descrition:"Include brand, model, and key features like Automatic Chronograph, Waterproof, and Luxury.",sizes:["M","L","XL"], _id: 13, _image: [w3],subcategory:"Topwear", _name: "Women - Jumpsuit", _price: 50, bestseller: true },
  {descrition:"Include brand, model, and key features like Automatic Chronograph, Waterproof, and Luxury.",sizes:["M","L","XL"], _id: 14, _image: [w4],subcategory:"Topwear", _name: "Women - Cardigan", _price: 35 ,category:"women"},
  {descrition:"Include brand, model, and key features like Automatic Chronograph, Waterproof, and Luxury.",sizes:["M","L","XL"], _id: 16, _image: [w6],subcategory:"Topwear", _name: "Women - Skirt", _price: 30 ,category:"women" },
  {descrition:"Include brand, model, and key features like Automatic Chronograph, Waterproof, and Luxury.",sizes:["M","L","XL"], _id: 17, _image: [w7],subcategory:"Topwear", _name: "Women - Blouse", _price: 28 ,category:"women" },
  {descrition:"Include brand, model, and key features like Automatic Chronograph, Waterproof, and Luxury.",sizes:["M","L","XL"], _id: 18, _image: [w8],subcategory:"Topwear", _name: "Men - Trousers", _price: 45 ,category:"men"},
  {descrition:"Include brand, model, and key features like Automatic Chronograph, Waterproof, and Luxury.",sizes:["M","L","XL"], _id: 19, _image: [w9],subcategory:"Topwear", _name: "Women - Leggings", _price: 20, bestseller: true , },
  {descrition:"Include brand, model, and key features like Automatic Chronograph, Waterproof, and Luxury.",sizes:["M","L","XL"], _id: 21, _image: [s2],subcategory:"bottom wear", _name: "Men - Boots", _price: 70 ,category:"kids" },
  {descrition:"Include brand, model, and key features like Automatic Chronograph, Waterproof, and Luxury.",sizes:["M","L","XL"], _id: 22, _image: [s3],subcategory:"winter wear", _name: "Men - Sandals", _price: 25 ,category:"kids" },
  {descrition:"Include brand, fit, and wash, e.g., Men's Straight Fit Dark Wash Denim Jeans.",sizes:["M","L","XL"], _id: 24, _image: [s5],subcategory:"bottom wear", _name: "Men - Loafers", _price: 40 ,category:"kids" },
  {descrition:"Include the brand, fit, and wash, e.g., Men's Straight Fit Dark Wash Denim Jeans.",sizes:["M","L","XL"], _id: 27, _image: [p3],subcategory:"winter wear", _name: "Men - Belt", _price: 15 ,category:"kids" },
  {descrition:"Include the brand, fit, and wash, e.g., Men's Straight Fit Dark Wash Denim Jeans.",sizes:["M","L","XL"], _id: 30, _image: [p6],subcategory:"bottom wear",  _name: "Men - Scarf", _price: 12 ,category:"kids" },
];

// ✅ Split into patches of 6 products each
export const productsPatch1 = products.slice(0, 6);
export const productsPatch2 = products.slice(6, 12);
export const productsPatch3 = products.slice(12, 18);
export const productsPatch4 = products.slice(18, 24);
export const productsPatch5 = products.slice(24, 30);

// ✅ For easier pagination (loop through patches)
export const productPatches = [
  productsPatch1,
  productsPatch2,
  productsPatch3,
  productsPatch4,
  productsPatch5,
];
