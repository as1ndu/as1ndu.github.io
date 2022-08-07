---
title : "Proof of work on layer two"
slug : "proof-of-work-on-layer-two"
draft : true
tags : ["proof-of-work"]
date : "2019-11-16"
number: "002"
hidden: false
---

Ever since Ethereum launched, they have had proof of stake on their road map. The main decision often cited from this transition is the claim that Bitcoin’s proof of work is a “waste of electricity”.
Even the [creator of C++ complained about it](https://www.youtube.com/watch?v=uTxRF5ag27A). But now I am talking about why we may need proof of work on layer 2 yet everyone is trying to get rid of it from layer 1 (the networking layer at which [consensus](https://www.investopedia.com/terms/c/consensus-mechanism-cryptocurrency.asp) is made). Why?
First, before we think of substitutes to proof of work, we need to acknowledge the role of  proof of work in  a system like bitcoin.

Emin Gün Sirer has a nice [micro lecture](https://twitter.com/el33th4xor/status/1006931729679044608?lang=en) explaining what proof of work is.
The conclusion is that proof of work is a [sybil resistance](https://en.wikipedia.org/wiki/Sybil_attack) mechanism. Infact, it was invented exactly for that [back in 1990’s](https://en.wikipedia.org/wiki/Hashcash) for Usenet.

Basically, it’s makes creating a block expensive so as to limit how many blocks can be created with in a fixed time period.
So if we are to substitute proof of work, then it’s substitute needs to be capable of Sybil resistance or better.

## Sybil attacks beyond layer I

Proof of Stake is capable of  mitigating sybil's on layer one however, the concerns of Sybil attacks a stretch beyond layer one. For instance,  let’s say I have a layer 2 based messaging app.  How do you stop infinite streams of messages from spammers?
You have several options ;

- First you can use the [earn.com](https://www.inc.com/sonya-mann/earn-com-21-co-cryptocurrency-email.html) model where you require every sender to pay a fee to the recipient.
Great! but this doesn’t scale properly. Imagine a Reddit forum where you had to pay $2 every-time you want to post a comment. Even if you can afford it, many people will not & you will be the only one in your forum.
- Another option is now to use proof of work. For instance, before you are  allowed to send a message or post on forum, You have to do a small proof of work before you post. You can adjust the difficulty of the pow based on the rate at which someone is posting.

Proof of work can also be used to establish decentralized identity for reputation systems in a way similar to [fidelity bonds](https://en.bitcoin.it/wiki/Fidelity_bonds).
They work (fidelity bonds) by someone provably destroying bitcoins, to establish identity. The idea is that destroying bitcoins is expensive, so it’s less likely that the identity is duplicate, as duplicate identities are be expensive to make. Proof of work can also be as expensive as provably burning bitcoins. So instead of destroying bitcoins we can just set a pow difficulty & give agents what ever reputation tokens they deserve as long as they solve a given proof of work puzzle.
