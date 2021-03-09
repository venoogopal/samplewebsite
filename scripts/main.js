// function highlightlink(linkid){
//     console.log(linkid);
//     $("a[href=' + linkid +']").css("border", "1px solid red");
//  }

$(document).ready( function (){
    // $("#mySidebar a").filter(function(){
    //     console.log("Href>>>==>",location.href.replace(/#.*/, ""));
    //     console.log(this.href);
    //     return this.href == location.href.replace(/#.*/, "");
    // }).addClass("active");

    var links = document.querySelectorAll('#mySidebar a');
    links.forEach((link) => {
        
        let mainlink = link.getAttribute("href");
        console.log("Links:::=>",mainlink);
        console.log("Browser Links:::=>",location.href.substring(location.href.lastIndexOf("/") + 1));
        if(mainlink === location.href.split("/")[location.href.split("/").length -1])
        {
            link.classList.add("active");
        }
      });


    //console.log("My Links:::==>",links);

    // function setActiveLink(){

    //     // get the current url
    //     var url = window.location.pathname;
    //     // decode the url
    //     url = decodeURIComponent(url);
      
    //     // this is incase your project isn't in the root directory of your url
    //     // for example localhost/ActiveNavLink/index.html
    //     projectPrefix = "/ActiveNavLink/";
      
    //     // loop through each nav li
    //     $('#mySidebar a').each(function(){
      
    //       // get the menu a tag and get its href attribute
    //       var href = $(this).attr('href');
      
    //       // href can be undinded if there is a divider
    //       if(href === undefined)
    //         return;
      
    //       // add the project prefix
    //       href =  projectPrefix + href;
          
    //       // check if the menu item is equal to the current url    
    //       if(url.substring(0, href.length) == href){
    //         // set active class to li
    //         $(this).addClass('active');
      
    //         // check if there is a parent dropdown
    //         var parentDropDown = $(this).closest('.dropdown');
    //         // if there is a parent dropdown set it to active as well
    //         if(parentDropDown !== undefined){
    //           parentDropDown.addClass('active');
    //         }
    //       }
            
    //     });
      
    //   }
});
