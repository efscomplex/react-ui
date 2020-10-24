export type Break = 'small' | 'medium' | 'large' | 'x-large'
export const breaks = new Map(
   [
      ['small', '576px'],
      ['medium', '768px'],
      ['large', '992px'],
      ['x-large', '1200px'],
   ]
)
/*  NOTE  Tagged Template Literals*/ 
export const mediaMinWidth = (width: string | undefined) => {
   if (!width) return null
   const size = breaks.get(width)

   return (str: any, ...args: any) => `
      @media (min-width: ${size || width}){
         ${str[0]}
      }
   `
}

export const mediaMaxWidth = (width: string | undefined) => {
   if (!width) return null
   const size = breaks.get(width)

   return (str: any, ...args: any) => `
      @media (max-width: ${size || width}){
         ${str[0]}
      }
   `
}
