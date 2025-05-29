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
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


// 
// models specs button

function openSpecs() {
  document.getElementById("specs_btn").style.content = "visible";
}
function closeSpecs() {
  document.getElementById("specs_btn").style.content = "hidden";
}