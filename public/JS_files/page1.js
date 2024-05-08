





document.addEventListener('DOMContentLoaded', () => {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.getElementById('dropdown-content');
  
    dropbtn.addEventListener('click', () => {
      dropdownContent.classList.toggle('show');
    });
  
    document.addEventListener('click', (event) => {
      const target = event.target;
      if (!target.closest('.dropdown') && dropdownContent.classList.contains('show')) {
        dropdownContent.classList.remove('show');
      }
    });
  });
  
function askUserType() {
document.getElementById('userTypeModal').style.display = 'block';
}

function getLoginPage(userType) {
document.getElementById('userTypeModal').style.display = 'none'; //hide popup asking if seller or buyer
location.href='/signin' ;//generate a get request that will be picked up by router middleware
}

// Get the modal
var modal = document.querySelector('.modal');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}

// document.getElementById('email-input').addEventListener('input', function() {
// var subscribeButton = document.getElementById('subscribe-button');
// if (this.value !== '') {
//     subscribeButton.classList.add('active');
// } else {
//     subscribeButton.classList.remove('active');
// }
// });
