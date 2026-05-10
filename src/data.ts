export type ScenarioKey = 'downside' | 'base' | 'upside'

export const scenarioColumns = [
  {
    id: 'downside' as const,
    name: 'Downside',
    kicker: 'Defensive posture',
    probability: '24%',
    outlook: 'Protect margin and trust while slowing hiring and promotion velocity.',
    moves: ['Delay broad rollout', 'Freeze new vendor exposure', 'Shift to renewal preservation'],
  },
  {
    id: 'base' as const,
    name: 'Base case',
    kicker: 'Controlled execution',
    probability: '51%',
    outlook: 'Keep validated experiments moving while preserving executive confidence.',
    moves: ['Promote proven pricing lane', 'Resolve identity backlog', 'Maintain AI release discipline'],
  },
  {
    id: 'upside' as const,
    name: 'Upside',
    kicker: 'Expansion posture',
    probability: '25%',
    outlook: 'Accelerate demand and pipeline creation after governance blockers are cleared.',
    moves: ['Increase partner allocation', 'Expand lifecycle motion', 'Fund operator automation'],
  },
]

export const leverTiles = [
  {
    title: 'Packaging clarity',
    span: 'wide',
    detail: 'Clarify commercial packaging before adding more demand pressure.',
    state: 'ready',
  },
  {
    title: 'Partner allocation',
    span: 'tall',
    detail: 'Move budget toward high-signal referral lanes if forecast confidence keeps holding.',
    state: 'watch',
  },
  {
    title: 'Identity cleanup',
    span: 'square',
    detail: 'Reduce access-review drag before scaling customer-facing change volume.',
    state: 'urgent',
  },
  {
    title: 'AI approvals',
    span: 'square',
    detail: 'Keep evaluation quality high while releasing the next workflow cohort.',
    state: 'ready',
  },
  {
    title: 'Hiring tempo',
    span: 'wide',
    detail: 'Protect operator capacity without loading the quarter with fixed cost too early.',
    state: 'watch',
  },
]

export const scenarioModes: Record<
  ScenarioKey,
  {
    color: string
    modeLabel: string
    context: string
    description: string
    confidence: string
    confidencePercent: number
    driftLabel: string
    driftPercent: number
    summaryTiles: { label: string; value: string; note: string }[]
    forecast: { month: string; value: number; note: string }[]
    exposureBands: { label: string; probability: string; consequence: string; note: string }[]
    briefingPanels: { title: string; copy: string }[]
    actionRows: { owner: string; action: string; branch: string; due: string }[]
    ledgerRows: { name: string; sensitivity: string; impact: string; state: string }[]
    directive: { eyebrow: string; title: string; copy: string }
  }
> = {
  downside: {
    color: '#f87171',
    modeLabel: 'DOWNSIDE MODE',
    context: 'MARKET_STRESS_24Q3',
    description: 'Challenging market conditions with higher governance pressure and slower adoption.',
    confidence: '91.4%',
    confidencePercent: 91,
    driftLabel: 'Elevated',
    driftPercent: 68,
    summaryTiles: [
      {
        label: 'Revenue shield',
        value: '$4.2M',
        note: 'ARR protected by renewal-first sequencing',
      },
      {
        label: 'Growth drag',
        value: '-11%',
        note: 'Demand pressure slows without package cleanup',
      },
      {
        label: 'Governance queue',
        value: '14',
        note: 'Aged approvals still blocking scenario speed',
      },
      {
        label: 'Rollback watch',
        value: '3',
        note: 'Initiatives likely to compress trust if promoted now',
      },
    ],
    forecast: [
      { month: 'Jul', value: 54, note: 'Renewal focus' },
      { month: 'Aug', value: 50, note: 'Freeze hiring' },
      { month: 'Sep', value: 46, note: 'Governance drag' },
      { month: 'Oct', value: 49, note: 'Package reset' },
      { month: 'Nov', value: 52, note: 'Trust recovery' },
      { month: 'Dec', value: 55, note: 'Stabilized base' },
    ],
    exposureBands: [
      {
        label: 'Retention confidence',
        probability: 'High sensitivity',
        consequence: '$1.6M swing',
        note: 'Support friction and access-review lag compound quickly under defensive tempo.',
      },
      {
        label: 'Pipeline creation',
        probability: 'Moderate sensitivity',
        consequence: '$890K swing',
        note: 'Demand can recover later, but packaging confusion wastes spend today.',
      },
      {
        label: 'Operator burnout',
        probability: 'High sensitivity',
        consequence: '11 business days',
        note: 'Execution drag grows fast when too many fixes are pushed into one sprint.',
      },
    ],
    briefingPanels: [
      {
        title: 'What changed',
        copy: 'Two approval paths aged out, partner quality softened, and support friction started leaking into renewals.',
      },
      {
        title: 'Why it matters',
        copy: 'The downside branch becomes rational when trust protection matters more than top-line acceleration.',
      },
      {
        title: 'What to do next',
        copy: 'Pause broad rollout, preserve renewals, and clear the identity queue before reopening demand pressure.',
      },
    ],
    actionRows: [
      {
        owner: 'Customer Success',
        action: 'Route high-risk renewals into trust recovery plan',
        branch: 'Downside',
        due: 'Today',
      },
      {
        owner: 'Security Ops',
        action: 'Clear two aged access-review blockers',
        branch: 'Downside guardrail',
        due: 'Wed',
      },
      {
        owner: 'RevOps',
        action: 'Freeze broad promotion until package review closes',
        branch: 'Downside discipline',
        due: 'Thu',
      },
    ],
    ledgerRows: [
      { name: 'Approval aging', sensitivity: 'High', impact: 'Negative', state: 'Unstable' },
      { name: 'Renewal health', sensitivity: 'High', impact: 'Negative', state: 'Watch' },
      { name: 'Partner quality', sensitivity: 'Moderate', impact: 'Mixed', state: 'Degrading' },
      { name: 'Operator capacity', sensitivity: 'High', impact: 'Negative', state: 'Tight' },
    ],
    directive: {
      eyebrow: 'Lead orchestration',
      title: 'Protect trust first, then rebuild optionality.',
      copy: 'This branch is about keeping credibility intact long enough to earn the right to push harder later.',
    },
  },
  base: {
    color: '#7dd3fc',
    modeLabel: 'BASE MODE',
    context: 'MARKET_SIM_ALPHA_01',
    description: 'Steady execution with validated tests promoted carefully across growth, revenue, and governance.',
    confidence: '94.2%',
    confidencePercent: 94,
    driftLabel: 'Minimal',
    driftPercent: 12,
    summaryTiles: [
      {
        label: 'Live pricing surface',
        value: '$6.4M',
        note: 'ARR under active scenario review',
      },
      {
        label: 'Weighted lift',
        value: '+4.8%',
        note: 'Qualified conversion from proven motions',
      },
      {
        label: 'Elasticity confidence',
        value: '81%',
        note: 'Signal quality is strong enough to commit',
      },
      {
        label: 'Rollback watch',
        value: '2',
        note: 'Tests under pressure but still governable',
      },
    ],
    forecast: [
      { month: 'Jul', value: 58, note: 'Base commit' },
      { month: 'Aug', value: 62, note: 'Pricing lane' },
      { month: 'Sep', value: 67, note: 'Partner recovery' },
      { month: 'Oct', value: 71, note: 'AI throughput' },
      { month: 'Nov', value: 76, note: 'Retention hold' },
      { month: 'Dec', value: 82, note: 'Upside ready' },
    ],
    exposureBands: [
      {
        label: 'Pipeline creation',
        probability: 'High sensitivity',
        consequence: '$1.8M swing',
        note: 'Strongest response to packaging clarity and partner routing.',
      },
      {
        label: 'Retention confidence',
        probability: 'Moderate sensitivity',
        consequence: '$1.1M swing',
        note: 'Depends on trust recovery, access review cleanup, and support friction.',
      },
      {
        label: 'AI operating cost',
        probability: 'Moderate sensitivity',
        consequence: '$420K swing',
        note: 'Moves with fallback rate and release-gate strictness.',
      },
    ],
    briefingPanels: [
      {
        title: 'What changed',
        copy: 'Pipeline confidence improved after pricing clarity work, but governance lag still limits how fast leadership can press the advantage.',
      },
      {
        title: 'Why it matters',
        copy: 'The upside branch is viable only if operational drag is reduced before revenue teams push harder on demand and expansion.',
      },
      {
        title: 'What to do next',
        copy: 'Promote the base-case plan, clear two governance blockers, and reopen the upside branch once owner capacity is credible.',
      },
    ],
    actionRows: [
      {
        owner: 'Revenue Ops',
        action: 'Advance packaging refresh to broad review',
        branch: 'Base case',
        due: 'Tue',
      },
      {
        owner: 'Security Ops',
        action: 'Resolve two aged access-review paths',
        branch: 'Base guardrail',
        due: 'Wed',
      },
      {
        owner: 'Growth PM',
        action: 'Prepare upside allocation scenario for partner motion',
        branch: 'Upside option',
        due: 'Thu',
      },
    ],
    ledgerRows: [
      { name: 'Packaging clarity', sensitivity: 'High', impact: 'Positive', state: 'Stable' },
      { name: 'Identity backlog', sensitivity: 'High', impact: 'Negative', state: 'Watch' },
      { name: 'Partner quality', sensitivity: 'Moderate', impact: 'Positive', state: 'Recovering' },
      { name: 'AI release gates', sensitivity: 'Moderate', impact: 'Positive', state: 'Controlled' },
    ],
    directive: {
      eyebrow: 'Lead orchestration',
      title: 'Stabilize the base, then earn the upside branch.',
      copy: 'This is orchestration logic for operating systems, not just one more analytics panel.',
    },
  },
  upside: {
    color: '#86efac',
    modeLabel: 'UPSIDE MODE',
    context: 'EXPANSION_ACCEL_24Q4',
    description: 'Acceleration posture once trust, packaging, and approval blockers are cleared.',
    confidence: '88.6%',
    confidencePercent: 89,
    driftLabel: 'Watchable',
    driftPercent: 28,
    summaryTiles: [
      {
        label: 'Expansion lane',
        value: '$8.9M',
        note: 'Pipeline-ready revenue under accelerated promotion',
      },
      {
        label: 'Demand release',
        value: '+12.7%',
        note: 'Faster top-of-funnel response after friction removal',
      },
      {
        label: 'AI throughput',
        value: '2.3x',
        note: 'Operator capacity expands with workflow automation',
      },
      {
        label: 'Risk buffer',
        value: '6 days',
        note: 'Governance still needs room before scale presses harder',
      },
    ],
    forecast: [
      { month: 'Jul', value: 61, note: 'Clear blockers' },
      { month: 'Aug', value: 69, note: 'Partner scale' },
      { month: 'Sep', value: 78, note: 'Lifecycle pull' },
      { month: 'Oct', value: 88, note: 'AI ops lift' },
      { month: 'Nov', value: 97, note: 'Expansion motion' },
      { month: 'Dec', value: 108, note: 'Upside realized' },
    ],
    exposureBands: [
      {
        label: 'Partner-sourced pipeline',
        probability: 'High sensitivity',
        consequence: '$2.4M swing',
        note: 'The upside branch leans heavily on better-assisted sourcing quality.',
      },
      {
        label: 'Support readiness',
        probability: 'Moderate sensitivity',
        consequence: '$780K swing',
        note: 'Demand acceleration fails if trust support cannot keep pace with change volume.',
      },
      {
        label: 'AI governance drag',
        probability: 'Moderate sensitivity',
        consequence: '7 business days',
        note: 'Approval congestion quickly eats the timing advantage of the upside branch.',
      },
    ],
    briefingPanels: [
      {
        title: 'What changed',
        copy: 'Partner quality, pricing clarity, and AI throughput are finally aligned enough to support a real acceleration case.',
      },
      {
        title: 'Why it matters',
        copy: 'The upside branch becomes rational only when confidence, not optimism, is carrying the forecast.',
      },
      {
        title: 'What to do next',
        copy: 'Open the assisted expansion lane, press lifecycle motion, and keep governance close enough to preserve trust.',
      },
    ],
    actionRows: [
      {
        owner: 'Growth PM',
        action: 'Expand partner-led budget into assisted conversion lanes',
        branch: 'Upside',
        due: 'Tue',
      },
      {
        owner: 'AI Platform',
        action: 'Promote the next workflow cohort with approval guardrails intact',
        branch: 'Upside support',
        due: 'Wed',
      },
      {
        owner: 'Executive Ops',
        action: 'Prepare acceleration briefing for board and leadership review',
        branch: 'Upside narrative',
        due: 'Fri',
      },
    ],
    ledgerRows: [
      { name: 'Partner velocity', sensitivity: 'High', impact: 'Positive', state: 'Accelerating' },
      { name: 'Lifecycle response', sensitivity: 'Moderate', impact: 'Positive', state: 'Strong' },
      { name: 'Support load', sensitivity: 'Moderate', impact: 'Negative', state: 'Watch' },
      { name: 'Governance timing', sensitivity: 'High', impact: 'Negative', state: 'Near limit' },
    ],
    directive: {
      eyebrow: 'Lead orchestration',
      title: 'Push the upside, but keep trust within one decision horizon.',
      copy: 'Expansion is earned when the system can move faster without losing narrative control or governance discipline.',
    },
  },
}
