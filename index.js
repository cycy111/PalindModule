// Reverses a string.
function reverse(string) {
  return string.split("").reverse().join("");
}

// Returns true for a palindrome, false otherwise.
function palindrome(string) {
   let processedContent = string.toLowerCase();
     return processedContent === reverse(processedContent);
     }

// Defines a Phrase object.
function Phrase(content) {
    this.content = content;

    this.processor = function(string) {
      return string.toLowerCase();
    }
    // Returns content processed for palindrome testing.
    this.processedContent = function processedContent() {
      return this.processor(this.content);
    }
	  // Returns true if the phrase is a palindrome, false otherwise.
	  this.palindrome = function palindrome() {
		      return processedContent === reverse(this.processedContent());
		}
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;
  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();
