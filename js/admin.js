$(document).foundation()
$('[data-app-dashboard-toggle-shrink]').on('click', function(e) {
  e.preventDefault();
  $(this).parents('.app-dashboard').toggleClass('shrink-medium').toggleClass('shrink-large');
});

// Exclusion cofirmation
$('.need-confirmation-delete').click(function(e){
  
  if (!confirm("Deseja realmente excluir?")) {
    
    e.preventDefault();
  }
});