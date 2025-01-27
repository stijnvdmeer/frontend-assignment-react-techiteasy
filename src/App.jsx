import './App.css';

import SalesOverview from "./components/SalesOverview.jsx";

function App() {
  return (
      <main className="outer-container">
        <div className="inner-container">
          <h1>Tech It Easy Dashboard</h1>
          <h2>Verkoopoverzicht</h2>
          <div className="salesOverviews">
              <SalesOverview title="Aantal verkochte producten" value="13" classes="salesoverview" id="salesoverview-soldproducts" />
              <SalesOverview title="Aantal ingekochte producten" value="13" classes="salesoverview" id="salesoverview-orderedproducts" />
              <SalesOverview title="Aantal te verkopen producten" value="13" classes="salesoverview" id="salesoverview-remnantproducts" />
          </div>

          <h2>Best verkochte tv</h2>
          <article></article>
        </div>
      </main>
  )
}

export default App
