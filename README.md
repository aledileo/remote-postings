# Remote Postings

Remote postings is an server-side-rendered app that gets the last job postings for programming jobs from We Work Remotely.

Check out the working demo: https://remote-postings.aledileo.now.sh

## Table of contents
* [Inspiration](#inspiration)
* [Tech used](#tech-used)
* [Tech used](#tech-used)
* [Building](#building)

## Inspiration

RemoteOK's webpage cripples my 2017 phone. Currently this projects gets its feed from weworkremotely.com the idea is to consume feom as much sources as I see fit.

## Tech used

- React 16.9
- Next.js 9
- Zeit's Now

## What I learned

Before starting this project I had never used either Next.js or RSS feeds, now I learned about the advantages of doing SSR on React applications, how to use Next.js and how to make Dynamic API Routes.
I tend to be pretty minimalistic when it comes to frontend projects and I realize that using React and Next.js is a complete overkill for the end product. But I needed something to learn Next.js and also to put into my portfolio (my github is a cemetery of unfinished projects). Simple projects are great for learning some specific tech, if this one would have taken me more tha a weekend I would have probably forgotten about it.

Zeit's Now is simply beautiful you get a full-blown CD solution by just typing `now`, it doesn't get better than that. It also has a pretty smooth integration with GitHub so when master gets updated a new deployment kicks-off immediately.
I've used Now before, a lot actually, but in this project I got to learn how to set up env variables and 'secrets' for API keys and such.

People who did web dev back in 2005 would be laughing at the amount of technologies involved in a simple rss reader

If using Zeit's Now and Zeit's Next.js wasn't enough, I'm also using Zeit's design system which has a really nice and minimalistic look.

## Building

In order to build the project you'll need node's latest LTS, previous versions are not guaranteed to work correctly.

1. Clone the repo

```sh
git clone https://github.com/aledileo/remote-postings
cd remote-postings
```

2. Install dependencies

```sh
npm i
```

3. Start de dev server

```sh
npm run dev
```
