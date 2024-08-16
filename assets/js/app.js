  gsap.to("#text1", {
    opacity: 0,  
    x: 200,   
    duration: 2, 
    delay: 0.5,    
    repeat: -1,
    yoyo: true    
  });
  gsap.from("#text2", {
    opacity: 0,    
    rotate:"360",
    y: -50,      
    xPercent:-440,
    duration: 1.5, 
    delay: 1,      
    repeat: -1,   
    yoyo: true    
  });
  gsap.fromTo("#text3",
    { opacity: 0, y: 50 , },  
    { opacity: 1, y: 0, duration: 6, delay: 1.5, repeat: -1, yoyo: true,  background:"orange" ,    xPercent:340, }  
  );
  gsap.fromTo("#text4",
    { opacity: 0, y: 50 , }, 
    { opacity: 1, y: 0, duration: 6, delay: 1.5, repeat: -1, yoyo: true, background:"green" ,  xPercent:-240, } 
  );
  gsap.fromTo("#text5",
    { opacity: 0, y: 50 , },  
    { opacity: 1, y: 0, duration: 6, delay: 1.5, repeat: 0, yoyo: true,  background:"orange" ,    xPercent:340, }  
  );
  gsap.fromTo(
    "#text6",
    { opacity: 0, y: -50 }, 
    {
      opacity: 1,
      x: 70, 
      duration: 2,
      delay: 0.1,
      repeat: -1,
      rotate:"600",
      yoyo: true,
      background: "gray",
      yPercent: 40,
    
    }
  );
  