// Start at `let articles`


class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.element.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerHTML = 'expand';
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.expandButton.parentNode.addEventListener('click', () => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    event.currentTarget.classList.toggle('article-open');

    //toggles button to shrink and expand
    if(!event.currentTarget.classList.contains('article-open')) {
      this.expandButton.innerHTML = 'expand';
    } else {
      this.expandButton.innerHTML = 'shrink';
    }
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(article => new Article(article));
