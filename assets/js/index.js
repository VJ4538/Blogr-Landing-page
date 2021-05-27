$(document).ready(function(){

  //Variables
    // const header=document.querySelector("#header");
    const header=$("#header")[0];
    // const nav=document.querySelector(".nav_bar");
    const nav=$(".nav_bar");
    // const sections=[...document.querySelectorAll("section")];
    const sections=[...$("section")];
    const bar_nav=$('.bar');
    const nav_link_m = $('.drop-title');
    const nav_link = $('.li-items');
    //Remove first section : Header
    sections.shift();


//Nav bar desktop event handler
    nav_link.click(function(){
      const panelId=$(this).attr("data-panel");
      $(`.${panelId}i`).toggleClass("rotated");
      $(`.${panelId}`).slideToggle(300);
    })

//nav bar Mobile event handler
      bar_nav.click(function(){
        $('.m-dropdown').slideToggle(300);
        $('.bar-open').toggle(100);
        $('.bar-close').toggle(100);
        $('.drop').slideUp(100);
        //remove the rotation
      })
      nav_link_m.click(function(){
      const mpanelId=$(this).attr("data-mpanel");
      $(`.${mpanelId}i`).toggleClass("rotated");
      $(`.${mpanelId}`).slideToggle(300);
      
    })

//Reveal Section
    const introHandler=(entries,observer)=>{
      const [entry]=entries;
      if(!entry.isIntersecting) return;
     if(entry.isIntersecting){
       $(entry.target).removeClass("fade-section");
     }
     observer.unobserve(entry.target);
    }


    const introObserver= new IntersectionObserver(introHandler,{
      root:null,
      threshold:0.2
    })

    sections.forEach((eachSection)=>{
      $(eachSection).addClass("fade-section");
      introObserver.observe(eachSection);
    })

//Sticky nav
    const stickyHandler =function(entries){
      const [entry]=entries;
      if(entry.isIntersecting){
        // nav.classList.remove("sticky")
        nav.removeClass("sticky");
      }else if(!entry.isIntersecting){
        // nav.classList.add("sticky")
        nav.addClass("sticky");
      }
    }
    
    const navObserver =new IntersectionObserver(stickyHandler,{
      root:null,// the view port,
      threshold:0,
      rootMargin:"-56px"
    })
    navObserver.observe(header)

})





  