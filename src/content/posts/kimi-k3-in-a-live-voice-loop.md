---
title: "Kimi K3 in a live voice loop"
publishedAt: 2026-09-21
description: "Benchmarks measure answers. A tutor that talks needs the first sentence fast, and that changes how you pick a model."
isPublish: true
---

Moonshot's **Kimi K3** has been my teaching model on Fireworks for a while now, so here are some notes on running a big open-weights model inside a product where a voice is waiting on every token.

## Latency is a different benchmark

Leaderboards score the finished answer. In a live tutor the student hears the *first sentence*, and the pen starts writing on the whiteboard at the same moment. So the numbers I actually watch are:

- **time to first token**, because that's dead air;
- **steadiness of the stream**, because a stall mid-sentence makes the voice stop while the pen keeps moving;
- **format discipline**, because the model has to emit structured `[STEP]` and `WRITE` blocks that the board can parse in real time.

K3 is strong on the third point. It follows a strict output grammar better than most models I've tried, which matters more than a few points on a reasoning eval when a malformed block means the board draws nothing.

## Streaming into speech

The trick that helped most wasn't the model at all. Text is cut into sentences as it streams and each sentence goes straight to TTS, with the next one generating ahead on its own context. The model never waits for audio and the audio rarely waits for the model.

## What I'd tell anyone choosing a model in 2026

Pick on the property your product actually exposes to users. For a chatbot that might be raw quality. For a voice product it's the shape of the stream. Run your real pipeline against two or three candidates, keep the harness, and be ready to swap providers. The model you launch with won't be the one you're running in three months.
