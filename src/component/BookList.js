import React, { Component, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
// class BookList extends Component {
//     static contextType = ThemeContext
//     render() { 
//         const {isLightTheme, light, dark} = this.context;
//         const theme = isLightTheme ? light : dark
//         return (
//             <div className='book-list' style={{color: theme.syntax, background: theme.bg}}>
//                 <ul>
//                     <li style={{background: theme.ui}}>I am good</li>
//                     <li style={{background: theme.ui}}>hello how are you ?</li>
//                     <li style={{background: theme.ui}}>Cool</li>
//                 </ul>
//             </div>
//         );
//     }
// }
 
// export default BookList;

const BookList = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark
    return ( 
        <div className='book-list' style={{color: theme.syntax, background: theme.bg}}>
                 <ul>
                     <li style={{background: theme.ui}}>I am good</li>
                     <li style={{background: theme.ui}}>hello how are you ?</li>
                     <li style={{background: theme.ui}}>Cool</li>
                 </ul>
             </div>
     );
}
 
export default BookList;