$(".takki").click(function() {
  var numer = $(".number").val();
  sekja(numer);
  //Leitar vélin "leitaupp" til að skrifa inn í
  
});
$( ".number" ).keydown(function( event ) {
  if ( event.which == 13 ) {
   var numer = $(".number").val();
  sekja(numer); 
 //virkja enter takkann "number" er kassin eða inputið að nafni number og er verið að kalla á að það sé verið að íta á enter í honum.
  }
  });
//hér fyrir neðan er ég bara að sækja göngin
var sekja = function(number){
  $.ajax({
  'url': 'https://apis.is/car',
  'type': 'GET',
  'dataType': 'json',
  'data': {'number': number},
    'error':function(){console.log("error")
 $('#listi').hide(); 
     $('.error').html(' <div class="fanstekki"> Því miður fannst þetta númer ekki.</div>').show();  
    },
    // er hérna að láta fela listann ef það er error
  'success': function(response) {
    console.log(response)
    $('#listi').show();
    $('.error').hide();
     //en hérna að fela errorið og sýna listann því ef það er ekki og maður leitar af númeri eftir að það kemur error kemur listinn ekki aftur upp.
    
     

 
  
  $("#skrnumer").html(response.results[0].registryNumber);
    $("#skrnumer").html(response.results[0].error);
    $("#fastnumer").html(response.results[0].number);
  $("#verknumer").html(response.results[0].factoryNumber);
    $("#tegund").html(response.results[0].type);
    $("#undirtegund").html(response.results[0].subType);
    $("#litur").html(response.results[0].color);
    $("#argerd").html(response.results[0].registeredAt);
    $("#stada").html(response.results[0].status);
    $("#skodun").html(response.results[0].nextCheck);
    $("#mengun").html(response.results[0].pollution);
    $("#kg").html(response.results[0].weight);
  // verið að tengja html nöfnin við nöfnin sem apis.is gefur manni eins og skáningarnúmer við registryNumber og fl.
    

    }
}
    
)};
;