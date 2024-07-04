
  document.getElementById('titre').addEventListener('click', function() {
    location.reload(); // Refresh the page
  });




  function redirigerVersWhatsApp() {
    window.location.href = "https://wa.me/+237620114013";
  }



  document.getElementById('profile-pic').addEventListener('click', function() {
    location.reload(); // Refresh the page
  });



  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
  }
