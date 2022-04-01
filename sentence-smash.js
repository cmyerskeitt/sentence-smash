function smash (words) {
    let sentence = ""
    if(words.length === 0){
      return sentence
    } else if (words.length === 1){
      return words.toString()
    }else{
       sentence += words.join(" ")
    } 
    return sentence
}
   