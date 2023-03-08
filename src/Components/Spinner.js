// React Function Based Component

import React from 'react'
import loading from './loading.gif'
const Spinner=()=> { 
    return (
      <div>
        <img src={loading} className="my-3" alt="loading" />
      </div>
    ) 
} 

export default Spinner;









// React Class Based Components

// import React, { Component } from 'react'
// import loading from './loading.gif'
// export default class Spinner extends Component {
//   render() {
//     return (
//       <div>
//         <img src={loading} className="my-3" alt="loading" />
//       </div>
//     )
//   }
// }
