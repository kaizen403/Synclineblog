---
title: "Jev: a model whose whole job is deciding"
publishedAt: 2026-09-24
description: "Typesafe AI's Jev landed on the Vercel AI Gateway. It doesn't write answers; it decides what should."
isPublish: true
---

Most model launches are about who writes the best essay or solves the hardest olympiad problem. **Jev** (`typesafe-ai/jev`, now on the Vercel AI Gateway) is a different kind of release: it's an evaluator. You hand it a request and a set of options, and it returns a structured decision. It doesn't produce the answer itself.

That sounds small, and that's the point. Inside any production LLM app there are dozens of tiny judgement calls that we currently either hardcode or pay a frontier model to make:

- Does this question actually need a diagram?
- Can the cheap model handle this follow-up, or does it need the big one?
- Is this generated lesson good enough to ship?

## How I'm wiring it into Accelute

[Accelute](https://accelute.co) is the AI whiteboard tutor I'm building. Every turn already goes through a planner, so the first experiment is narrow: let Jev give a second opinion on *visual need* and on *notes chat routing*.

The routing has four modes:

1. **off**: Jev is never called.
2. **cheap**: always use the cheap generator.
3. **shadow**: answer with the main model as usual, but record what Jev *would* have picked.
4. **jev**: use the cheap model only when Jev explicitly says it's safe.

Shadow mode is the one that matters. It costs one extra call per turn and changes nothing for the student, but after a few hundred real lessons I'll know whether Jev agrees with the planner, where it disagrees, and whether those disagreements are right.

## The design rule

Jev is never allowed to break a turn. If the gateway errors, times out, or returns something unparseable, every call site falls back to its default and the lesson carries on. A decision model you can't remove in one line is a dependency, not an optimization.

## Why this category is interesting

Frontier models keep getting better and more expensive per call. Small, fast, typed decision models are the counterweight: they let you spend the expensive tokens only where they change the outcome. I expect most serious AI products to end up with a router like this in the hot path. The open question is whether a general model like Jev beats a few lines of task-specific logic, and that's exactly what shadow mode is going to tell me.
