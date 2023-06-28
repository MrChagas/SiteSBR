function clickMenu(){
        if (menu.style.display == 'block'){
            menu.style.display = 'none'
        }else{
            menu.style.display = 'block'
        }
}

function mudouTamanho(){
    if(window.innerWidth >= 768){
        menu.style.display = 'flex'
    } else{
        menu.style.display = 'none'
    }
}






/*var header           = document.getElementById('header');
    var navigationHeader = document.getElementById('menu_nav');
    var content          = document.getElementById('content');
    var showSidebar      = false;

function toggleSidebar()
{
    showSidebar = !showSidebar;
    if(showSidebar)
    {
        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)';
    }
    else
    {
        navigationHeader.style.marginLeft = '-100vw';
        navigationHeader.style.animationName = '';
        content.style.filter = '';
    }
}

/*function closeSidebar()
{
    if(showSidebar)
    {
        showSidebar = true;
        toggleSidebar();
    }
}

window.addEventListener('resize', function(event) {
    if(window.innerWidth > 768 && showSidebar) 
    {  
        showSidebar = true;
        toggleSidebar();
    }
})

const headerNavbar = document.getElementById('menu_nav');
let showNavbar = false;

function toggleNavbar() {
    showNavbar = !showNavbar;
    
    if(showNavbar) {
        headerNavbar.style.marginLeft = '-0vw';
        headerNavbar.style.animationName = 'showNavbar';
    } else {
        headerNavbar.style.marginLeft = '-100vw';
        headerNavbar.style.animationName = 'closeNavbar';
    }
}

function closeNavbar() {
    if(showNavbar){
        toggleNavbar();
    }
}

window.addEventListener('resize', function(event) {
    if(window.innerWidth > 900 && showNavbar) {
        toggleNavbar();
    }
})*/