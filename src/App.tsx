import { useMemo, useState } from 'react'
import { leverTiles, scenarioColumns, scenarioModes, type ScenarioKey } from './data'

function App() {
  const [activeScenario, setActiveScenario] = useState<ScenarioKey>('base')
  const active = scenarioModes[activeScenario]

  const projectionPeak = useMemo(
    () => Math.max(...active.forecast.map((point) => point.value)),
    [active.forecast],
  )

  return (
    <>
      <header className="command-bar">
        <div className="command-brand">
          <div className="brand-chip">S</div>
          <div>
            <strong>Scenario Planning Atlas</strong>
            <span>Strategy surface</span>
          </div>
        </div>

        <div className="command-meta">
          <div>
            <span>Active context</span>
            <b>{active.context}</b>
          </div>
          <div>
            <span>Risk index</span>
            <b style={{ color: active.color }}>{active.modeLabel}</b>
          </div>
        </div>
      </header>

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

          <aside className="mode-console">
            <div className="mode-console-head">
              <span className="eyebrow">Input parameters</span>
              <i className="live-dot" style={{ backgroundColor: active.color }} />
            </div>

            <div className="mode-switch">
              {scenarioColumns.map((scenario) => (
                <button
                  className={`mode-button ${scenario.id === activeScenario ? 'active' : ''}`}
                  key={scenario.id}
                  onClick={() => setActiveScenario(scenario.id)}
                  style={scenario.id === activeScenario ? { borderColor: active.color, color: active.color } : undefined}
                  type="button"
                >
                  {scenario.name}
                </button>
              ))}
            </div>

            <div className="scenario-console-card">
              <strong style={{ color: active.color }}>{active.modeLabel}</strong>
              <p>{active.description}</p>
            </div>

            <div className="signal-meter">
              <div>
                <span>Model confidence</span>
                <b>{active.confidence}</b>
              </div>
              <div className="meter-track">
                <div className="meter-fill" style={{ width: `${active.confidencePercent}%`, backgroundColor: active.color }} />
              </div>
            </div>

            <div className="signal-meter">
              <div>
                <span>Latency / drift</span>
                <b>{active.driftLabel}</b>
              </div>
              <div className="meter-track">
                <div className="meter-fill soft" style={{ width: `${active.driftPercent}%`, backgroundColor: active.color }} />
              </div>
            </div>
          </aside>
        </section>

        <section className="summary-grid">
          {active.summaryTiles.map((tile) => (
            <article className="summary-card" key={tile.label}>
              <span>{tile.label}</span>
              <strong>{tile.value}</strong>
              <small>{tile.note}</small>
            </article>
          ))}
        </section>

        <section className="panel">
          <div className="section-head">
            <div>
              <p className="eyebrow">Scenario spine</p>
              <h2>Three branches, kept symmetrical so the decision differences read instantly.</h2>
            </div>
            <span className="annotation">{active.modeLabel} · {active.context}</span>
          </div>

          <div className="scenario-grid">
            {scenarioColumns.map((scenario) => (
              <article
                className={`scenario-column ${scenario.id === activeScenario ? 'is-active' : ''}`}
                key={scenario.name}
                style={scenario.id === activeScenario ? { borderColor: active.color, boxShadow: `0 0 0 1px ${active.color}20 inset` } : undefined}
              >
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
          <article className="panel projection-panel">
            <div className="section-head compact">
              <div>
                <p className="eyebrow">Projection rail</p>
                <h2>How the active branch compounds through the next decision window</h2>
              </div>
            </div>

            <div className="projection-grid">
              {active.forecast.map((point) => (
                <article className="projection-card" key={point.month}>
                  <span>{point.month}</span>
                  <div className="projection-bar-shell">
                    <div
                      className="projection-bar"
                      style={{
                        height: `${(point.value / projectionPeak) * 100}%`,
                        background: `linear-gradient(180deg, ${active.color}, rgba(255,255,255,0.14))`,
                      }}
                    />
                  </div>
                  <strong>{point.value}</strong>
                  <small>{point.note}</small>
                </article>
              ))}
            </div>
          </article>

          <article className="panel">
            <div className="section-head compact">
              <div>
                <p className="eyebrow">Decision lattice</p>
                <h2>Levers that change which branch becomes rational</h2>
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
        </section>

        <section className="split-grid">
          <article className="panel">
            <div className="section-head compact">
              <div>
                <p className="eyebrow">Exposure map</p>
                <h2>Where scenario error costs the most</h2>
              </div>
            </div>

            <div className="band-stack">
              {active.exposureBands.map((band) => (
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

          <article className="panel ledger-panel">
            <div className="ledger-head">
              <div>
                <p className="eyebrow">Temporal ledger</p>
                <h2>System variables shaping branch quality</h2>
              </div>
              <div className="ledger-dots">
                <span />
                <span />
                <span className="active" style={{ backgroundColor: active.color }} />
              </div>
            </div>

            <div className="ledger-table">
              <div className="ledger-row header">
                <span>Node variable</span>
                <span>Sens.</span>
                <span>Impact</span>
                <span>State</span>
              </div>
              {active.ledgerRows.map((row) => (
                <div className="ledger-row" key={row.name}>
                  <strong>{row.name}</strong>
                  <span>{row.sensitivity}</span>
                  <span>{row.impact}</span>
                  <b>{row.state}</b>
                </div>
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
              {active.briefingPanels.map((panel) => (
                <article className="briefing-card" key={panel.title}>
                  <span>{panel.title}</span>
                  <p>{panel.copy}</p>
                </article>
              ))}
            </div>
          </article>

          <article className="panel queue-panel">
            <div className="directive-card">
              <p className="eyebrow">{active.directive.eyebrow}</p>
              <h2>{active.directive.title}</h2>
              <p>{active.directive.copy}</p>
            </div>

            <div className="action-table">
              {active.actionRows.map((row) => (
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

      <footer className="system-footer">
        <div>
          <i className="live-dot" style={{ backgroundColor: active.color }} />
          <span>System nominal</span>
        </div>
        <p>Uptime 99.98%</p>
        <p>Export-ready briefing surface</p>
      </footer>
    </>
  )
}

export default App
