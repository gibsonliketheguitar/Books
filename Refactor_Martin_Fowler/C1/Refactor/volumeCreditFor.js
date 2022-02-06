function volumeCreditsFor(aPerformance = []) {
  let result = 0;
  result += Math.max(aPerformance.audience - 30, 0);
  if ("comedy" === playFor(aPerformance).type)
    result += Math.floor(perf.audience / 5);
  return result;
}
