export default function ackermann(m, n) {
  if (m === 0) return n + 1;
  if (m > 0) {
    if (n === 0) return ackermann(m - 1, 1);
    if (n > 0) return ackermann(m - 1, ackermann(m, n - 1));
  }
  return undefined;
}
