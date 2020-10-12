import React, { useState, useEffect } from 'react'
import fetchData from '../../services/fetchData'

interface Props {
   url: string;
   template?: React.FC<{data: any}>;
   method?: string;
   fallback?: JSX.Element;
   children?: (data: any) => JSX.Element
   [prop: string]: any;
}
   
function Fetch(
   { url, method = 'GET', template: Template, fallback, children, ...props }: Props)
{
   const [data, setData] = useState(undefined)
   const [loading, setLoading] = useState(true)

   const callback = (value: any) => {
      setData(() => value)
      setLoading(() => false)
   }
   useEffect(() => {
      setLoading(()=>true)
      fetchData(url, callback, method)
   }, [method, url])

   if (children) return children(data)

   return (
      <div {...props}>
         { loading
            ? fallback
            : Template && <Template data={data}/>
         }
      </div>
   )
}

export default Fetch
export { Fetch }