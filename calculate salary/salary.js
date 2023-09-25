//salary.js
const TAX_RATE = 0.15; 
const NHIF_RATE = 0.02; 
const NSSF_RATE = 0.05; 

// Function to calculate deductions
function calculateDeductions(basicSalary) {
  const payee = basicSalary * TAX_RATE;
  const nhifDeduction = basicSalary * NHIF_RATE;
  const nssfDeduction = basicSalary * NSSF_RATE;
  return { payee, nhifDeduction, nssfDeduction };
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
  const { payee, nhifDeduction, nssfDeduction } = calculateDeductions(basicSalary);
  const grossSalary = basicSalary + benefits;
  const netSalary = grossSalary - (payee + nhifDeduction + nssfDeduction);
  return { grossSalary, payee, nhifDeduction, nssfDeduction, netSalary };
}

module.exports = { calculateNetSalary };
