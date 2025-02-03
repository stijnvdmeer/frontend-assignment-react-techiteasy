import './styles/App.css';

//import './opdracht1-oefeningen.jsx';
import {inventory} from "./constants/inventory.js";

import Button from "./components/Button.jsx";
import TvArticle from "./components/TvArticle.jsx";

function App() {
    function tag() {
        console.log("Tag youre it!");
    }

  return (
    <>
        <main className="outer-container">
            <div className="inner-container-large">
                <h1>Alle TVs</h1>
                <div>
                    <Button onButtonClick={tag} buttonText="Meest Verkocht Eerst" classes="btn" />
                    <Button onButtonClick={tag} buttonText="Meest Verkocht Eerst" classes="btn" />
                    <Button onButtonClick={tag} buttonText="Meest Verkocht Eerst" classes="btn" />
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
