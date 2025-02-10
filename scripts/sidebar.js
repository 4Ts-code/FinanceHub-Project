/* This simple js code allows us to alter between the menu icon and the close icon when the icons are clicked
*/


/* For show button you
1. show the sidebar
2. show the close button
3. hide the menu button
4.Prevent body from scrolling


*/
function showSidebar()  {
    const sidebar = document.querySelector('.sidebar')
    // sidebar.style.display = 'flex'
    sidebar.classList.add('show');


    const close = document.querySelector('.close')
    close.style.display = 'block'


    const menu = document.querySelector('.menu')
    menu.style.display = 'none'



    document.body.style.overflow = "hidden";

    // Automatically hide sidebar when any link is clicked
    document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", hideSidebar);
    });
}


/* For hide button you
1. hide the sidebar
2. show the menu button
3. hide the close button
4. Restore Scrolling
*/
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    // sidebar.style.display = 'none'
    sidebar.classList.remove('show');
   

    const menu = document.querySelector('.menu')
    menu.style.display = 'block'


    const close = document.querySelector('.close')
    close.style.display = 'none'

    document.body.style.overflow = "auto";
}



