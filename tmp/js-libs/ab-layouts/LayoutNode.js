jsLibs.exportModule('ab-layouts', 'LayoutNode', (require, module) => { 'use strict';

const abNodes = require('ab-nodes');
const js0 = require('js0');


class LayoutNode extends abNodes.Node
{

    constructor()
    { super();
        js0.prop(this, LayoutNode.PChildren, this);

        // this._idNodes = {};
    }

    // setIds(id_nodes)
    // {
    //     js0.argsE(arguments, 'object');
    //
    //     this._idNodes = id_nodes;
    // }


    /* Node */
    __onActivate()
    {
        for (let i = 0; i < this.pChildren.length; i++)
            this.pChildren.get(i).activate();
    }

    __onDeactivate()
    {
        for (let i = this.pChildren.length - 1; i >= 0; i--)
            this.pChildren.get(i).deactivate();
    }

    __getHtmlElement()
    {
        js0.assert(this.parentNode !== null, 'Parent node not set.');

        return this.parentNode.htmlElement;
    }

    __getFirstHtmlElement()
    {
        return this.pChildren.length === 0 ?
                null : this.pChildren.get(0).firstHtmlElement;
    }
    /* / Node */

}
module.exports = LayoutNode;


Object.defineProperties(LayoutNode, {

    PChildren: { value:
    class LayoutNode_PChildren extends abNodes.Node.PChildren
    {

        constructor(node)
        {
            super(node);
        }
        
        __onAddChild(childNode, next_node)
        {
            if (next_node === null)
                childNode._nextNode = this._nextNode;

            if (this.node.active)
                childNode.activate();
        }

        __getNext(childNode)
        {
            let next_node = this.findNext(childNode);
            if (next_node !== null)
                return next_node;

            return this.node.nextNode;
        }

    }}

});






 });