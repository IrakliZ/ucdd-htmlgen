var debug = require('debug')('lib')
var lib = {}

lib.generateHeading1 = function(text) {
    return "<h1>" + text + "</h1>"
}

lib.generateHeading = function(level, text) {
    return "<h" + level + ">" + text + "</h" + level + ">"
}

lib.generateOrderedList = function(arrayOfText) {
 	var myString = "<ol>";
 	for(var i = 0; i < arrayOfText.length; i++)
 	{
 		myString += "<li>" + arrayOfText[i] + "</li>";
 	}
 	myString += "</ol>";
 	return myString
}

lib.generateUnorderedList = function(arrayOfText) {
    var list = "<ul>"
    for (var i = 0; i < arrayOfText.length; i++) {
    	list += "<li>" + arrayOfText[i] + "</li>"
    }
    list += "</ul>"
    return list
}

lib.generateTableRow = function (arrayOfText) {
    var table = ''
    for (var i = 0; i < arrayOfText.length; i++) {
        table += '<td>' + arrayOfText[i] + '</td>'
    }
    return table
}

lib.generateTable = function(twoDimensionalArrayOfText) {
    var table = '<tr>'
    table += lib.generateTableRow(twoDimensionalArrayOfText[1])
    return table + '</tr>'
}

lib.generateHyperLink = function(url, text) {
    return "<a href'" + url + "'>" + text + "</a>"
}

lib.generateFormTextField = function(name) {
    return '<input type="text" name="' + name + '">'
}

lib.generateFormTextField = function(name) {
    return '<input type="text" name="' + name + '">'
}

lib.generateFormTextFieldWithLabel = function(name, label) {
    return '<label>' + label + '</label> <input type="text" name="'+name+'">'
}

lib.generateDropdownList = function(arrayOfValues, arrayOfText) {
    var dropdown = '<select>'
    for(var i = 0; i < arrayOfValues.length; i++) {
        dropdown += '<option value="' + arrayOfValues[i] + '">' + arrayOfText[i] + '</option>'
    }
    return dropdown + '</select>'
}

lib.generateYoutubeVideoEmbeddableFrame = function(width, height, videoId, allowfullscreen) {
    var allow = allowfullscreen ? 'allowfullscreen' : ''
    return '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' + videoId + '" ' + allow + '></iframe>'
}

module.exports = lib
