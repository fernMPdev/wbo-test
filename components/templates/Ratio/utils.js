export function getHeightToWidthRatio(ratioString) {
  const [width, height] = ratioString.split(':')
  return (height / width) * 100
}
