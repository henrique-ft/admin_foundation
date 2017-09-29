$(document).foundation()
$('[data-app-dashboard-toggle-shrink]').on('click', function(e) {
  e.preventDefault();
  $(this).parents('.app-dashboard').toggleClass('shrink-medium').toggleClass('shrink-large');
});

// Mensagem de confirmação de exclusão

$('.need-confirmation-delete').click(function(e){
  
  if (!confirm("Deseja realmente excluir?")) {
    
    e.preventDefault();
  }
});