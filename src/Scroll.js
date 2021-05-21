import React from 'react';

//we have state, props, and children, and this is example of using children




const Scroll = (props) => {

  
     return (

           <div style={{overflow: 'scroll', height: '800px'}}>
                 {props.children} 
           </div>


     )

};

export default Scroll;