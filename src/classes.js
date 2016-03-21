class Foo {

}
var bar = new Foo;



class Dog {
   constructor() {
     this.says = 'life is ruff';
   }
}


class Cat {
 growl() {
   return 'meow';
 }
};

var garfield = new Cat();



class FacelessMan {
 constructor(name) {
   this.name = name;
 }
}
var aMan = new FacelessMan(`Jaqen H'ghar`);



class Lion extends Cat{
  constructor() {
    super();
   this.size = 'BIG';
  }
}




class KeepSecret {
  constructor(something) {
  this.squeal = function() {
    return something;
  }
 }
}





class Key {
  constuctor(){

  }
}

class Safe {
  constructor(secret, Key){
   this.unlock = function(open) {
     if (open == Key) {
       return secret;
     }
   }
   return undefined;
  }
}
