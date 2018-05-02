// The product shown on the page based on the form values
function Product(array) {
  this.title = array[0];
  this.add = array[1];
  this.description = array[2];
}


var formManager = {
//Function to create the HTML elements based on an array
//indexes: node 0, innerHTML 1, className 2, father 3
  nodeCreation : function(array) {
    var currentNode = document.createElement(array[0]);
    if(array[1]) {
      currentNode.innerHTML = array[1];
    }
    if(array[2]) {
      currentNode.className += array[2];
    }
    if (array[3]) {
      array[3].appendChild(currentNode);
    }
    return currentNode;
  },

// Function to add the created HTML content on the page
  addContent : function(object) {
    var addContainer = document.getElementById("AddContainer");
    var article = this.nodeCreation(["article", false, false, addContainer]);
    var header = this.nodeCreation(["header", false, false, article]);
    var nodeList = [
      ["h2", object.title, false, header],
      ["p", object.add, "add", article],
      ["p", object.description, "mainContent", article]
    ];

    for (var i = 0; i < nodeList.length; i++) {
      this.nodeCreation(nodeList[i]);
    }
  },

// Function to get all the form values, create a product object based on it and add it to the DOM
  getForm : function() {
    var input = document.getElementsByClassName("form-control");
    var value = [];
    for (var i = 0; i < input.length; i++) {
        value.push(input[i].value);
        input[i].value="";
    }
    var currentProduct = new Product(value);
    this.addContent(currentProduct);
  }
};
