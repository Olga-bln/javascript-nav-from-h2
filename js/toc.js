"use strict";

{

    const navButton = $("input.openSideNavBtn");
    const closeButton = $("input.closeSideNavBtn");
    const sideNav = $('aside');
    const h2 = $$('h2');
    const navUl = $('#tocLost');

     

    const showNavOnClick = () => {

        $on(navButton, "click", wideSideNav);

    };

    const wideSideNav = () => {
        sideNav.style.width = '25vw';
        $("main").style.width = '65vw';
        navButton.style.marginRight = '25vw';
        navButton.style.wordSpacing = '30px';
    };

    const hideNavOnClick = () => {

        $on(closeButton, "click", shrinkSideNav);
    };

    const shrinkSideNav = () => {
        sideNav.style.width = '0vw';
        $('main').style.width = '95vw';
        navButton.style.marginRight = '0';
        navButton.style.wordSpacing = '10px';
    };

   

    showNavOnClick();
    hideNavOnClick();

    

    
    function setId(h2entry, index) {
        h2entry.setAttribute("id", index);
    }



    function makeTocEntry(h2entry) {

        let node = document.createElement("LI");
        let a = document.createElement('a');
        a.title = h2entry.innerHTML;
        a.href = "\#" + h2entry.id;
        let contenTitle = document.createTextNode(h2entry.innerHTML);
        a.appendChild(contenTitle);
        node.appendChild(a);
        navUl.appendChild(node);

    };

    
    const h2Ids = h2.forEach(setId);

    const navUlBuild = h2.forEach(makeTocEntry);



}
