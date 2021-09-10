
/*===== GLOBALS  ======*/
const classDanger = 'btn-outline-danger';
const classPrimary = 'btn-primary';
const classInfo = 'btn-outline-secondary';
const activeCardContainer = document.getElementById('active_cards_container');
const inactiveCardContainer = document.getElementById('inactive_cards_container');

let container = '';
let otherContainer = '';

/*=====  CARDS CONSTRUCTOR  ======*/
class Cards {

  buttonClass = '';
  buttonText = '';
  id = Math.floor(Math.random() * 100);
  infoText = 'More Info';

  constructor(title, text, info, active) {
    this.title = title,
      this.text = text,
      this.info = info,
      this.active = active,
      this.injection();
  }

}

/*===== INJECTION CARDS METHOD ======*/
Cards.prototype.injection = function () {

  /*=============================================
  =               RENDER CARD             =
  =============================================*/

  // Check if card is active and define action btns   
  if (this.active === true) {
    container = activeCardContainer;
    this.buttonClass = classDanger;
    this.buttonText = 'Remove';
  } else {
    container = inactiveCardContainer;
    this.buttonClass = classPrimary;
    this.buttonText = 'Activate';
  }

  // Create div to contain card
  let injectedCard = document.createElement('div');

  // Inject card HTML
  injectedCard.innerHTML =
    `
    <div class="card" id="${this.id}">
      <h3 class="card__title text-center">${this.title}</h3>
      <p class="card__text">${this.text}</p>
      <div class="card__btn__container">
        <button class="btn btn-outline-secondary">${this.infoText}</button>
        <button class="btn ${this.buttonClass}">${this.buttonText}</button>
      </div>
      <div class="card__info"></div>
    </div>
    `;

  // Append Card when created
  container.appendChild(injectedCard);

  // Grab the card by id
  let card = document.getElementById(`${this.id}`);

  /*=============================================
  =               TOGGLE MORE INFO              =
  =============================================*/

  // Define info text
  let info = this.info;

  // Grab Info Container
  let infoContainer = card.children[3];
  infoContainer.style.display = 'none';

  // Grab Info Button
  let infoBtn = card.children[2].children[0];

  // Toggle Info Function
  // when click on Info Btn
  function toggleInfo() {
    if (infoContainer.style.display === 'none') {
      infoContainer.style.display = 'block';
      infoBtn.innerText = 'Less Info';
      infoContainer.innerText = info;
    } else {
      infoContainer.style.display = 'none';
      infoBtn.innerText = 'More Info';
      infoContainer.innerText = '';
    }
  }

  // If Info is displayed, hide it
  // when click on action btns 
  function hideInfo() {

    infoContainer.style.display = 'none';
    infoBtn.innerText = 'More Info';
    infoContainer.innerText = '';

  }

  // Toggle More Info on click
  infoBtn.addEventListener('click', toggleInfo);

  /*=============================================
  = MOVE CARDS ACROSS ACTIVE/INACTIVE CONTAINER =
  =============================================*/

  // Grab Action Button
  let actionBtn = card.children[2].children[1];

  // Define action based on what action btn is clicked
  function defineAction() {

    // If click on ACTIVATE
    if (actionBtn.classList.contains(classPrimary)) {

      // Define action buttons    
      actionBtn.classList.remove(classPrimary);
      actionBtn.classList.add(classDanger);
      actionBtn.innerText = 'Remove';

      // Inject cards in the right container
      container = activeCardContainer; //where the card will be placed
      container.appendChild(injectedCard);
      otherContainer = inactiveCardContainer; //where the card was before click

      hideInfo();

    } else {
      // If click on REMOVE  

      // Define action buttons   
      actionBtn.classList.remove(classDanger);
      actionBtn.classList.add(classPrimary);
      actionBtn.innerText = 'Activate';

      // Inject cards in the right container
      container = inactiveCardContainer;//where the card will be placed
      container.appendChild(injectedCard);
      otherContainer = activeCardContainer;//where the card was before click

      hideInfo();

    }
  }

  // Hide empty section
  //if the container where the card was before the click is empty, hide it
  function hideEmptySection() {

    if (!otherContainer.hasChildNodes()) {
      otherContainer.parentNode.style.display = 'none';
    } else {
      container.parentNode.style.display = 'block';
    }

  }

  // Move the card across sections active/inactive and hide empty section
  actionBtn.addEventListener('click', function () {

    defineAction();
    hideEmptySection();

  });

} // .prototype

/*===== CLASS CARDS WITH ARRAY ======*/
class CardsList {
  cards = [

    new Cards(
      'Card One',
      'Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Morbi nec metus. Vestibulum suscipit nulla.',
      'Nulla consequat massa quis enim. Curabitur ullamcorper ultricies nisi. Donec vitae sapien ut libero venenatis faucibus. Nunc nec neque. Sed lectus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Fusce fermentum odio nec arcu. Phasellus gravida semper nisi. Nam eget dui.',
      true),
    
    new Cards(
      'Card Two',
      'Mauris sollicitudin fermentum libero. Proin faucibus arcu quis ante. Nunc interdum lacus sit amet orci.',
      'Phasellus blandit leo ut odio. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Suspendisse potenti. Praesent vestibulum dapibus nibh. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Phasellus gravida semper nisi. Phasellus viverra nulla ut metus varius laoreet.',
      false
    ),
    
    new Cards(
      'Card Three',
      'Fusce a quam. Fusce fermentum odio nec arcu. Sed aliquam ultrices mauris. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus.',
      'Praesent adipiscing. Aliquam eu nunc. Phasellus tempus. Nulla sit amet est.Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis illum at ullam quis incidunt distinctio ipsum voluptas modi praesentium nemo.',
      false
    ),
    
    new Cards(
      'Card Four',
      'Nulla sit amet est. Proin faucibus arcu quis ante. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum.',
      'Nam at tortor in tellus interdum sagittis. Praesent congue erat at massa. Vivamus elementum semper nisi. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Quisque id odio. Aenean imperdiet. Etiam rhoncus. Phasellus magna. Curabitur at lacus ac velit ornare lobortis. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Praesent congue erat at massa. Praesent venenatis metus at tortor pulvinar varius.',
      true
    ),
    
    new Cards(
      'Card Five',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quidem reiciendis cumque at minima velit?',
      'Suspendisse potenti. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Pellentesque dapibus hendrerit tortor. Cras varius. Morbi mollis tellus ac sapien. Phasellus ullamcorper ipsum rutrum nunc. Praesent turpis. Nullam quis ante. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede.',
      false
    ),

  ];
  constructor() { }
}

// Create cards array
const cardsList = new CardsList();


