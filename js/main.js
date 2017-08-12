function articleTemplate(title, url, snippet){
    return '<a target="_blank" href="'+url+ '"><article><h4 class="title">'
            + title +'</h4><p class="text">'
            + snippet + '</p></article></a>';
};

$('document').ready(function(){
  $('#enter').click(function(){
    wikiData();
  });
});



function addWiki(searchWord,titleArray, snippetArray, urlArray){
  for(let i = 0, n=titleArray.length; i < n; i++){
      $('.searchResult').append(articleTemplate(titleArray[i],urlArray[i],snippetArray[i]));
  }
};


function wikiData(){

var wikiURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + $('input[name="searchbox"]').val() + '&format=json&callback=?';

$.ajax({
    url: wikiURL,
    dataType: "jsonp",
    success: function(data){
      //console.log(JSON.stringify(data));
        addWiki(...data);
    }
  });
};
