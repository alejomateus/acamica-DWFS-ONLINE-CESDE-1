$(document).ready(function(){
   //Cuando cargue la pagina ejecutamos solo los eventos click
    eventosClic();
 });
 
 $(window).resize(function(){
    //cuando se redimensione la ventana ejecutamos solo los eventos resize
    cosasResize(); 
 });
 
 function eventosClic(){
    $("#mobile-menu li a").click(function(){
       var window_width = $(window).width();
       if(window_width > 768){
          $("#btn-menu").hide();
          $("#btn-close-menu").hide();
       }
 
       if(window_width <= 768){
           $(this).parent().parent().animate({"margin-left":"-100%"},400);
           $("#btn-close-menu").hide();
           $("#btn-menu").show();
       }
   });
 
 
   $("#btn-close-menu").click(function(){
      var window_width = $(window).width();
 
      if(window_width <= 768){
         $("#mobile-menu").animate({"margin-left":"-100%"},400);
         $(this).hide();
         $("#btn-menu").show();
      }
   });
 
 
   $("#btn-menu").click(function(){
      var window_width = $(window).width();
      if(window_width <= 768){
         $("#mobile-menu").animate({"margin-left":"0"},400);
         $(this).hide();
         $("#btn-close-menu").show();
      }
   });
 
 }
 
 function cosasResize(){
    var window_width = $(window).width();
    if(window_width > 768){
       $("#btn-menu").hide();
       $("#btn-close-menu").hide();
    }
 
    if(window_width <= 768){
       $("#btn-menu").show();
       $("#btn-close-menu").hide();

       //capturamos el valor de la margen izquieda del menu
       var margin = $("#mobile-menu").css("margin-left");
      //si la margen es igual o mayor a cero quiere decir que el menu esta abierto(se está mostrando)
       if(margin >= "0px"){
         $("#btn-menu").hide();
         $("#btn-close-menu").show();
       }
       //si la margen izquierda es menor o igual al 100% el menu esta escondido(no esta visible)
       if(margin<= "-100%"){
         $("#btn-close-menu").hide();
         $("#btn-menu").show();
       }       
    }
 }

