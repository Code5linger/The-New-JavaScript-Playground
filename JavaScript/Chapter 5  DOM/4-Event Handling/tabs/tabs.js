const tabs = document.querySelector(`.tabs`)
const tabButtons = tabs.querySelectorAll('[role="tab"]')
// const tabPanels = tabs.querySelectorAll('[role="tabpanel"]')
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'))

const handleTabClick = (event) => {
    tabPanels.forEach((panel) => panel.hidden = true)
    tabButtons.forEach(tab => tab.setAttribute('aria-selected', false))
    event.currentTarget.setAttribute('aria-selected', true)
    const { id } = event.currentTarget

    //! Method 1
    // const tabPanel = tabs.querySelector(`[aria-labelledby=${id}]`)
    // tabPanel.hidden = false

    //! Method 2
    const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === id) 
    tabPanel.hidden = false
    console.log(tabPanel)
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick))
