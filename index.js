$(document).ready(function(){
    console.log("hi");

    //Nav Bar
    let nav_link = $('.li-items');

    nav_link.click(function(){
      let panelId=$(this).attr("data-panel");
      // console.log(this);
      // console.log(panelId);
      $(`.${panelId}i`).toggleClass("rotated");
      $(`.${panelId}`).slideToggle(300);
    })

    //nav bar mobile

    let bar_nav=$('.bar');
      bar_nav.click(function(){
        $('.m-dropdown').slideToggle(300);
        $('.bar-open').toggle(100);
        $('.bar-close').toggle(100);
        $('.drop').slideUp(100);
        //remove the rotation
      })

      

    let nav_link_m = $('.drop-title');
    
      nav_link_m.click(function(){
      let mpanelId=$(this).attr("data-mpanel");
      console.log(this);
      // console.log(panelId);
      $(`.${mpanelId}i`).toggleClass("rotated");
      $(`.${mpanelId}`).slideToggle(300);
      
    })




})





  