import './styles/App.css';

//import './opdracht1-oefeningen.jsx';
import {inventory} from "./constants/inventory.js";

import Button from "./components/Button.jsx";
import TvArticle from "./components/TvArticle.jsx";
import {useState} from "react";



function App() {
    const [tvList, setTvList] = useState([inventory]);

    function sortByMostSold() {

        const newTvList = [...tvList].sort((a, b) => {
            if(a.sold > b.sold) return 1;
            if(a.sold < b.sold) return -1;
            return 0;
        });
        console.log(newTvList);
        setTvList(newTvList);
    }

  return (
    <>
        <main className="outer-container">
            <div className="inner-container-large">
                <h1>Alle TVs</h1>
                <div>
                    <Button onButtonClick={sortByMostSold} buttonText="Meest Verkocht Eerst" classes="btn" />
                    <Button onButtonClick={sortByMostSold} buttonText="Meest Verkocht Eerst" classes="btn" />
                    <Button onButtonClick={sortByMostSold} buttonText="Meest Verkocht Eerst" classes="btn" />
                </div>
            </div>
            <div className="inner-container-small">
                {
                    inventory.map((television) => {
                        return (
                            <TvArticle tv={television}/>
                        );
                    })
                }
            </div>
        </main>
    </>
  )

}



export default App
