const SEARCH_RES = $('.searchResult');

$('#enter').click(function(){
    wikiData();
});




function addWiki(searchWord,titleArray, snippetArray, urlArray){

  SEARCH_RES.hide();

  for(let i = 0, n=titleArray.length; i < n; i++){
      SEARCH_RES.append(articleTemplate(titleArray[i],urlArray[i],snippetArray[i]));
  }
  SEARCH_RES.slideDown();
};

function articleTemplate(title, url, snippet){
    return '<a target="_blank" href="'+url+ '"><article class="slideIn"><h4 class="title">'
            + title +'</h4><p class="text">'
            + snippet + '</p></article></a>';
};


function wikiData(){
var searchBox = $('input[name="searchbox"]').val();
if(searchBox.length == 0){
  SEARCH_RES.html('<div class="error">The search field is empty.</div>');
}
else{
var wikiURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' +
              searchBox + '&format=json&callback=?';

$.ajax({
    url: wikiURL,
    dataType: "jsonp",
    success: function(data){
        addWiki(...data);
    }
  });
  }
  return false;
};
