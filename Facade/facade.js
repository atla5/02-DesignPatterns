
//The Facade Pattern

window.onLoad = function(){
  var pizzaMaker = new PizzaMaker();
  pizzaMaker.makeAPizza();
};
  
  function Vegan (){
    this.addSpinach = function(){ console.log("-add spinach"); };
    this.addBroccoli = function(){ console.log("-add broccoli"); };
  }
  
  function SauceBucket(){
    this.addSauce = function(){ console.log("-add sauce");  };
  }
  
  function MeatLover(){
    this.addPepperoni = function(){ console.log("-add pepperoni"); };
  }
  
  function Doughboy(){
    this.makeDough = function(){ console.log("-made dough"); };
    this.stretchDough = function(){ console.log("-stretchDough"); };
  }
  
  function CheeseGuy(){
    this.addCheese = function(){ console.log("-add cheese"); };
  }

  function PizzaMaker(){
    
    this.cheeseGuy = new CheeseGuy();
    this.doughBoy = new Doughboy();
    this.sauceBucket = new SauceBucket();
    this.vegan = new Vegan();
    this.meatLover = new MeatLover();

    this.makeAPizza = function(){
      
      this.doughBoy.makeDough();
      this.doughBoy.stretchDough();
      this.sauceBucket.addSauce();
      this.vegan.addSpinach();
      this.cheeseGuy.addCheese();
      
      this.meatLover.addChicken();
      this.meatLover.addBacon();
    
      console.log("PIZZA MADE");
    };
  
  }
  