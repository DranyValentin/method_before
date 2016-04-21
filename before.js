Element.prototype.before = function() {
	if ( !this.parentNode ) return

	var frag = new DocumentFragment

	for ( var node of arguments ) {
		if ( typeof node == "string" ) {
			node = /^<\w+>$/i.test(node)
				? this.ownerDocument.createElement(node.slice(1, -1))
				: new Text(node)
		}
		
		frag.appendChild(node)
	}

	this.parentNode.insertBefore(frag, this)
}
