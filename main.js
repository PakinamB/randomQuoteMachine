$(document).ready(function(){
    var quote;
    var author;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

 function getNewQuote(){
      $.ajax({
         url:'http://api.forismatic.com/api/1.0/',
          jsonp:"jsonp",
          dataType:'jsonp',
          
         data:{
              method:'getQuote',
              lang:'en',
              format:'jsonp'
          },
          success:function(response){
              quote=response.quoteText;
              author=response.quoteAuthor;
              $('#quote').text(quote);
              		
$('body').css ( 'background-color',getRandomColor);

              if (author){
                  $('#author').text('- ' + author)
              }
              else{
                  $('#author').text('- '+ 'Uknown');
              }
          }
      });
  } 
    getNewQuote();
    $("#newquote").on("click",function(event){
        event.preventDefault();
        getNewQuote();
    });
    $("#share").on('click',function(event){
        event.preventDefault();
        window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(quote+'  ~ '+author))
    })
});