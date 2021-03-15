function LongestWord(sen) {
  // code goes here
    sen = sen.replace(/[^a-zA-Z0-9 ]/g, '')

    sen = sen.split(' ');

    let longest = ""; 
    for (let i = 0; i < sen.length; i++){
      if (sen[i].length > longest.length){
        longest = sen[i]
      }

    }
  return longest;
}

console.log(LongestWord("Today I love you more than Yesterday"));
