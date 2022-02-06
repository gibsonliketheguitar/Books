const invoice = require("./invoices.json");
const plays = require("./invoices.json");
const amountFor = require("./playFor");
const playFor = require("./playFor.js");

function statement(invoice, plays) {
  let result = `Statement for ${invoice.customer}\n`;

  for (let perf of invoice.performances) {
    // print line for this order
    result += ` ${playFor(perf).name}: ${usd(amountFor(perf))} (${
      perf.audience
    } seats)\n`;
  }

  result += `Amount owed is ${usd(totalAmount / 100)}\n`;
  result += `You earned ${volumeCredits()} credits\n`;
  return result;
}

statement(invoice, plays);
