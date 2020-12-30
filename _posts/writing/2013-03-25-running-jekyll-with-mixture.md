---
title: Running Jekyll with Mixture
posse: Some tips on running Jekyll with Mixture.io.
category: writing
tags: [jekyll]
published: true
type: post
---

## Introducing Mixture

I&rsquo;ve been lucky enough to be developing with [Mixture](http://mixture.io) from the alpha releases, testing out the fantastic templating, live-refresh, pre-processing and task/to-do management features.

Since those early releases the product has evolved incredibly quickly, each new build includes an additional layer of impressive functionality on top of an already powerful application.

Mixture went public last week and the general consensus is that it&rsquo;s changed the way we develop websites.

### Simply Done

The public beta release was a **huge** improvement in a number of ways but most notably for me, was the inclusion of **simple mode**.

Simple mode meant I could run my existing blog architecture but still benefit from all the amazing features that Mixture has to offer.

Neil does a great job of explaining [Mixture&rsquo;s simple mode](http://www.youtube.com/watch?feature=player_embedded&v=UxUBvDU0qn4) (video) and it’s worth checking the [Mixture docs page](http://docs.mixture.io/) to get the best out of the application.

### My Jekyll Setup

Getting Jekyll to work with Mixture was incredibly quick and easy.

1. Run the Jekyll server as usual <pre>jekyll --server</pre>
2. Open my blog directory using Mixture
3. Setup **simple mode** like so:
	* select preprocessor location (mine: css)
	* select style output location (mine: css)
	* select script output location (mine: js)
	* enter partner server address (typically localhost:4000 for Jekyll)
4. Click **View Locally** in the Mixture.app sidebar
	* This will open a new browser window/tab with your Jekyll site at the mercy of Mixture

### Mr Hyde

I&rsquo;m not currently using Compass in my workflow but [Jupiter St. John](http://webcatseo.com/) has pointed out a live-refresh lag when running Jekyll Mixture and Compass together. Jupiter has done some digging around on the subject:

> When Jekyll generates files, it deletes all files and folders from the output directory <code>_site</code>. Furthermore, naturally, the generated files are written to disk serially and during a long period (~3s for a small site).

> *Taken from [Jekyll and Livereload Flow](http://thanpol.as/jekyll/jekyll-and-livereload-flow/)*

The article goes on to offer a remedy that uses [Grunt](http://gruntjs.com/).

### What&rsquo;s Next?

I&rsquo;m not quite ready to move my blog architecture and hosting over entirely to Mixture, although I&rsquo;m really tempted. With the news of upcoming Markdown support means Mixture mean business with this application and so far it&rsquo;s retired several of my front-end development tools so I&rsquo;m keen to show my support in any way that I can.

I&rsquo;m holding out for some Github support in the future and really excited about using some of the multi-device follow-the-leader  testing and using Mixture in my UX rapid prototyping workflow.

#### Links

* [Get Mixture.app here](http://mixture.io)
* [Setting up Mixture&rsquo;s simple mode (YouTube)](http://www.youtube.com/watch?feature=player_embedded&v=UxUBvDU0qn4) (video)
* [Mixture Docs](http://docs.mixture.io)
* [Jekyll @ Github](https://github.com/mojombo/jekyll)
* [Jupiter St. John&rsquo;s site](http://webcatseo.com/)
* [Thanasis Polychronakis&rsquo;s article ~ Jekyll and Livereload Flow](http://thanpol.as/jekyll/jekyll-and-livereload-flow/)
* [Grunt.js](http://gruntjs.com/)
