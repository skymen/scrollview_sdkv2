export const config = {
  highlight: false,
  returnType: "number",
  description: "Snap distance threshold",
  params: [],
};

export const expose = false;

export default function () {
  return this.snapDistanceThreshold;
}
