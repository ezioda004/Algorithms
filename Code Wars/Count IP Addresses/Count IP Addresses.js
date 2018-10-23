function ipsBetween(start, end) {
  start = start.split(".");
  end = end.split(".");
  return [0, 1, 2, 3].reduce(
    (a, c, i) =>
      (a +=
        (c == 0 ? 1 : 256 ** c) *
        (end[end.length - i - 1] - start[start.length - i - 1])),
    0
  );
}
