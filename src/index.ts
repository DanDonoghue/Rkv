import { v4 as uuid } from 'uuid';
export class Rkv {
	[key: string]: any;
	constructor(o?: object){
		return o ? Object.assign(this,o) : this;		// Combine Rkv and user-provided objects into one
	}
	addChild(provided: object, ...parent : string[]){
		let o = new Item( provided, parent );								// Convert object into an Item
		let identifier = uuid();						// Generate an identifier
		if( parent ){									// If a parent was provided
			parent.forEach( p => (this[ p ]._child.push( identifier )))	// Add the new child identifier to the parents children list
		}
		this[identifier] = o;							// Add the new Item to the root Rkv object
		return identifier;								// Return the new Item's identifier
	}
	getChild(o: Item, callback: (value: object, index?: number, array?: string[]) => void ){
		o._child.forEach( (value, index, array) => { callback( this.getItem(value), index, array) } );
	}
	getParent(o: Item, callback: (value: object, index?: number, array?: string[]) => void ){
		o._parent.forEach( (value, index, array) => { callback( this.getItem(value), index, array) } );
	}
	getItem( identifier: string ) : Item{
		return this[ identifier ];
	}
}
class Item {
	_parent: string[] = [];								// Parents list for this Item
	_child: string[] = [];								// Children list for this Item
	constructor(o: object, parent: string[]){								// Constructor accepts user object
		this._parent = parent;
		return Object.assign(this, o);					// Combine user object with the List object
	}
}
