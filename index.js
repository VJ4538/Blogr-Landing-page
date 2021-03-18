$(document).ready(function(){
    console.log("hi");

    //Nav Bar
    let nav_link = $('.li-items');

    nav_link.click(function(){
      let panelId=$(this).attr("data-panel");
      $(`.${panelId}i`).toggleClass("rotated");
      $(`.${panelId}`).slideToggle(500);
    })
})