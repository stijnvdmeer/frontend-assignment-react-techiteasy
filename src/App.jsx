import './App.css';

import SalesOverview from "./components/SalesOverview.jsx";

function App() {
  return (
      <>

          <h1>Tech It Easy Dashboard</h1>
          <h2>Verkoopoverzicht</h2>
          <SalesOverview title="Aantal verkochte producten" value="13" classes="salesoverview" id="salesoverview-soldproducts" />
          <SalesOverview title="Aantal ingekochte producten" value="13" classes="salesoverview" id="salesoverview-orderedproducts" />
          <SalesOverview title="Aantal te verkopen producten" value="13" classes="salesoverview" id="salesoverview-remnantproducts" />
          <h2>Best verkochte tv</h2>d
          <article></article>
      </>
  )
}

export default App
