import { actionRows, briefingPanels, exposureBands, leverTiles, scenarioColumns, summaryTiles } from './data'

function App() {
  return (
    <main className="app-shell">
      <section className="panel hero-shell">
        <div className="hero-copy">
          <p className="eyebrow">Scenario Planning Atlas</p>
          <h1>Three possible futures. One cleaner way to decide which moves deserve commitment.</h1>
          <p className="lead">
            A strategy surface for downside, base, and upside planning across revenue, growth, operations, AI, and
            governance pressure.
          </p>
        </div>

        <div className="summary-grid">
          {summaryTiles.map((tile) => (
            <article className="summary-card" key={tile.label}>
              <span>{tile.label}</span>
              <strong>{tile.value}</strong>
              <small>{tile.note}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="section-head">
          <div>
            <p className="eyebrow">Scenario spine</p>
            <h2>Three branches, kept symmetrical so the decision differences read instantly.</h2>
          </div>
          <span className="annotation">Downside · Base · Upside</span>
        </div>

        <div className="scenario-grid">
          {scenarioColumns.map((scenario) => (
            <article className="scenario-column" key={scenario.name}>
              <div className="scenario-topline">
                <span>{scenario.kicker}</span>
                <b>{scenario.probability}</b>
              </div>
              <h3>{scenario.name}</h3>
              <p>{scenario.outlook}</p>
              <ul>
                {scenario.moves.map((move) => (
                  <li key={move}>{move}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="split-grid">
        <article className="panel">
          <div className="section-head compact">
            <div>
              <p className="eyebrow">Decision lattice</p>
              <h2>Levers that change branch selection</h2>
            </div>
          </div>

          <div className="lever-grid">
            {leverTiles.map((tile) => (
              <article className={`lever-tile lever-${tile.span}`} key={tile.title}>
                <span className={`state-pill state-${tile.state}`}>{tile.state}</span>
                <strong>{tile.title}</strong>
                <p>{tile.detail}</p>
              </article>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="section-head compact">
            <div>
              <p className="eyebrow">Exposure map</p>
              <h2>Where scenario error costs the most</h2>
            </div>
          </div>

          <div className="band-stack">
            {exposureBands.map((band) => (
              <article className="band-row" key={band.label}>
                <div>
                  <strong>{band.label}</strong>
                  <p>{band.note}</p>
                </div>
                <div className="band-metrics">
                  <span>{band.probability}</span>
                  <b>{band.consequence}</b>
                </div>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="split-grid">
        <article className="panel editorial-panel">
          <div className="section-head compact">
            <div>
              <p className="eyebrow">Briefing layer</p>
              <h2>Board-style narrative, not just forecast mechanics</h2>
            </div>
          </div>

          <div className="briefing-stack">
            {briefingPanels.map((panel) => (
              <article className="briefing-card" key={panel.title}>
                <span>{panel.title}</span>
                <p>{panel.copy}</p>
              </article>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="section-head compact">
            <div>
              <p className="eyebrow">Commitment queue</p>
              <h2>Who owns the next move</h2>
            </div>
          </div>

          <div className="action-table">
            {actionRows.map((row) => (
              <article className="action-row" key={row.action}>
                <strong>{row.owner}</strong>
                <p>{row.action}</p>
                <span>{row.branch}</span>
                <b>{row.due}</b>
              </article>
            ))}
          </div>
        </article>
      </section>
    </main>
  )
}

export default App

