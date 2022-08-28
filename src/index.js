import React from 'react'
import ReactDOM  from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'
import './style/index.css'
import App from './App'
import { ResultContextProvider } from './contexts/ResultsContextProvider';

// ReactDOM.render(
//     <BrowserRouter>
//         <ResultContextProvider>
//         <App/>
//         </ResultContextProvider>
//     </BrowserRouter>,
//  document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
             <ResultContextProvider>
             <App/>
             </ResultContextProvider>
         </BrowserRouter>);