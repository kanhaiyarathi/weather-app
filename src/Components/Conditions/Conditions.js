import React from 'react';

const Conditions = (props) => {

   return (       
       <div>
           {props.responseObj.cod === 200 ?
               <div>
                   <p><strong>{props.responseObj.name}</strong></p>
                   <p>It is {Math.round(props.responseObj.main.temp)} {props.units} out with {props.responseObj.weather[0].description}.</p>
               </div>
           : null
           }
       </div>
   )
}

export default Conditions;