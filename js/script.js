$(function(){
  
  $('form').submit(function(event){
  	event.preventDefault();
  	var search = $('#query').val();
  	getRequest(search);
  });
});

function getRequest(search) {
	var params = {
		s: search,
		r: 'json'
	};
	url = 'http://www.omdbapi.com';

	$.getJSON(url, params, function(data){
    	showResults(data.Search);
    });
};

function showResults(results) {
	var html = "";
    $.each(results, function(index, value){
 		html += '<p>' + value.Title + '</p>';
        console.log(value.Title);
    });

    $('#search-results').html(html);
};