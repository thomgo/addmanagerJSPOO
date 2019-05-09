// The product shown on the page based on the form values
// Form values come from a formData object that is a special key/value object
// More information : https://developer.mozilla.org/fr/docs/Web/API/FormData
function Product(formData) {
  this.title = formData.get("title");
  this.add = formData.get("add");
  this.description = formData.get("description");
}

//Object to deal with the DOM related to the form submission
var formManager = {
//Function to create a full HTML node element based on an array
//indexes: 0:node, 1:innerHTML, 2:className, 3:parentNode
//exemple : this.nodeCreation("p", "hello world", "text-italic", parent)
  nodeCreation : function(array) {
    //Create the specified node
    var node = document.createElement(array[0]);
    // Add the content and classes
    node.innerHTML = array[1];
    node.className += array[2];
    //Add the node to its parent on the page
    array[3].appendChild(node);
    return node;
  },

// Function to add the object based on form data on the page
  addContent : function(object) {
    //Get the node where objects are meant to be shown
    var addContainer = document.getElementById("AddContainer");
    //Create each part of a card step by step by object's value
    var card = this.nodeCreation(["article", null, "card mb-5", addContainer]);
    var header = this.nodeCreation(["header", null, "bg-dark text-white text-center py-1 rounded-top", card]);
    var cardContent = [
      ["h2", object.title, null, header],
      ["p", object.add, "card-header", card],
      ["p", object.description, "card-body", card]
    ];
    //Create all the nodes to display the object's value
    for (var i = 0; i < cardContent.length; i++) {
      this.nodeCreation(cardContent[i]);
    }
  },

// Function to get all the form values, create a product object based on it and add it to the DOM
  getForm : function() {
    //Get the form from the html page
    form = document.getElementById("productForm");
    //Create the formData object to get the value from the html form
    var formData = new FormData(form);
    //Create new Product object hydrated with the form values
    var product = new Product(formData);
    //Add a card with the object's values on the page
    this.addContent(product);
    //Clear the form values
    form.reset();
  }
};
