function MutablePoint3D(x, y, z) {

    this.getX = function() {
        return x;
    }
    this.getY = function() {
        return y;
    }
    this.getZ = function() {
        return z;
    }
    this.move = function(dx, dy, dz) {
        x += dx;
        y += dy;
        z += dz;
    }
    return this;
}

MutablePoint3D.prototype.toString = function(){
    return '(' + this.getX() + ', ' + this.getY() + ', ' + this.getZ() + ')';
}


function ImmutablePoint3d(x, y, z) {
    this.getX = function() {
        return x;
    }
    this.getY = function() {
        return y;
    }
    this.getZ = function() {
        return z;
    }
}

ImmutablePoint3d.prototype.move = function(dx, dy, dz){
    return new ImmutablePoint3d(this.getX() + dx, this.getY() + dy, this.getZ() + dz)
};

ImmutablePoint3d.prototype.toString = function(){
    return '(' + this.getX() + ', ' + this.getY() + ', ' + this.getZ() + ')';
}
