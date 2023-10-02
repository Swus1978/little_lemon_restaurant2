import { initializeTimes, updateTimes } from "./initializeTime.js"; // Update the path

test("updateTimes returns the same value", () => {
  const currentState = {}; // Set the current state as needed
  const result = updateTimes(currentState);
  expect(result).toEqual(currentState);
});
