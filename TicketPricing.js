function ticketPrice(age) {
  if (age <= 12) {
    return "$10 (Children)";
  } else if (age >= 13 && age <= 17) {
    return "$15 (Teenagers)";
  } else {
    return "$20 (Adults)";
  }
}

// Example usage:
const age = prompt("Enter your age:");
console.log(`The ticket price is: ${ticketPrice(parseInt(age))}`);
