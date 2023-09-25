// index.js

const { calculateNetSalary } = require ('./salary');

// Import built-in 'readline' module to take user input
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter your basic salary: ', (basicSalaryInput) => {
  const basicSalary = parseFloat(basicSalaryInput);

  rl.question('Enter your benefits: ', (benefitsInput) => {
    const benefits = parseFloat(benefitsInput);
    const { grossSalary, payee, nhifDeduction, nssfDeduction, netSalary } = calculateNetSalary(basicSalary, benefits);

    // Display the results
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Payee (Tax): ${payee}`);
    console.log(`NHIF Deductions: ${nhifDeduction}`);
    console.log(`NSSF Deductions: ${nssfDeduction}`);
    console.log(`Net Salary: ${netSalary}`);

    rl.close();
  });
});
