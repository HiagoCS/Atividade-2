$(document).on("click", "#btn", function(){
  var idade = $("#age").val();
  if($("#name").val()!="")
  var nome = $("#name").val();
  else
  var nome = "SEM NOME";
  if(idade > 17){
    $("#add").html("<div class='row' id='add'><div class='col-sm-12'><img src='components/img/permitido.jpg' height='250' width='250' id='img'><br><h2 id='titulo'>Olá "+nome+" pode entrar!!!</h2></div></div>");
  }
  else{
    $("#add").html("<div class='row' id='add'><div class='col-sm-12'><img src='components/img/proibido.jpg' height='250' width='250' id='img'><br><h2 id='titulo'>Descupe "+nome+", criança não passa!!!</h2></div></div>");
  }
});