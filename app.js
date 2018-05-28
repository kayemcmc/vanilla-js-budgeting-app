//Budget Controller

var budgetController = (function() {
    //some code
})();

//UI Controller
var UIController = (function(){
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }
    return {
        getinput: function() {
            return {
               type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            }
          
        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    }

})();

//Global App Controller
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event) {
        if(event.keyCode === 13 ||  event.which === 13) {
            ctrlAddItem();
        }
    });
    };
  
    
    var ctrlAddItem = function () {
        //1. get the field input data
        var input = UICtrl.getinput();
        console.log(input)
        //2.add the item to budget controller
        //3. Add the item to user interface
        //4. calculate the budget
        //5.display the budget
        console.log('it worked')
    };

    return {
        init: function() {
            console.log('Application has started');
            setupEventListeners();
        }
    }
    
})(budgetController, UIController);

controller.init();


