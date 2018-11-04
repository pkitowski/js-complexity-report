function printBox(width, height, style = '# ', left = 0, top = 0){
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      result += style
    }
    if (i !== height - 1) {
      result += EOL + curForward(left)
    } else {
      result += EOL
    }
  }
  return result
}