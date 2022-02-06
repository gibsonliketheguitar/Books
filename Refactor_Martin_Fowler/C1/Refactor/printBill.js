const invoice = require("./invoices.json");
const plays = require("./invoices.json");
const amountFor = require("./playFor");
const playFor = require("./playFor.js");

function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.customer}\n`;

  for (let perf of invoice.performances) {
    // add volume credits
    volumeCredits = volumeCreditsFor(perf);
    // print line for this order
    result += ` ${playFor(perf).name}: ${usd(amountFor(perf) / 100)} (${
      perf.audience
    } seats)\n`;
    totalAmount += amountFor(perf);
  }
  result += `Amount owed is ${usd(totalAmount / 100)}\n`;
  result += `You earned ${volumeCredits} credits\n`;
  return result;
}

statement(invoice, plays);
