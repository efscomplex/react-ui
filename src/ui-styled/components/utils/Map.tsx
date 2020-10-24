import React, {Fragment} from 'react';

const getKey = (num: number)=> (Math.random() + num).toString()

const Map = ({as, template: Template, from, children, ...restProps}: any) => {
   const childs = from.map(
      (item: Object, i: number) => <Template key={getKey(i)} {...item} />
   )

   const props = (as && restProps) || null
   return React.createElement(as || Fragment, props, childs)
}

export default Map;
