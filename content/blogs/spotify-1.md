---
title: "Spotify Project - Part 1"
url: "blogs/spotify-1"
summary: How my first co-op experience inspired me to work on a new side project allowing me to investigate my Spotify usage through an interactive dashboard
ShowToc: false
---

## My First Co-op Experience
My objective during my very first co-op employment was pretty simple - help our clients understand their operations by:
1. Extracting data from their database,
2. Transforming this data to create clean, insightful, and usable data, then
3. Loading this data into another database where this data can be fed into Power BI, creating insightful reports

The prior strategy to doing this was to use [Alteryx](https://www.alteryx.com/), which is a powerful low-code data science tool that enables fast development of ETL workflows. It was great to work it and I loved that users could see a visual representation of their workflow. It was a little too expensive for our clients, however, given the very wide range of features. Additionally, a key requirement of our reports, which was automatic refreshing, also could not be achieved without paying for an even more expensive enterprise license.

While developing reports for our client, my employer and fellow co-op students were in search of alternatives to Alteryx that would not only allow for automatic refreshing, but reduce costs altogether. The solution that our team put into production right before I left was to use Python scripts in Azure. Instead of Alteryx, we would use the Pandas library as well as some additional APIs to perform our ETL process, and we would push these scripts to Azure Functions where it could be triggered based on a schedule.

## Inspiration for the Side Project
By the end of my experience, I was fairly comfortable with working with data through Python, using APIs, and using cloud technologies. It was my first taste of developing production-level software that would directly benefit others. I wanted to take what I have learned from the experience and apply it to something else that I could show other people. However, I know that there is still much more room to expand my skills.

I was most interested in how I could develop a user interface from scratch (without using Power BI) and publish it to the internet. I also wanted to get further programming experience and be able to more powerfully utilize APIs.

Well, as a great enjoyer of music, I use Spotify especially often. I even logged 124,642 minutes of listening in 2022 alone (there's 525,600 minutes in a year!!!). I discovered during this co-op term that Spotify also has an API, and it's actually surprisingly powerful and well-documented. With this API, I thought, I could gather insights to what users listen to at any time without having to wait every year for a new Spotify Unwrapped. I could even present these insights using my own user interface where everyone else could use it.

Thus, the general idea for this side project was born, but I would still have to flesh out a lot of particular details.

## Looking at the Possibilities

There's many things that I could do involving Spotify's API and a User Interface:

1. A personalized dashboard that presents recently listened artists and tracks?
2. A lookup where you can view a track's detailed information (energy, mood, key, etc.)?
3. A presentation of what kind of vibe someone is in given their recent listens?
4. A lookup that presents recommendations given an artist or track?

I think (3) would be really cool, especially in conjunction with the ideas of (1) and (2). Later on, I will discuss what I have settled on and preliminary plans for how I will bring this idea to reality in Part 2 of the "Spotify Project" series.

The ultimate goal of this side project, really, is to combine what I have learned in my first work experience with something I wish to learn, front-end web development, to create something that the public can use. This will be already be quite a challenge for me, especially given my obligations with school and co-op, so I won't do anything _too_ crazy. Let's see what happens, of course.



