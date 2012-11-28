// Copyright (C) 2012, Antonio Sanchez <antonio@panthera.ca>

/**
 * @fileOverview Clone button JavaScript code
 * @license GPLv2 or later
 */

/* update link box */
function updatelink(obj,link)
{
	// clear status for link buttons    
    var parent = document.getElementById("clonebuttons");
    var children = parent.childNodes;
    for(i=0; i<children.length; i++) {
        var child = children[i];
        var subchild = child.firstChild;

        if(subchild != null && subchild.id != null && subchild.id.substr(0,11) == "clonebutton"){
            subchild.setAttribute("class", "button");
        }
    }

	// highlight button
    obj.setAttribute("class", "button selected");

	// set text
    var textbox = document.getElementById('clone_url_box');
    textbox.setAttribute("value", link);
	return true;
}


