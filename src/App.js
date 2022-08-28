import React from 'react'
import { useState } from "react";
import {Navbar} from "./Components/Navbar";
import {Footer} from "./Components/footer";
import {Content} from './Components/Content';


const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <div className={darkTheme? 'dark' : 'light'}>
            <div className="App">
                <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                <Content />
                <Footer/>
            </div>
        </div>
    )
}

export default App;