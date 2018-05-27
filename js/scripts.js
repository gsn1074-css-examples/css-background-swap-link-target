window.addEventListener("load", function() {

    var nodes = document.querySelectorAll("nav a");
    
	for(var i = 0; i  <nodes.length; i++) {

		nodes[i].addEventListener("mouseover", function() {

            document.body.setAttribute("data-theme", this.getAttribute("title"));
            
		});
	}
});
