(function() {
  var nextQuoteURI = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?';
  var tweetURI = 'https://twitter.com/intent/tweet?text=';
  
  function renderQuote(quote) {
     $('#author').addClass('flipOutY');

   
    $('#tweet-btn').attr('href', tweetURI + encodeURIComponent($('#quote').text()));
    
    setTimeout(function() {
          $('#quote').addClass('flipInX');
    $('#quote').html(quote[0].content);
       $('#author').html(quote[0].title);
    }, 400);
    setTimeout(function() {
      $('#quote').removeClass('flipInX');
      $('#author').removeClass('flipOutY');
      
      $('#loading').hide();
    }, 800);
  }
  
  function nextQuote() {
    $('#loading').show();
    $.ajax({
      dataType : 'jsonp',
      url : nextQuoteURI,
    }).then(renderQuote);
  }


  $(document).ready(function() {
    $('#tweet-btn').attr('href', tweetURI + encodeURIComponent($('#quote').text()));
    $('#next-quote').on('click', nextQuote);
  });
})();