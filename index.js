// initialization

const tabs = document.querySelectorAll(".tab-content") 
const tabButtons = document.querySelectorAll(".tab-btn")



function openTab(evt, tabId){
    const tabs = document.querySelectorAll(".tab-content");
    const tabButtons = document.querySelectorAll(".tab-btn");

    tabs.forEach(tab => tab.classList.remove("active"));
    tabButtons.forEach(btn => btn.classList.remove("tab-active"));

    document.getElementById(tabId).classList.add("active");
    evt.target.classList.add("tab-active");
    
}

// function switchTheme(){
//     const themeSelector = document.querySelector("#theme-selector")

//     document.querySelector("html").setAttribute("data-theme", themeSelector.value)
// }

// if (localStorage.getItem('color-mode') === 'dark' || (!('color-mode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.documentElement.classList.add('dark')
//     updateToggleModeBtn()
// } else {
//     document.documentElement.classList.remove('dark')
//     updateToggleModeBtn()
// }
// if (localStorage.getItem('color-mode')) {
//     if (localStorage.getItem('color-mode') === 'dark') {
//         document.documentElement.classList.add('dark');
//     } else {
//         document.documentElement.classList.remove('dark');
//     }
//     updateToggleModeBtn();
// }

// function toggleMode(){
//     //toggle between dark and light mode

//     document.documentElement.classList.toggle("dark")
//     updateToggleModeBtn()

    
// }

// function updateToggleModeBtn(){

//     const toggleIcon = document.querySelector("#toggle-mode-icon")
    
//     if (document.documentElement.classList.contains("dark")){
//         // dark mode
//         toggleIcon.classList.remove("bi-sun-fill")
//         toggleIcon.classList.add("bi-moon-fill")
//         // localStorage.setItem("color-mode", "dark")
        
//     }else{
//         toggleIcon.classList.add("bi-sun-fill")
//         toggleIcon.classList.remove("bi-moon-fill")
//         // localStorage.setItem("color-mode", "light")
//     }

// }



