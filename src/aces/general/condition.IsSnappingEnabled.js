export const config = {
  highlight: false,
  listName: "Is snapping enabled",
  displayText: "{my}: Is snapping enabled",
  description: "Is snapping enabled",
  params: [],
};

export const expose = false;

export default function () {
  return this.enableSnap;
}
