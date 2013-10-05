//iterate through the length of the fragarray
//each element in the array must be a string
//find the length of each element
//if the length matches number, push that element onto a new array
//when finished iterating, return an array of strings
//done
var correctlength = function (fragarray, number) {
var emptyarray = [];
var spacecount = 0;
	for (var len = 0; len <= (fragarray.length-1); len++) {
		var element = fragarray[len];
        
		
        if(element) {
			element = element.trim();
            //console.log(element);
		}
		if (element.length > number) {
		
			emptyarray.push(element);
           // console.log(emptyarray); //test
			if (element === "" || element ===" ")
			spacecount++;
        }
    }
		
	if(emptyarray.length===0)
		return "no element exists that is greater than that length";
		
	if (spacecount >0)
	return "you have " + spacecount + " empty or undefined strings";

return emptyarray;
}

$(document).ready(function() {
  
  $('.add-filter-string').click(function(){
    var text = $('#new-filter-string').val();
    if(text) {
	  $('.filter-string-list').append('<li>' + text + '</li>');
    }
    return false;
  });
  $('.filter-string-list').click('li', function(ev) {
    $(ev.target).remove();
  });
  $('.execute-filter-list').click(function() {
    var list = [];
    $('.filter-string-list li').each(function() {
      list.push($(this).text());
    });
    var length = parseInt($('#filter-length').val());
    var results = correctlength(list, length);
    $('.filter-results').text(JSON.stringify(results));
  });
});
  





