export const config = {
  highlight: false,
  listName: "Is enabled",
  displayText: "{my}: Is enabled",
  description: "Is enabled",
  params: [],
};

export const expose = false;

export default function () {
  return this.enabled;
}
