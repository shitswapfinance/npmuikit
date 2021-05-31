   import React from "react";
   import Svg from "../../../components/Svg/Svg";
   import { SvgProps } from "../../../components/Svg/types";
   
   const Icon: React.FC<SvgProps> = (props) => {
     return (
       <Svg viewBox="0 0 56 56" {...props}>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#ddb967" d="M11,24L25,2l14,22l-14,8L11,24z"/><path fill="#b3851d" d="M25,2l14,22l-14,8V2z"/><path fill="#dfa522" d="M11,27l14,8l14-8L25,46L11,27z"/><path fill="#b3851d" d="M25,35l14-8L25,46V35z M11,24l14-6l14,6l-14,8L11,24z"/><path fill="#ddb967" d="M25,18l14,6l-14,8V18z"/></svg>
       </Svg>
     );
   };
   
   export default Icon;
   