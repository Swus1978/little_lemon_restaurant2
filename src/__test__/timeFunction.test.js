import { updateTimes, initializeTimes } from "./__test__/timeFunctions"; // Adjust the path based on your folder structure

test("updateTimes returns the same value as input", () => {
  const times = [
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00"
  ];
  const updatedTimes = updateTimes(times);
  expect(updatedTimes).toEqual(times);
});

test("initializeTimes returns the expected value", () => {
  const times = initializeTimes();
  const expectedTimes = [
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00"
  ];
  expect(times).toEqual(expectedTimes);
});
