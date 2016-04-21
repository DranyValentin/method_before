Element.prototype.before = function() {
	if ( !this.parentNode ) return

	var frag = new DocumentFragment

	for ( var node of arguments ) {
		if ( typeof node == "string" ) {
			node = /^<\w+>$/ig.test(node)
				? this.ownerDocument.createElement(node.slice(1, -1))
				: new Text(node)
		}
		
		frag.appendChild(node)	
		console.log(node)
	}

	this.parentNode.appendChild(frag)
}
