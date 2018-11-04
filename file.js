function printBox(width, height, style = '# ', left = 0, top = 0){
  for (let i = 0; i < height; i++) {       //1 - Ln 2 Col 3 for (let i = 0; i < ... - For statement
    for (let j = 0; j < width; j++) {      //1 - Ln 3 Col 5 for (let j = 0; j < ... - For statement
      result += style
    }
    if (i !== height - 1) {                //2 - Ln 6 Col 5 if (i !== height -1 - If with else statement
      result += EOL + curForward(left)
    } else {
      result += EOL
    }
  }
  return result                            //1 - Ln 12 Col 3 return result - Return statement
}