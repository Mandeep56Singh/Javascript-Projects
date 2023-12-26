
var t = gsap.timeline();
t.from(".hero__image-1,.hero__image-2,.hero__image-3,.hero__image-4" , {
    scale:0,
    opacity:0,
    stagger:0.3,
})
t.from(".hero__text>h1",{
    y:100,
    opacity:0,
    stagger:0.3
})


t.from(".header__logo img , .header__links-1 , .header__links-2 , .header__links-3,.header__btn-login,.header__btn-getStarted", {
    y: -100,
    duration:1,
   
    opacity:0,
    stagger:0.2,
})
t.from("footer",{
    scale : 0,
    opacity:0,
})
t.to("footer ", {
    yoyo:true,
    y:-10,
    duration:0.5,
    repeat:-1,
})
