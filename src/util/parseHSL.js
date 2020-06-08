export function parseHSL(hslString){
  if (hslString !== '') {
    // parse hsl
    return hslString.match(/\((\d+), (\d+)%, (\d+)%/);
  }
}
