import chroma from 'chroma-js';

export default function chromify(hexArray, s, l) {
  return hexArray.map(hex => {

    return chroma(hex).set('hsl.s', s).set('hsl.l', l).hex()
  });
}
