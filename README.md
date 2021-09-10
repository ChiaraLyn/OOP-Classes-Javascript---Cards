# OOP & Classes Javascript
## Two Section and Five Cards

------------------------------------------------

In this basic exercise I've created two section:

* Active Cards
* Inactive Cards

In Each section there are cards with a title, a text, some info that you can toggle using the "More/Less Info" button.

Using the action buttons "Activate" or "Remove" you can move cards across the sections.

The structure of the HTML is created using Bootstrap 4.6

---------------------------------------------------

### OOP

* Step 1   
  I've defined Global constants and variables     
  (mostly CSS classes to toggle when a button is clicked).

* Step 2     
  I've created the Cards constructor class that contains the fields:    
  * buttonClass    
  * buttonText     
  * id of the card (a random number)     
  * info text    

  In the constructor method I've passed as parameters the title, the text, the info and the "active" parameter to check if the card is activated or removed and then the method "injection".
     
  
* Step 3     
  To optimize the code, I've prototyped the method "injection" for the Cards constructor class. This method renders the cards, toggles the infos and moves cards across the section when you click on "activate" or "remove" buttons. A method hide the empty section when all the cards are removed from it.     
  When you click on an action button ("Activate" or "Remove"), I check what type of button is clicked, and then I adapt all the CSS classes and make sure that the card is consistent with the section in which it will be moved, changing the text of the buttons and hiding the info block if open.
        
* Step 4   
  I've created the class containing the array with some card objects. These objects are created using the Cards class constructor and then I've declared the new array of cards.

:gift_heart: It's a simple exercise to get started with Javascript OOP. Hope it can help! :cherry_blossom: :cherry_blossom: :gift_heart: