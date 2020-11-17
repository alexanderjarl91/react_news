import React, {createContext } from "react";

const NewsContext = createContext();

const NewsContextProvider = (props) => {
    const [data, setData] = useState()
    const apiKey

    return(
        <NewsContextProvider.Provider props={}>
            {props.children}
        </NewsContextProvider.Provider>
    )
}
"https://newsapi.org/v2/top-headlines?country=us&apiKey=3420d4ca8bde49b08e991ed7a552e100"