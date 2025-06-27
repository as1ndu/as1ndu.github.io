---
title : "Vibe Coding is Not an Advantage"
slug : "vibe-coding-is-not-an-advantage"
draft : false
tags : ["vibe-coding", "llms"]
date : "2025-05-27"
hidden: false
---  

A few months ago, I was in a group chat with friends talking about some of the amazing stuff LLMs do.

I told them that I don't do any "vibe coding", that is, the building of software exclusively via prompting LLM tools like Cursor.
To me LLMs are more of a research tool like Stack Overflow. I ask it questions about stuff I want to do.

It is something for filling my gaps in knowledge.
So at the end of the day, I often prefer my own judgement & style. As I don't think vibe coding is an advantage.

I will try to describe my reasons why.

***

### 1. The economics world is a minority game.

Knowledge work like software development **only has value when you know what other people don't**. [^1]

Not many people will pay you a premium for knowing what everyone can "vibe code".

So you're better off learning something hard that LLMs won't be able to do.

### 2. Vibe Coding is the WYSIWYG of the 2020's

I remember when learning web development in high school and asked my friends why they were stressing with HTML instead of just using Dream Weaver, WiX or Microsoft Publisher — The so called WYSIWYG tools (What You See Is What You Get) that utilized drag and drop for building websites. [^2]

They simply replied with "HTML is better". The answer didn't make sense to me then.

But now I think I know the answer. **Writing your own code instead of using a WYSIWYG gives you fine-grained control of what your working on.**

Think of vibe coding like buying a cake mix (pre-mixed ingredients for making a cake) for running a bakery instead of inventing your own recipes.

Inventing your own cake recipe is hard and slow. But think of everyone else buying the same cake mix to run their bakery.

The icing on the cakes might look different but the taste will be the same. So the differentiating factor amongst competitors will be very little.

I think LLMs will be like spreadsheets for programmers.

Spreadsheets didn't give normal people CPA level skills, but they did improve the normal persons book keeping skills.

### 3. Might cause atrophy of temporal logic.

Atrophy is a biological condition where the body reduces the size and there for effectiveness of an organ. [^3]

This often happens when that organ is not used as much. So maybe the body wastes it way internationally as it may not "want" to keep on maintaining something that it isn't using.

This happens with muscles. So when you stop working out at the gym your muscles start disappearing.

What worries me is that this may happen to skilled programmers brains. The developed faculties of the brain concerning temporal logic [^4] might be wasted away such that;

__a) Other tasks that might have benefited from your "programming cognitive muscles" might get harder to do.__

__b) It might get harder to learn a new "programming like" skill that shows up in the future.__

In London for example, they have a taxi service informally referred to as "Black Cabs".

It turns out that in order to work for these "Black Cabs" you are required to memorize over 40,000 streets and landmarks and major buildings. [^5]

People who qualify to drive for black cabs often develop a bigger hippocampus (part if the brain responsible for memory), and this bigger hippocampus probably helps them memorize stuff more effectively compared to Uber drivers that rely on GPS [^6] — a better memory system will also be beneficial to the black cab drivers for tasks that have nothing to do with driving, but require good memory.

### 4. The "Vibed Code" may not be your vibe

Below is C code by Arthur Whitney for the J compiler [^7]. This coding style is something that you will find in the Array language community.

```c
typedef char C;typedef long I;
typedef struct a{I t,r,d[3],p[2];}*A;
#define P printf
#define R return
#define V1(f) A f(w)A w;
#define V2(f) A f(a,w)A a,w;
#define DO(n,x) {I i=0,_n=(n);for(;i<_n;++i){x;}}
I *ma(n){R(I*)malloc(n*4);}mv(d,s,n)I *d,*s;{DO(n,d[i]=s[i]);}
tr(r,d)I *d;{I z=1;DO(r,z=z*d[i]);R z;}
A ga(t,r,d)I *d;{A z=(A)ma(5+tr(r,d));z->t=t,z->r=r,mv(z->d,d,r);
 R z;}
V1(iota){I n=*w->p;A z=ga(0,1,&n);DO(n,z->p[i]=i);R z;}
V2(plus){I r=w->r,*d=w->d,n=tr(r,d);A z=ga(0,r,d);
 DO(n,z->p[i]=a->p[i]+w->p[i]);R z;}
V2(from){I r=w->r-1,*d=w->d+1,n=tr(r,d);
 A z=ga(w->t,r,d);mv(z->p,w->p+(n**a->p),n);R z;}
V1(box){A z=ga(1,0,0);*z->p=(I)w;R z;}
V2(cat){I an=tr(a->r,a->d),wn=tr(w->r,w->d),n=an+wn;
 A z=ga(w->t,1,&n);mv(z->p,a->p,an);mv(z->p+an,w->p,wn);R z;}
V2(find){}
V2(rsh){I r=a->r?*a->d:1,n=tr(r,a->p),wn=tr(w->r,w->d);
 A z=ga(w->t,r,a->p);mv(z->p,w->p,wn=n>wn?wn:n);
 if(n-=wn)mv(z->p+wn,z->p,n);R z;}
V1(sha){A z=ga(0,1,&w->r);mv(z->p,w->d,w->r);R z;}
V1(id){R w;}V1(size){A z=ga(0,0,0);*z->p=w->r?*w->d:1;R z;}
pi(i){P("%d ",i);}nl(){P("\n");}
pr(w)A w;{I r=w->r,*d=w->d,n=tr(r,d);DO(r,pi(d[i]));nl();
 if(w->t)DO(n,P("< ");pr(w->p[i]))else DO(n,pi(w->p[i]));nl();}

C vt[]="+{~<#,";
A(*vd[])()={0,plus,from,find,0,rsh,cat},
 (*vm[])()={0,id,size,iota,box,sha,0};
I st[26]; qp(a){R  a>='a'&&a<='z';}qv(a){R a<'a';}
A ex(e)I *e;{I a=*e;
 if(qp(a)){if(e[1]=='=')R st[a-'a']=ex(e+2);a= st[ a-'a'];}
 R qv(a)?(*vm[a])(ex(e+1)):e[1]?(*vd[e[1]])(a,ex(e+2)):(A)a;}
noun(c){A z;if(c<'0'||c>'9')R 0;z=ga(0,0,0);*z->p=c-'0';R z;}
verb(c){I i=0;for(;vt[i];)if(vt[i++]==c)R i;R 0;}
I *wd(s)C *s;{I a,n=strlen(s),*e=ma(n+1);C c;
 DO(n,e[i]=(a=noun(c=s[i]))?a:(a=verb(c))?a:c);e[n]=0;R e;}

main(){C s[99];while(gets(s))pr(ex(wd(s)));}
```

Different people develop different coding styles so they can;

__a) Reflect the way they think about different problems.__ Arthur Whitney, for example has had a very successful career thinking the way he does [^8].

__b) Satisfy their internal software development philosophy.__ [^9]

__c) Coding styles are also used for example within Google, probably to ensure uniformity across the many different code bases__[^10]

So, the vibe of the LLMs will likely be out of touch with your personal, corporate coding style requirements or "Vibes".


[^1]: [The El Farol Bar problem](<https://en.wikipedia.org/wiki/El_Farol_Bar_problem> "The El Farol Bar problem") is where 100 people try to enjoy a bar that can only accommodate 60 people. To enjoy the bar, you need to use a technique of predicting when to show up at the bar that is ***not available to the majority***.

[^2]: [WYSIWYG](<https://en.wikipedia.org/wiki/WYSIWYG> "WYSIWYG") was mostly about visual manipulation, so LLMs deserves a better acronym. Maybe WYAIWYG (What You Ask Is What You Get)?

[^3]: Interesting [Wikipedia page on Atrophy](<https://en.m.wikipedia.org/wiki/Atrophy>)

[^4]: [Temporal Logic](<https://en.wikipedia.org/wiki/Temporal_logic> "Temporal Logic") is the system in which I suspect programmers use to think about code. It is essentially a way of thinking about how something changes or behaves though time.

[^4]: Heard of this from reading Rory Sutherland's Alchemy

[^5]: I learned about recruitment requirements of the [Hackney carriage](<https://en.wikipedia.org/wiki/Hackney_carriage> "Hackney carriage") also known as "black cab" from reading Rory Sutherland's amazing book

[^6]: From Scientific American, Cache Cab: Taxi Drivers' Brains Grow to Navigate London's Streets — [https://archive.is/WS1sH](<https://archive.is/WS1sH>)

[^7]: "Incunabulum" by Roger Hui — https://code.jsoftware.com/wiki/Essays/Incunabulum

[^8]: Have a look at [Arthur Whitney's Wikipedia page](https://en.wikipedia.org/wiki/Arthur_Whitney_(computer_scientist))

[^9]: I, for example love the idea of the [Unix Philosophy](https://en.wikipedia.org/wiki/Unix_philosophy#Origin)

[^10]: Google for example has a [Python Style Guide](https://google.github.io/styleguide/pyguide.html) that internal Engineers are probably expected to follow
