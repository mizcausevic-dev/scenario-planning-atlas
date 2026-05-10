export const summaryTiles = [
  {
    label: 'Modeled branches',
    value: '3',
    note: 'Downside, base, and upside operating paths',
  },
  {
    label: 'Decision levers',
    value: '11',
    note: 'Commercial, hiring, AI, and governance moves',
  },
  {
    label: 'Exposure heat',
    value: '$4.1M',
    note: 'Revenue and retention surface under sensitivity analysis',
  },
  {
    label: 'Move urgency',
    value: '9',
    note: 'Actions requiring owner commitment this week',
  },
]

export const scenarioColumns = [
  {
    name: 'Downside',
    kicker: 'Defensive posture',
    probability: '24%',
    outlook: 'Protect margin and trust while slowing hiring and promotion velocity.',
    moves: ['Delay broad rollout', 'Freeze new vendor exposure', 'Shift to renewal preservation'],
  },
  {
    name: 'Base case',
    kicker: 'Controlled execution',
    probability: '51%',
    outlook: 'Keep validated experiments moving while preserving executive confidence.',
    moves: ['Promote proven pricing lane', 'Resolve identity backlog', 'Maintain AI release discipline'],
  },
  {
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
    detail: 'Clarify commercial packaging before adding demand pressure.',
    state: 'ready',
  },
  {
    title: 'Partner allocation',
    span: 'tall',
    detail: 'Move budget toward high-signal referral lanes if forecast confidence holds.',
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

export const exposureBands = [
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
    note: 'Moves with prompt fallback rate and release-gate strictness.',
  },
  {
    label: 'Governance drag',
    probability: 'High sensitivity',
    consequence: '9 business days',
    note: 'Approval aging compounds quickly when scenario tempo increases.',
  },
]

export const briefingPanels = [
  {
    title: 'What changed',
    copy: 'Pipeline confidence improved after pricing clarity work, but identity cleanup and governance lag still limit how fast leadership can press the advantage.',
  },
  {
    title: 'Why it matters',
    copy: 'The upside branch is viable only if operational drag is reduced before revenue teams push harder on demand and expansion.',
  },
  {
    title: 'What to do next',
    copy: 'Promote the base-case plan, clear two governance blockers, and reopen the upside branch once owner capacity is credible.',
  },
]

export const actionRows = [
  {
    owner: 'Revenue Ops',
    action: 'Advance packaging refresh to broad review',
    branch: 'Base case',
    due: 'Tue',
  },
  {
    owner: 'Security Ops',
    action: 'Resolve two aged access-review paths',
    branch: 'Downside guardrail',
    due: 'Wed',
  },
  {
    owner: 'Growth PM',
    action: 'Prepare upside allocation scenario for partner motion',
    branch: 'Upside option',
    due: 'Thu',
  },
]

