import './styles/App.css';

import SalesOverview from "./components/SalesOverview.jsx";

import calculateSoldProducts from "./helperFuntions/calculateSoldProducts.js";
import calculateOrderedProducts from "./helperFuntions/calculateOrderedProducts.js";
import calculateRemnantProducts from "./helperFuntions/calculateRemnantProducts.js";
import getProductTitleString from "./helperFuntions/getProductTitleString.js";

function App() {
  return (
      <main className="outer-container">
        <div className="inner-container">
          <h1>Tech It Easy Dashboard</h1>
          <h2>Verkoopoverzicht</h2>
          <div className="salesOverviews">
              <SalesOverview title="Aantal verkochte producten" value={calculateSoldProducts()} classes="salesoverview" id="salesoverview-soldproducts" />
              <SalesOverview title="Aantal ingekochte producten" value={calculateOrderedProducts()} classes="salesoverview" id="salesoverview-orderedproducts" />
              <SalesOverview title="Aantal te verkopen producten" value={calculateRemnantProducts()} classes="salesoverview" id="salesoverview-remnantproducts" />
          </div>

          <h2>Best verkochte tv</h2>
          <article className="bestSoldArticle-outer">
              <img src="https://image.coolblue.nl/max/500x500/products/1786196" alt="picture of computer monitor"/>
              <div className="bestSoldArticle-inner">
                  <h2>{getProductTitleString()}</h2>
                  <h2>$549</h2>
                  <h2>43, 50, 55, 65</h2>
              </div>
          </article>
        </div>
      </main>
  )
}

export default App
