
class likecomp {

constructor (private _likecount:number, private _isSelected: boolean)
{}

onClick() {
    	this._likecount += (this._isSelected) ? -1 : +1;
        this._isSelected = !(this._isSelected);
        }
        
get likesCount() {
	return this._likecount;
	}

get isSelected() {
	return this._isSelected;
	}




}


let component = new likecomp(10, false);
component.onClick();
console.log(`likescount: ${component.likesCount}, isselscted: ${component.isSelected}`)
