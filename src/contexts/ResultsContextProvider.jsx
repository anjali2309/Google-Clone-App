import React, {createContext, useState, useContext} from "react";

const ResultContext = createContext();
const Baseurl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([]); 
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async(url) => {
        setIsLoading(true);
        
        const response = await fetch(`${Baseurl}${url}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7aeebfcddemshf35ff4e883dd6adp1b6cc2jsn851b78246a28',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        });

        const data = await response.json();
        setResults(data);
        setIsLoading(false);
    }

    return (
        <ResultContext.Provider value = {{results, getResults, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);