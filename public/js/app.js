$(document).ready(function(){
    $("#boton").click(function(){
        $.getJSON("https//localhost:2034/demo.json", function(response){
           var fundadores ="<ul>";
           for(i=0,l=response.fundadores.length; i<l;i++){
               fundadores+="<li>"+response.fundadores[i]+"</li>";
           }
           fundadores+="</ul>";
        	$("#fundadores").html(fundadores);
        	
        	var equipo ="<ul>";
           for(i=0,l=response.equipo.length; i<l;i++){
               equipo+="<li>"+response.equipo[i]+"</li>";
           }
           equipo+="</ul>";
        	$("#equipo").html(equipo);

        	var equipoTecnico ="<ul>";
           for(i=0,l=response.equipoTecnico.length; i<l;i++){
               equipoTecnico+="<li>"+response.equipoTecnico[i]+"</li>";
           }
           equipoTecnico+="</ul>";
        	$("#equipoTecnico").html(equipoTecnico);
        });
    }); 
});       
