export const config = {
  highlight: false,
  returnType: "number",
  description:
    "How far along the Y scroll is, from 0 to 1. Overscrolling does not take it past either end, so it can drive a scrollbar directly. Read OverscrollY for how far past the end it has gone",
  params: [],
};

export const expose = false;

export default function () {
  return Math.min(1, Math.max(0, this.scrollProgressY));
}
