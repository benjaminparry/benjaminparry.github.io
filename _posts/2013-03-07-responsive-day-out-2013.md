---

type: post
layout: post
title: Responsive Day Out 2013
description: My notes for Responsive Day Out 2013.
categories : [writing]
published: true
tags: [responsive, conference, brighton]
---

After the inspirational talks at [Altitude](http://altitude.io/) and a short but sweet Shopify meetup the night after, I was hungry for the meat potatoes and pint o’Guinness portion of last-last-week’s web conference schedule.

Other than regularly attending meetups and the occasional BarCamp, this was my first time at a full-day conference and my expectations couldn’t have been set higher after the aforementioned events. I was ready to get my brains learned out.

*And boy, did I get the learning of my life!*

***

## <a href="#sarah-parmenter" id="sarah-parmenter">&sect;</a> Sarah Parmenter: The Responsive Workflow

I heard Sarah speak two days earlier at Altitude, the overall format there was informal banter so this was a great opportunity to hear her give a more structured presentation.

### Notes:

**Intro**

+ “Breakpoints, where the design breaks” (great explanation)
+ We need to start sharing all parts of the process, even the shitty ones, especially in RWD

**Tools**

+ InDesign solution for RWD mock-up designs (link to follow)
+ Photoshop is considered a taboo but has it’s place

**Workflow and Process**

1. Content structure
2. UX wireframes
3. Design elements/atmosphere
4. Optomisation
5. HTML/CSS/JS

**Static visuals**

+ “The code is the deliverable, the PSDs are not.” [@Mike_FTW](https://twitter.com/brad_frost/status/225674332230283265)

**Getting sign-off**

+ Get content first
+ Omit unnecessary content
+ Crazy egg tool (in my notes but no idea what it refers to)
+ Get sign-off on content hierarchy
+ Sign-off on partial/fragmented designs, not as a whole

**Pattern library**

+ Different to style guides
+ Pattern libraries give context
+ Style guides are pure visual/decorative
+ Get sign-off first

**Asset management**

+ [Slicey.app](http://macrabbit.com/slicy/)

**Closing thought**

+ “We’re still adapting to the RWD process, it’s a continuously evolving discipline”

***

## <a href="#david-bushell" id="david-bushell">&sect;</a> David Bushell: Responsive Navigation

I must admit I’d never heard of David before the conference but really enjoyed his his talk and he raised some really interesting questions on current design patterns for navigation.

### Notes:

**Responsive navigation**

+ Why do we continue to create navigation systems?
+ Is there another way?
+ 1 global menu that serves the entire site
+ Start with single interaction: click (or [Jeremy’s input-neutral term “choose”](http://adactio.com/links/6104/))
+ Progressively enhance other states like hover, tap, swipe

**Patterns**

+ Simple menu
	+ Small viewport » menu condensed to react to smaller real estate
+ Multi level menu
	+ Example of Microsoft’s product website
+ Off canvas
	+ Slide content horizontally to reveal 
	+ Adopted by Facebook
+ Jump to footer
	+ Slide to the bottom of the page on select
	+ Disorientating?

**Keep it clear**

+ One suggestion was to keep all the menu items on a separate page, like a table of contents

**Closing thought**

+ Don’t overload the menu, keep it simple
+ Embrace the viewport
+ Design with affordance in mind
+ Interaction friction varies
+ Enhance from one canonical event
+ Feature detection to aid performance
+ Discoverability
+ Content hierarchy
+ One point of navigation = one point of failure

***

## <a href="#tom-maslen" id="tom-maslen">&sect;</a> Tom Maslen: Cutting the Mustard

I’d heard the expression *cutting the mustard* a few times at Brighton’s Async.js meetup, I think Andy Hume, Josh Emerson and Mark Perkins have all referred to the process in one way or another. Tom’s work at the BBC and general approach to progressive enhancement is truly inspiring.

### Notes:

**Browser support**

* Device numbers has exploded in the last few years
* The BBC’s approach to delivering content is a great example of the intention of the web – Universality

**Devices**

* We have no control over devices

**3 steps**

1.
	* Stop thinking about devices and start thinking about browsers
	* Build from the core
	* Link to additional content
	* Strive for a lighter DOM
	* Basic CSS
	* No JavaScript
2. 
	* Load JavaScript
	* Load Video
	* Conditionally load content
	* HTML4 browser vs HTML5 browsers
3.
	* New CSS
	* Extra features loaded after feature detection

**Closing thought**

* Graceful degradation (old)
* Progressive enhancement (new)

***

## Q+A

Jeremy Keith, Sarah Parmenter, David Bushell and Tom Maslen

* Change your process!
* Progressively enhance for footer nav, off-page
* Separation of content	and presentation
* PSD to website build days are numbered
* Embrace liquid layout
* Build for performance
* De-emphasise navigation and emphasise search (Surrey University website)
* Use fixed width for IE7+8 with no media queries
* If IE7+8 cuts the mustard adds custom additional application support
* Charge more for the 15% (IE)
* Conditional comments are still valid

***

## <a href="#richard-rutter" id="richard-rutter">&sect;</a> Richard Rutter: Responsive Web Fonts

I was aware of a few of the techniques Richard had to share about responsive typography from Josh Emerson’s talk [Beyond Arial](http://lanyrd.com/2011/asyncjs-webfonts/). It was a great refresher and Richard is a great speaker.

### Notes:

**Problems**

* Slowly connection speed
* Font rendering delay
* Disorientating for the user

**Solutions**

1. Don’t user any web fonts at all
2. Don’t serve web fonts to mobile devices (unpredictable data connection)
3. Use fallbacks
	* Serve fonts once **all** have loaded
	* Serve fonts once **some** have loaded

**Process**

1. N/A
2. Link to web fonts with media queries
3. Use [Google’s webfont loader](https://developers.google.com/webfonts/docs/webfont_loader)
	* A class (loading status) is added onto the body – .loading, .loaded, .active

**Combine processes**

* Tweak fallbacks to match the target font as much as possible to avoid disorientation when transitioning from one font to another
* Think about which fonts to serve as default

**Closing thought**

* iOS has a vast range of fonts pre installed
* Android is shockingly sparse

***

## <a href="#josh-emerson" id="josh-emerson">&sect;</a> Josh Emerson: Asset Fonts

It was great to see some HD web getting some coverage. The rise of icon fonts and SVG and compatible hardware makes this a real issue. Josh’s session was clearly focused on performance and creating a completely custom set of assets.

### Notes:

**Asset fonts**

* Scalable and sharper
* Better for accessibility
* Up-scale graphics
* Traditional methods are a hack and come with their downfalls (css sprites)
* .ttf file format
* Cross browser compatible
* Only support 1 colour so use SVG for multi-colour

**Tools**

* [Font forge](http://fontforge.org/)
* [IcoMoon](http://icomoon.io/)

**Usage**

* Icon + text
* Use speak:none for accessibility
* Use content unicode or data-icon="beefcheeks"

**Ligature asset fonts**

* Good for accessibility
* No JavaScript required
* CSS discretional setting

**Closing thought**

* With a little work, an extremely custom, lightweight, HD asset ready can be created

***

## <a href="#laura-kalbag" id="laura-kalbag">&sect;</a> Laura Kalbag: Design Systems

Laura was another speaker that I’d known little about. Her talk on RWD processes and deliverables was really enlightening.

### Notes:

**Consistency**

* Think and design in a fluid
* Move away from pixel precision, it’s not helping
* Designing with content and defined process = good
* Designing for devices and creating whole comps = bad
* Play: don’t worry about the outcome

**Process and design systems**

Design from the bottom up

1. Type
2. Layout
3. Form
4. Colour
5. *Content is always the same*

**Large site design system**

1. Type
2. Base units
  * In multiples
  * To a scale
3. Grid and layout 
  * Grid concept
  * Harmony
  * Consistency
4. Shape and form
5. Colour

**Process**

* Separate design from viewports
* Start mobile first
* Style guides
* Pattern libraries
* Sketches

**Mockup breakpoints**

* As designers it’s out jobs to communicate, work hard at it!
* Create mockups of base content elements, not as a whole but as a tone
  * Video
  * Images
  * Navigation
  
**Closing thought**

* To solves future problems that arise, we should look at other industries e.g. TV

***

## <a href="#elliot-jay-stocks" id="elliot-jay-stocks">&sect;</a> Elliot Jay Stocks: RWD — The War Has Not Yet Been Won

Like Laura, Elliot touched on some really interesting RWD processes and attitudes to design.

### Notes

**We’re still at war with RWD**
 
* No fixed system yet
* Specs are still being written
* Fluid design is proven
* Adaptive

**Best practices**

* Device agnostic
* Use breakpoints when it feels right
* Future-proof/Future-friendly

**Additional work**

* Big changes in workflow
* Shifted our design process
* Start with style tiles, pattern libraries and style guides
* Affecting everyone

**Is it worth it?**

*It depends…*

**Closing thought**

* Embrace the fluid nature of the web

***

## Q+A

Jeremy Keith, Richard Rutter, Josh Emerson, Laura Kalbag and Elliot Jay Stocks

* Device and resolution independence
* Advertisement solutions to RWD

**Client collaboration**

* Communicate more and more efficiently
* Show rough versions more regularly
* Fragmented design deliverables

**Deliverables**

* Present ideas, knowing that they are changeable
* In-browser evolution as part of the evolving deliverables
* Break free of the polished design fixation

**Performance implications of using icon fonts**

* Create your own assets to benefit performance improvements
* Base64 encoding
* Specify required glyphs

***

## <a href="#anna-debenham" id="anna-debenham">&sect;</a> Anna Debenham: Playing with Game Console Browsers

During the lunch break I read this tweet by Johan Ronsse:

> [Where is the discussion on #rwd between 960 and 2560px? Everyone seems to relate responsive to mobile. #responsiveconf](https://twitter.com/wolfr_/status/307473744715194369)

I thought this was a really interesting observation of the day so far. It’s true that nobody had yet touched on the other end of the spectrum of browser size or more specifically, non-traditional browsers accessing the web.

I’d already seen some of Anna’s research on gaming devices but never heard her speaking (conference). What she presented on the day was eloquent, unique and well informed. For me it was the only presentation that truly asked those big questions about the future and how we, as designers, need to be aware of the plethora of browsers so they can inform our design decisions.

### Notes

**Current interaction types**

* Keyboard
* Mouse
* Touch

**Large screens**

* Statistics show large proportion of web access by children is through a games console
* Possibly the only method for children to access the web

**Portable gaming devices**

* Designing the experience is different
* Low HTML5 and CSS3 support
	* Nintendo Wii U has the highest at ~50%
* Demand for video is pushing for much better standards support
* Nintendo DS browser comes on a cartridge
* Overall, these devices have totally different interface interaction
	* Typing is hard
	* Think accessibility!!!
* Websites often render better without any layout styles
	* Design large link areas
* 360 Xbox Kinect has voice recognition
* Some devices allow you to plugin your phone to use as an interaction device
* Non 3D image support for Nintendo 3DS

**Interesting console features**

* Wii U
	* Presentation device - retractile curtain effect
	* Enable group interaction
	* TV remote
* Xbox 360
	* Mobile site compatible - design for this

**How to design for these device browsers**

1. Device detection
 * Build large clickable areas
2. Test
3. Performance
	* Most devices have low memory
	* [Design on a Budget](http://clearleft.com/thinks/responsivedesignonabudget/) (ClearLeft)
4. Add focus states
5. Add touch support

**Closing thought**

*Build for all contexts and capabilities*

***

## <a href="#andy-hume" id="andy-hume">&sect;</a> Andy Hume: The Anatomy of a Responsive Page Load

I’m a big fan of Andy’s talks. CSS For Grown Ups was a stonker and I had high hopes for this one.

### Notes

**Responsive page load**

* DO THIS!
	* gZip
	* Cache-Control: max-age=[far future]

**Page load time**

1. Content
2. Progressive enhancement
3. Leftovers
	* Analytic scripts
	* Advertisement

**Trade offs**

* Loading JavaScript
* attribute async defer
* Assets downloaded asynchronously
* Server side mustard cutting
	* Not device agnostic
	* Better for user
	* *RESS*
	* *Responsive Server*

**Using web fonts**

* Performance implication (see Richard’s presentation)

**Solutions**

* Using local 
* Cache fonts (Base64 in JSON)

**Future images**

* Standalone components
* Viewport is irrelevant
* data-alt, src, src-high (used at BBC)

**Closing thought**

**Responsive performance**
 
* Performance is key
* Accessibility and Universality

***

## <a href="#bruce-lawson" id="bruce-lawson">&sect;</a> Bruce Lawson: What’s Next in StandardsLand

I was dead excited to see Bruce present on stage. He delivered a fantastic and humorous talk on what the W3C are working on that got me really excited about things to come.

### Notes

**CSS Device Adaptation**

* @viewport rule

**Flexbox**

* Currently three versions of the spec
* ratio flex

**Level 4 Media Queries**

[W3C - Level 4 Media Queries](http://dev.w3.org/csswg/mediaqueries4/)

* pointer: coarse
* Interactive
* Touch
* Remote
* Script
* Hover

**Pointer events**

* Generic events
* Hardware agnostic
* Multi user touch

**Adaptive images**

* SVG
* Remove elements of an SVG with media queries
* WebP in media 1/4 smaller
* Fallbacks – background-image: img("x.webp, x.png");

**Content images**

* Like the HTML5 video tag
* Fallback for supported images like picture element

**Video media queries**

* Serve HiRes video for large screens
* Video element

**Closing thought**

* Use the specs properly
* Don’t limit the use

***

## Q+A

Jeremy Keith, Anna Debenham, Andy Hume and Bruce Lawson

* One web, design for it
* General ethic
* Accessibility is key

***

## <a href="#owen-gregory" id="owen-gregory">&sect;</a> Owen Gregory: Antiphonal Geometry

Again, another presenter I had a lot to learn from.

### Notes

I started making one or two notes but realised it would be better to just sit and listen. I suggest you do the same.

[Download audio of Owen’s talk](http://responsiveconf.com.s3.amazonaws.com/audio/14-owen-gregory-responsiveconf.mp3)

[View the slides of Owen’s talk](https://speakerdeck.com/fullcreammilkman/antiphonal-geometry-harmony-and-proportion-in-responsive-web-design)

***

## <a href="#paul-lloyd" id="paul-lloyd">&sect;</a> Paul Lloyd: The Edge of the Web

Paul’s presentation made some really interesting observations of TV’s technological transitions, from the 60s to now, and what we can take from them to help us with the challenges we face in RWD.

### Notes

**60s TV**

* No standard model
* Cropped picture
* Fuzzy edges
* Low-res/dpi
* Low-detailed, Op Art inspired graphics
* Often centred

**The web**

* “No eges” – Mark Boulton
* The edges are there, just blurry
* Trend of 1meg+ sites since the introduction of broadband
* Images on the web are like a square peg in a round hole
* By default:
	* The web is fluid, flexible and scales proportionally
	* Images are static, pixel sized, rasterized
* Meaning is baseline. Design is enhancement.

**Images**

1. Interface
	* SVG
	* CSS
2. Content
	* 80% quality
3. Decorative
	* 60% quality

**Closing thought**

* Trend of shifting to app interfaces
* Push against the edges
* Embrace the opportunities
* Find where others have found solutions

***

## <a href="#mark-boulton" id="mark-boulton">&sect;</a> Mark Boulton: In Between

Mark delivered a really engaging talk on RWD and challenged some of our processes head-on.

### Notes

* Edges
* Honing skill
* Colour
* Form
* Edges in context

**Unknowable edges – we didn’t break the web**

1. Text
2. Read/Write
3. Fluid by circumstance
4. Facilitate communication

**Trying to control the web**

* The web is unpredictable and uncomfortable

**Media queries**

* Using media queries are creating mental models of pages (breakpoints)

**Content out**

* Design fluid first
* Force the perceived discomfort
* Progressive enhancement

**Breakpoints**

* Micro
* Macro
* “Tweakpoints” – Jeremy Keith

**WTF?**

* CSS abstraction not always necessary
* Using pattern libraries too soon

**Fluid first**

* Target breakpoints
* Macro = Layout
* Micro = Tweaking

**Closing thought**

* Reject the fixed width
* Embrace the fluid web
* Don’t *fix* the web

***

## Q+A

Jeremy Keith, Owen Gregory, Paul Lloyd and Mark Boulton

* Browser chrome calculator
* RWD is not killing

***

## Conference closing thoughts

* Progressive enhancement from a base experience
* Cut the mustard
* Embrace the fluidity of the web
* More emphasis on performance
* Don’t lose sight of universality
* Share your experience, warts and all

Jeremy Keith and the ClearLeft team did an amazing job with this Responsive Day Out and hope they do a similar format more regularly in the future. Jeremy made it clear that it was a conference on a budget, but I don’t think there was any compromise on quality or quantity. I thought the speaking format was perfect, giving the audience an opportunity to chime in threw the conversation in some interesting directions. If the only compromise for the day’s modest price tag are UK only speakers, then I’m sold.

I got so much out of being there on the day, more than I have ever done listening to the audio of an event. I met some really interesting people and felt ever so smug to be living in Brighton…come on, you’ve got to admit it’s an amazing city!

**To Jeremy, ClearLeft and all the speakers, thank you for an amazing day!**

Links:

* [Complete audio and slide archive of the day’s presentations](http://responsiveconf.com/)
* [Video archive of the day’s presentations](http://www.besquare.me/conferences/responsive-day-out/)
