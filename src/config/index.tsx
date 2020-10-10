import React from 'react'
export * from './routes'

const JsxTitle = <> 
   Find your
   <br/>
   <span>doctor</span>
</>
export interface Category {
   label: string;
   img: string;
}
const categories: Category[] = [
   { label: 'eyes' , img: 'assets/heart.jpg'},
   { label: 'heart', img: 'assets/heart.jpg'},
   { label: 'brain', img: 'assets/brain.jpg'},
   { label: 'chest', img: 'assets/brain.jpg'},
]

export { JsxTitle, categories }