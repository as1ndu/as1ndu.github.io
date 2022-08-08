---
title : "The Wisdom of rationals"
slug : "the-wisdom-of-rationals"
draft : false
tags : ["prediction-markets", "homo-economicus"]
date : "2020-06-26"
number: "006"
hidden: false
---

For years now I have been fascinated by prediction markets. The source of excitement is  the idea is that you can use financial markets to do [inference](https://en.wikipedia.org/wiki/Inference) — just like machine learning.

A famous example of such prediction markets are the orange futures. The orange futures market is one that allows entities
to buy oranges in advance.
How it works, is that one can pay $1,000 to receive 1,000 oranges that will be delivered next year.
An interesting side effect of this orange futures market is how it [accurately predicts temperatures in certain locations](https://selectabstracts.wordpress.com/2011/11/16/can-orange-juice-help-forecast-the-weather/) more specifically, the temperature of the locations where the oranges are from.

But how is information on temperature reflected in the market meant for selling oranges? Well, what actually happens, is that the [orange futures prices rise towards cold weather](https://www.wsj.com/articles/orange-juice-futures-soar-as-weather-turns-cold-1416604154) and drop towards warm weather.

This phenomenon can be easily explained by the fact that cold weather reduces orange yields thus causing prices to rise (reasoning from the perspective of supply & demand).
This explanation however doesn't account for the fact that the market prices start reacting to temperature changes
_before_ they occur. It is as if the market knew what the temperature would be _in the future_. Hence the name prediction markets.

***

## How to buy information from the future

In the example above, predicting temperatures was just a side effect of the orange futures market.
But how do we design a market to predict an explicit event? For example, say you want to know if it will
rain tomorrow.

- Step 1: Declare an event that will reveal this information  —  Say you want a market that can predict the weather.
  For the rain example we can declare the event "It will rain tomorrow".
- Step 2: Define events outcome  —  Formalize the outcomes of the event. The event "It will rain tomorrow" has two out comes *Yes* and *No*.
- Step 3: Sell betting tickets  —  Sell tickets for the event outcomes "It will rain tomorrow". Buyers of the tickets have two options
*Yes* tickets and *No* tickets at equal prices. Buyers are allowed to trade tickets with each other.
  - If it _does rain tomorrow_, those with **Yes** tickets receive money 2 times the price of the tickets & those with **No**
        get nothing.
  - If it _does not rain_, those with **Yes** tickets get nothing & those with **No** tickets get money 2 times the price
        of the ticket.

Loosely following assumptions made by prediction market theory, the true information on the event outcome for "It will rain tomorrow" will be
reflected reflected in the prices at which buyers are trading the tickets. _The ticket with the highest price is the event outcome that is most likely to occur_. If **Yes** tickets are selling for _$2_ & **No** tickets are selling for _$1_. Then we would assume that it will probably rain tomorrow.

## The assumptions of prediction markets

Prediction markets operate upon 3 main assumptions. The first assumption is that markets are made up exclusively of 3 types agents.
A classification of these agents is as follows.

1. **The pure gambler**, this one doesn’t have the necessary meteorological information. He/She is simply betting at random.
2. **The accurate information trader**, these traders have information they think points to the fact that it will rain & they are right.
3. **Inaccurate information traders**, have information they think points to the fact that it will rain. _But_ they are wrong.

The second assumption, is that **The Information is predictable**, this means that amongst all the market participants, at least agent is an **Accurate information trader**.

The last assumption is that people in these market agents will perform a **Rational participation**. Rational participation means that, speculators  will always prefer to place bets on event outcomes which they think they will make money & they will decline from participating in bets where they think they will lose money. For instance, a rational person should not be a pure gambler because they have higher  chances of making  money by betting on information they know at least something about.

The accurate information trader on the other hand will flourish in this market as they will always have the edge in the market & thus make money off clueless gamblers & people signaling wrong information. Meanwhile, agents that always bet on wrong information will go bust or switch to markets where they do better. This is what makes prediction makers so resistant to market manipulation, _it’s a system where agents signaling wrong information actively subsidizes people signaling  correct information._

In theory, markets that repeat themselves should improve with every iteration (since most agents that signal wrong information are bust).
Provided all agents have access to finite amounts of money.

## How to break a prediction market

Prediction markets may be highly resistant to manipulation, but that does not mean they cannot break.
For a market to continue doing correct inference (accurate predictions), the sum of money held by the
class of **Accurate Information traders** should always be greater than the sum of money collectively owned by the rest of the agents.
This is because all agents have finite amounts of money. And it will not be possible to offset noise incorporated into the market by
agents with bad information.
This may however improve in subsequent iterations of the market (agents signaling wrong information go bust) thus giving prediction markets a self healing like property.

It is often mentioned that prediction markets are based on "The wisdom of the crowds" & that creates a false analogy where people this it works for the same reason democracy does, but they are actually based on the wisdom of the rationals, _a system where people don’t talk about what they don’t know_.
