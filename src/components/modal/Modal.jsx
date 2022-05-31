// import React, { Component, PropTypes } from "react";
// import './modal.css';
// import Portal from "../portal/Portal";

// export default class Modal extends Component {
//     static PropTypes={
//         children: PropTypes.any,
//         onClickOut: PropTypes.func,
//     }
    
//     render(){

//         const { children, toggle, active } = this.props;
//         return(
//             <Portal>
//                 {active && (
//                     <div className="wrapper">
//                         <div className="window">
//                             <button className="closeBtn" onClick={toggle}>X</button>
//                             <div>{children}</div>
//                         </div>
//                     </div>
//                 )}
//             </Portal>
//         )
//     }
// }