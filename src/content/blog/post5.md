---
title: "Side Project: Mealer"
description: "Learn more about my Mealer side project!"
pubDate: "May 7, 2026"
---

**Mealer is now released to the public as Version 0.1.6!**

_(That means it is not yet a stable release!)_


### Overview

Mealer is a restaurant recommender app for foodies who mainly trust their own taste. Many apps like Google Maps provide reviews that are not very trustworthy, subject to manipulation, and not personalized to one's taste. Unlike those apps, Mealer focuses on restaurants that you can fully trust to be good - either because you have actually been there and liked it, or trustworthy individuals in your life has said good things about those restaurants. 

Please feel free to mention issues or give me suggestions for my app either through GitHub or email! I am also open to collaboration.


### System Design

Here is the current state of my system design:

<figure style="text-align:center;">
    <img src="../../../architecture.png" alt="My system design architecture" width="700" height="400">
</figure>

This is effectively just a dockerized web app deployed on a small-scale virtual private network with an external S3 bucket set up for database backups. Although it is not robust by any means (none of that fancy stuff like replication, auto scaling, and fault tolerance, which I'd need to pay lots and lots of money for and can't justify doing for a small side project like this), I believe this is a good setup for less than $7 a month.


My codebase is structured as a `pnpm` monorepo, where the frontend code is inspired by feature sliced design (FSD), and the backend code is inspired by the controller-service-repository (CSR) pattern. Utilizing layered architectures like these allows for easier maintainability and flexibility, and enables me to better reason about the individual components of my application and how they should interact.



### Learning Experience

This app was a great learning experience to see what to takes to develop a production-grade web app. Definitely the most notable things that I have learnt in this process was how to:

* Securely implement OAuth without using an existing SaaS solution
* Produce an interactive map with MapLibre GL
* Deploy docker containers with self-managed data backups
* Effectively design full-stack apps from the interface to the database
* Utilize LLMs to code in a way that balances fast delivery with proper learning and care


### Future Updates

My app is far from being considered "complete". There will be a couple of notable updates in the future, which will include:

* Further production hardening with testing, logging, and CI/CD pipelines
* New features, including frequency tracking, categories, filtering, distance search, friends, and LLM-powered recommendations

As I am dealing with many different responsibilities and working on many different things as a new grad, I am currently aiming to release Version 1.0.0 (the first general release) by the end of August or September, depending on how much free time I have!