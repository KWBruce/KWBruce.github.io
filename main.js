document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mainHeader").onclick = function() {
      this.style.color = 'green'
    }
    $( document ).ready(function() {
      $( "#catPhoto" ).click(function() {
        $( "#catPhoto" ).fadeOut( "slow", function() {
        });
      });
    });
  })
  