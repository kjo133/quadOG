console.log("animation js");
var innovation = new TimelineMax();
var collaboration = new TimelineMax();
var transformation = new TimelineMax();
var community = new TimelineMax();
var vision = new TimelineMax();
var fun = new TimelineMax();

const controller = new ScrollMagic.Controller();

innovation.from("#innovation", 0.7, { opacity: 0 });
collaboration.from("#collaboration", 0.7, { opacity: 0 });
transformation.from("#transformation", 0.7, { opacity: 0 });
community.from("#community", 0.7, { opacity: 0 });
vision.from("#vision", 0.7, { opacity: 0 });
fun.from("#fun", 0.7, { opacity: 0 });

const scene = new ScrollMagic.Scene({
  triggerElement: "#innovation"
})
  .setTween(innovation)
  .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: "#collaboration"
})
  .setTween(collaboration)
  .addTo(controller);

const scene3 = new ScrollMagic.Scene({
  triggerElement: "#transformation"
})
  .setTween(transformation)
  .addTo(controller);

const scene4 = new ScrollMagic.Scene({
  triggerElement: "#community"
})
  .setTween(community)
  .addTo(controller);

const scene5 = new ScrollMagic.Scene({
  triggerElement: "#vision"
})
  .setTween(vision)
  .addTo(controller);

const scene6 = new ScrollMagic.Scene({
  triggerElement: "#fun"
})
  .setTween(fun)
  .addTo(controller);
