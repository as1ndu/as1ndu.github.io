---
title : "The use of a blockchain"
slug : "the-use-of-a-blockchain"
draft : false
tags : ["fintech", "blockchain"]
date : "2021-04-26"
number: "007"
hidden: false
---

At the time of this writing, the price of [Bitcoin is up again](https://www.ft.com/content/3e196e5c-afb7-4450-a5cc-3e4f7d17a40c) and,  the "blockchain" is part of a [stack to over 5,000 startups](https://angel.co/blockchains).

But what exactly is the "blockchain" proposition? Most information out there seems to be repeating words like "decentralized" without a coherent explanation, others are simply selling [pre-packaged notions of monetary theory](https://www.amazon.com/Bitcoin-Standard-Decentralized-Alternative-Central/dp/1119473861).

Even "big brains" like Robin Hanson and Bruce Schneir don't seem to understand what exactly the blockchain proposition is [^1]

The reason for incoherence that there are too many wages, pitch decks  &  hopes of getting rich that rely on this proposition — everyone has their own spin.

In writing this article I am aiming to improve that, but to understand what a blockchain is, we need to first understand **Bitcoin**, where it came from, why it was invented, and why it works (not how it works).

***

## The principle-agent problem

On the bitcoin blockchain, whenever a new block is created i.e a slot for storing  transactions on the bitcoin network, the creator of the block (called the miner) is allowed by the network to pay himself a predetermined amount of money as compensation for use of their computational resources.

This transaction is called a [coinbase transaction](https://blog.cex.io/bitcoin-dictionary/coinbase-transaction-12088), and it's also what the silicon valley startup of the same is referencing [^2].

On the first ever block, the so called "Genesis Block"  Satoshi Nakamoto, Bitcoin's creator left  a [brief note](https://en.bitcoin.it/wiki/Genesis_block).

>"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"

To provide context to the above quote, American Banks had scammed their citizens though the use of political figures[^3] — people that where supposed to protect them from such abuse.

This problem is what is referred to as the **principal-agent problem** [^4].
The _principle_ , in this case the citizens of America delegated powers to their government  — the _agent_ that was supposed to execute actions that are in the best interest of the citizens.

But when things don't go according to plan ([like  in the 2009 financial crisis](https://www.youtube.com/watch?v=_ZAlj2gu0eM)), civilized  people tend to cannibalize each other, so bankers got paid with public money via "bailouts"[^5],  government agents  also  got paid[^6] and the citizens where kicked in the teeth[^7].
The notion of [collision](https://en.wikipedia.org/wiki/Collusion) had occurred [^8].

The core implication of the principal-agent problem however, is that if you delegate power over your assets to someone other that yourself, _you could get scammed_.

## Now, how do you solved this principal-agent  problem?

This is the essence of Satoshi Nakamoto's problem, and the solution was Bitcoin.

Bitcoin solves this problem by using a decentralized group of agents, the so called miners are free to drop in and out of the Bitcoin network as they please — [a feature known as fault tolerance](https://www.nasdaq.com/articles/byzantine-fault-tolerance-key-blockchains-2017-06-29).

So if a miner fails for some reason (gets married, power cuts, internet cuts, hardware failure, government intervention e.t.c)  anyone is free to replace their spot.

The Bitcoin network is held together by a series of rules, the [consensus rules](https://en.bitcoin.it/wiki/Protocol_rules) (a sort of constitution if you will).
And for the important question, _why do miners follow these rules?_ ,  Why should they exclusively rely on the kindness of strangers?

Why don't they cheat, lie and steal from each other (if this happens, the bitcoin network will fall apart)? Especially given that [_hundreds of billions of dollars are at play_](https://coinmarketcap.com/currencies/bitcoin/).

The reason why miners don't defect from consensus rules is because they are bonded to each other — similarly to how criminal suspects pay a bond (to the courts) to make sure they don't run away (the bond is paid back if you show up to court).

## Bonding of miner's

Miners participate on the bitcoin network to earn from two sources of revenue.

- **First** , a self-subsidy permitted by the network I outlined previously as the "coinbase transaction", currently its 12.5 BTC (about $600k given current BTC prices at $50k).
- **Second** , miner's revenue originates transaction fees from users on the bitcoin network transferring money this amount depends of the level of traffic so it can be zero and way more.

Now for the bond, miners bond to each other though spending  computational power measured in hashes per second, not money.
A procedure known as "proof of work", but in my opinion is simply an auction [^9].

Whoever wins this  auction (spends the most hashes per second), is given a golden ticket [^10] — the authority to collect miner revenue such as transaction fees & the coinbase transaction. This auction happens approximately every 10 minutes [^11].

For a miner to be profitable, they need to satisfy this condition,

```expenses_on_computational_power_used_to_get_golden_ticket < coinbase_subsidy + transaction_fees```

To explain it further, _the cost of becoming a miner_ should be _less_ than _the sum of all potential revenues_.

There is however one small detail that is very important, the cost of being a miner is all paid  a head of time that is, before they are allowed to claim any of the revenues.

This means that before before the miner actually starts aggregating transactions, they are already in debt.
When this happens, we can say the miners are _bonded_.

## Making cheating irrational

Every transaction on the blockchain is attributable beyond reasonable doubt via [public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography).

So if a miner is caught making fraudulent transactions (transactions that violate the consensus rules) they are instantly replaced by other miners — leaving them with the losses incurred through the cost of being a miner (proof of work).

The fraudulent miners,  _in all possible future secenarios end up loosing money_. Bitcoin therefore works by making it _"irrational"_ to cheat on the network.

By _irrationality_ I mean the strategy  of cheating is harmful to one's self (in terms of earnings). And the optimal or beneficial strategy (in terms of earnings) is to play by the consensus rules.

As a result, bitcoin is a kind of monetary institution that has never existed before. One that isn't governed by politicians, directors or rule of law its an institution constructed upon game theory, specifically the notion of expensive talk (the inverse of [cheap talk](https://en.wikipedia.org/wiki/Cheap_talk)), also referred to as skin in the game [^12].

Bitcoin is  inherently a self-organizing, self-financing monetary institution and payment network. One that of free of the principal-agent problem[^13].

## Applications of blockchain.

Now that I have  hopefully clarified that _the value proposition of a blockchain is to solve  the principal-agent problem_, Where else does the problem exist?

The principal-agent problem occasionally rares its ugly head,  as observed recently with the  Wirecard, a payment service that [defrauded its customers of over $2 Billion dollars](https://www.dw.com/en/how-wirecards-19-billion-could-go-missing/av-57284578).

These things simply cannot happen if a blockchain is used for managing and making financial transactions.

Places where the principal-agent problem  persists include bank accounts (banks do mismanagement customer deposits [^14]), brokerage accounts (what if Robin Hood is an elaborate scam?[^15]), PayPal freezing your money for unexplained reasons[^16], management of donations for an open source[^17].

The irony is that "crypto" companies specializing in blockchain applications like Coinbase have re-introduced  the principal-agent problem by taking control of users assets through owning their private key.
But exchanges do get "mismanaged" as we have seen with [Mt. Gox](https://www.wired.com/2014/03/bitcoin-exchange/), [Quadriga](https://www.bbc.com/news/world-us-canada-47203706),  and mostly recently a [Turkish exchange](https://www.aljazeera.com/economy/2021/4/22/turkey-crypto-exchange-ceo-flees-country-as-probe-is-launched).
Unfortunately, recovering stolen crypto funds is  almost impossible.

Another category of "crypto" companies that have re-introduced the principal-agent problem are "permissioned" blockchain startups (take [R3](https://www.r3.com/) or IBM's [permissioned blockchain](https://www.ibm.com/blockchain/platform)) where the chain is controlled by a single corporation.

This is just a slow database,  given that the corporation has a monopoly on transactions and by this, can administer dishonest behavior without penalty.

So a quick heuristic of identifying blockchain "snake-oil" is to see if it solves a principal-agent problem. If it doesn't, its a waste of time.

Only business applications that have a principal-agent problem need a blockchain nothing else does.


[^1]: Robin Hanson called it ["a tough call"](https://www.overcomingbias.com/2015/02/31017.html) and Bruce Schneier thinks it's out right useless. He thinks it just [shifts trust around](https://www.wired.com/story/theres-no-good-reason-to-trust-blockchain-technology/)
[^2]: Coinbase recently listed publically in a ["liquidity event"](https://www.coindesk.com/coinbase-ipo-not-ipo-direct-listing)
[^3]: Lawmakers explicitly passed a law to buy ["toxic assets"](https://en.wikipedia.org/wiki/Toxic_asset) from Banks. Thus transfering hundreds of billions of dollars in _losses_ from the private sector to the citizens.
[^4]: The [principal-agent problem](https://www.investopedia.com/terms/p/principal-agent-problem.asp) also goes by the name "agency dilema", or informally "the sucker problem"
[^5]: [The Troubled Asset Relief Program](https://en.wikipedia.org/wiki/Troubled_Asset_Relief_Program)  ot "TARP" was designed to facilitate this.
[^6]: [Conflict's of interest were pointed out](https://en.wikipedia.org/wiki/Emergency_Economic_Stabilization_Act_of_2008#Potential_conflict_of_interest), and some  people alledge [Bob Rubin collected over $120M from CitiBank](https://fundamentalfinanceplaybook.com/bob-rubin-trade/) in the decade preceding the 2009 financial crisis.
[^7]: Tax payer money was used to finance all of this.
[^8]: Nomi Prins has a great book where she articulates the phenomena  of [collusion in central banking](https://www.amazon.com/Collusion-Central-Bankers-Rigged-World/dp/1568585624).
[^9]: Most people will agree that a proof of work epoch is a competition. By this I am analogizing it as an [auction](https://en.wikipedia.org/wiki/Auction) where the currency used is computational power not cash.
[^10]: The golden ticket or [golden nonce](https://github.com/progranism/Bitcoin-JavaScript-Miner/blob/master/miner.js#L44), is a value you get only when you spend the most hashes per second. It allow one to construct a coinbase transaction. And it's only valid for about 10 min.
[^11]: I am referring to the element of [blocktime](https://www.investopedia.com/terms/b/block-time-cryptocurrency.asp). Which is approximately every 10 minutes on Bitcoin.
[^12]: Nassim Taleb talks about how "dis-incentives" should be used for countering issues of the principle-agent problem.
[^13]: Of course not by 100%, But at leave it "dis-incentivises" opportunistic behavior by taking the monetary gain out of it. Breaking th law on the blockchain literally doesn't pay.
[^14]: I suggest you look into the story of then, Britain's second oldest bank, [Baring Bank](https://en.wikipedia.org/wiki/Barings_Bank), [I suggest you watch "25 Million Pounds"](https://thoughtmaybe.com/25-million-pounds/).
[^15]: You just can't know 😂
[^16]: [Paypal freezing](https://www.paypal.com/us/brc/article/understanding-account-limitations) can put some merchant's earnings at risk.
[^17]: It would be a nice idea to have a way open source curators could have a trust minimized way of managing their donations.



