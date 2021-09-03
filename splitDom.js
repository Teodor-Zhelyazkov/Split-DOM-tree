function splitDom( $node, $offset )
{
    if( !$node || !$offset )
        return;

    var parent    = $node.parentNode;
    var target    = $node;
    var tmpParent = null;
    while( parent && !parent.isSameNode($offset.parentNode) )
    {
        // clone parent and append all nodes from target to right ->
        var parentClone = parent.cloneNode();
        while ( target && target.nextSibling )
            parentClone.appendChild(target.nextSibling);
        // add target to first position in the cloning
        if( target )
            parentClone.insertBefore(target, parentClone.firstChild);
        // if we have previous parent : Add at first position in the current cloning
        if( tmpParent )
            parentClone.insertBefore(tmpParent, parentClone.firstChild);
        // move to next parent & target
        target    = parent.nextSibling;
        parent    = parent.parentNode;
        tmpParent = parentClone;
    }

    return tmpParent;
}
