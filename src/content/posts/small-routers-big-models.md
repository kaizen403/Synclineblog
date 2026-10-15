---
title: "Small routers, big models: the 2026 AI stack"
publishedAt: 2026-09-26
description: "September's releases point one way: frontier models for the hard part, small typed models deciding when to call them."
isPublish: true
---

September has been busy. New frontier releases keep pushing reasoning and coding further, open-weights models like Kimi K3 are close enough to the top that serving cost decides more than quality does, and a new class of small decision models like **Jev** is showing up on gateways.

Put those together and a pattern for production apps falls out.

## Three layers

1. **A frontier model for the hard work.** Planning, teaching, writing code. This is where quality pays for itself.
2. **A cheap model for the easy work.** Follow-ups, short clarifications, formatting. Most traffic looks like this.
3. **A router between them.** Something fast and typed that decides which of the two a request deserves, and whether extra work like a diagram is worth doing at all.

The router used to be a pile of `if` statements. Now it can be a model, which is both exciting and a trap: one more vendor, one more call per request, one more thing to fail at 2 a.m.

## How to adopt it without regret

- **Shadow first.** Log the router's decision next to what you actually did, and only let it act once the logs say it's right.
- **Defaults everywhere.** Every call to the router needs a fallback that keeps the product working if it disappears.
- **Measure the ceiling.** If your existing planner already gets the decision right most of the time, the router can only win the remainder. Know that number before you pay for it.

The models will keep changing every few weeks. The architecture around them (fallbacks, shadow logs, a harness that replays real traffic) is the part that compounds.
