import chroma from 'chroma-js';

export default function chromify(hexArray, s, l, h) {
  return hexArray.map(hex => {
    return chroma(hex).set('hsl.l', l).set('hsl.s', s).hex()
  });
}
