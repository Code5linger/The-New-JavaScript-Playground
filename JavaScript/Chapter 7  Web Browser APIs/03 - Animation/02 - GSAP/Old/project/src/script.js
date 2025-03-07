import { gsap } from "gsap";
import GSDevTools from "gsap/GSDevTools";
gsap.registerPlugin(GSDevTools);


var tl = gsap.timeline()
    tl.from("#demo", {opacity:0})
      .from("h1", {x:80, opacity:0})
      .from("h2", {x:-80, opacity:0})
      .from("p", {y:30, opacity:0})
      .from("button", {y:50, opacity:0})
      .from("#items > g", {
                             transformOrigin:"50% 50%", 
                             scale:0, 
                             opacity:0,
                             stagger:0.1, 
                            })
GSDevTools.create();

ccccchttps://codepen.io/GreenSock/full/23d3979528b262cb07da37f6a7c7dd76

https://codepen.io/GreenSock/full/23d3979528b262cb07da37f6a7c7dd76var tl = gsap.timeline()
    tl.from("#demo", {opacity:0})
      .from("h1", {x:80, opacity:0})
      .from("h2", {x:-80, opacity:0})
      .from("p", {y:30, opacity:0})
      .from("button", {y:50, opacity:0})
      .from("#items > g", {
                             transformOrigin:"50% 50%", 
                             scale:0, 
                             opacity:0,
                             stagger:0.1, 
                            })
GSDevTools.create();https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/GSDevTools3.min.js