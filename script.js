// Dark and lightmode button
// 
// 
// 
function light() {
    var element = document.body;
    element.classList.toggle("lightmode");
  }


  const toggleButton = document.getElementById('light');

  // Load preference on page load
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('lightmode');
  }

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('lightmode');
    
    // Save the preference
    if (document.body.classList.contains('lightmode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });
// 
// 
//   


// Sidepanel functionality
const sidepanelButton = document.getElementById('sidepanel-button');
const sidepanel = document.getElementById('sidepanel');

sidepanelButton.addEventListener('click', () => {
    sidepanel.classList.toggle('open');
});