var movieSort = function(movies) 
{
    var sorted = [];
    
    for (var i = 0; i < movies.length; i++) 
    {
        var splitItem = movies[i].split(',');
        var splitObject = 
        {
            'Title': splitItem[0],
            'Year': splitItem[1],
            'Votes': splitItem[2]
        }
        sorted.push(splitObject);
    }
    
    function sortYear(a, b)
    {
        if (a.Year === b.Year) 
        {
            return 0;
        }
        else if (a.Year > b.Year) 
        {
            return 1;
        }
        return -1;
    };
    
    sorted.sort(sortYear);
    
    return sorted;
};
