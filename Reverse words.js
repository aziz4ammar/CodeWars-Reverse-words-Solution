function reverseWords(str) {
    // Split the string into an array of words
    const wordsArray = str.split(' ');
  
    // Reverse each word in the array
    const reversedWordsArray = wordsArray.map(word => reverseWord(word));
  
    // Join the reversed words back into a string
    const reversedString = reversedWordsArray.join(' ');
  
    return reversedString;
  }
  
  // Helper function to reverse a single word
  function reverseWord(word) {
    return word.split('').reverse().join('');
  }  