
# WebComponenets Playground
https://developer.mozilla.org/en-US/docs/Web/API/Web_components

![[]](img/shadowdom.svg)
## Shadow DOM
An important aspect of web components is encapsulation — being able to keep the markup structure, style, and behavior hidden and separate from other code on the page so that different parts do not clash, and the code can be kept nice and clean. The Shadow DOM API is a key part of this, providing a way to attach a hidden separated DOM to an element. 

Shadow DOM allows hidden DOM trees to be attached to elements in the regular DOM tree — this shadow DOM tree starts with a shadow root, underneath which you can attach any element, in the same way as the normal DOM.

There are some bits of shadow DOM terminology to be aware of:

- Shadow host: The regular DOM node that the shadow DOM is attached to.
- Shadow tree: The DOM tree inside the shadow DOM.
- Shadow boundary: the place where the shadow DOM ends, and the regular DOM begins.
- Shadow root: The root node of the shadow tree.

You can affect the nodes in the shadow DOM in exactly the same way as non-shadow nodes 


## Run locally
Install live server
```
npm install -g live-server
```

Serve index.html
```
live-server .
```