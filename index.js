// initialization

const tabs = document.querySelectorAll(".tab-content") 
const tabButtons = document.querySelectorAll(".tab-btn")



function openTab(evt, tabId){
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tc => tc.classList.remove('active'));

    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => btn.classList.remove('tab-active'));

    document.getElementById(tabId).classList.add('active');
    evt.currentTarget.classList.add('tab-active');

    // Store the active tab in sessionStorage
    sessionStorage.setItem('activeTab', tabId);
    
}

window.addEventListener('DOMContentLoaded', () => {
    // Default to About tab on first load
    const lastTab = sessionStorage.getItem('activeTab') || 'about';
    const tabBtn = document.querySelector(`.tab-btn[onclick*="${lastTab}"]`);
    if (tabBtn) tabBtn.click();
});
