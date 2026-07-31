# Eventloop
JS is synchronous and single threaded typefault

## There can be async behaviour 
- with BrowserAPI- setTimeout, setInterval, setImmediate, nextTick
- with promises
- with event handlers

Promise: a fxn not excecuted immediately but it must be exceuted after a while. it has some status during the excecution. at final, it may resolve (success) or reject (fail)
- promise ki priority nextTick ke equal hoti hai

call back fxn: that pass as argument or the parameter to another fnx.

morder javascript is divided into two categories:
1. common js(.cjs)-> supports oops -> require (keyword)
 -1st priority- nextTick, Promise, setImmediate/setTimeout
2. module js(.mjs)-> follow modular approach (supports fxnal programming) -> import (keyword)
  -this is more commonly used
  -1st priority- promise, nextTick, setImmediate/setTimeout

