---
title: My Favorite 39C3 Talks
draft: false
date: 2026-03-01
description: I decided to look through the 39C3 playlist and watched the talks
  that caught my attention
---
The 39C3, is the 39th Chaos Communication Congress event, based in Germany. \[^1\] I have often seen people share talks individually and found some interesting.

The list of talks for the 39th event for C3 has been publicly released so I decided to look through the playlist and watched those that caught my attention. \[^2\]

I believe we could learn alot from all of the talks. But I wanted to share my favourite highlights.

## Harvesting Data from Satellites

In this talk, two researchers talk about using ~ $500 equipment to evesdrop satellites belonging to the Military, Payment Processors and Airline Companies.\[^3\]

A depressing realisation was that alot of the data was in plain text.

What was also very laughable was that one military satellite simply shuffled strings like `{military: true}` to `{imilatyr : rtue}` (in an attempt to secure data?)

![](/39C3-Talks/payment-details.jpg)

**Slide From Talk:** _It turns out you could see unencrypted payment details (card numbers, card names and balances) of people when they use payment processors._

## How 0-Click Exploits Actually Work

I always wondered how 0-click exploits, a way hackers can get into your device without requiring you to ever click anything work.

This video walks you through a step by step process on how hackers find such an exploit and how they use it. Demos are made for WhatsApp & iMesages on iOS and Samsung. \[^4\]

## CPUs are permanent vulnerabilities

The talk is titled "Spectre in the real world: Leaking your private data from the cloud with CPU vulnerabilities" \[^5\]

To quote the speaker;

> Transient execution CPU vulnerabilities, like Spectre, have been making headlines since 2018.
> 
> However, their most common critique is that these types of vulnerabilities are not really practical.
> 
> Even though it is cool to leak `/etc/shadow` with a CPU bug, it has limited real-world impact.
> 
> In this talk, we take Spectre out for a walk and let it see the clouds, by leaking memory across virtual machine boundaries at a public cloud provider, bypassing mitigations against these types of attacks.

Spectre is a bug at the CPU level (software can't fix it), and the author mentions that it is impractical to simply replace all CPUs susceptible to this.

In the demo, he shows that you can extract secrets from another VM, provided that both VMs are on the same physical server – you don't even need to have access to the other VM.

This was a very good pitch on why a cloud instance should rather be hosted on a dedicated server, instead of opting for a cheaper shared machine.

## The Current Drone wars

This talk had nothing to do with cyber security, but was more about, the use of drones in warfare. It presents the historical use of drones in war and how it has changed with time, to what it is today. \[^6\]

The use of drones in warfare was way older that I thought. All the way from WWI used for information gathering.

![](/39C3-Talks/remote-control-drone.jpg)

**Silde From Talk:** _Remote control drone from 1930s_

[Add Comment](https://buttondown.com/the-black-epicure/archive/my-favorite-39c3-talks/#comments)

\[^1\]: Official [website for C3](https://www.ccc.de/en)

\[^2\]: YouTube [Playlist of 39C3 talks.](https://youtube.com/playlist?list=PL_IxoDz1Nq2ajswL6wmP1qxyh-Iqon5oz)

\[^3\]: [Don’t look up: There are sensitive internal links in the clear on GEO satellites](https://www.youtube.com/watch?v=fM5w7bFNvWI)

\[^4\]: [A Deep Dive into WhatsApp 0-Click Exploits on iOS and Samsung Devices](https://www.youtube.com/watch?v=cbSgKmLA1AI)

\[^5\]: [Spectre in the real world: Leaking your private data from the cloud with CPU vulnerabilities](https://www.youtube.com/watch?v=_fPanvQcwe4)

\[^6\]: Talk on the [Current Drone Wars](https://www.youtube.com/watch?v=3CvDsqZvIuw)