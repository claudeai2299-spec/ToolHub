import type { Tool } from "@/lib/types";
import EmiLoanCalculator from "./index";

export const emiLoanCalculatorMeta: Tool = {
  name: "EMI Loan Calculator",
  slug: "emi-loan-calculator",
  category: "everyday-tools",
  shortDescription: "Calculate your monthly loan payment (EMI), total interest, and total payment.",
  icon: "Landmark",
  component: EmiLoanCalculator,
  featured: true,
  popular: true,
  indexable: true,
  schemaType: "SoftwareApplication",
  relatedTools: ["percentage-calculator", "average-calculator"],
  seo: {
    title: "EMI Loan Calculator - Monthly Payment Calculator | ToolHub",
    metaDescription:
      "Calculate your monthly loan installment (EMI), total interest paid, and total repayment amount. Free and instant, for any loan amount or term.",
    h1: "EMI Loan Calculator",
  },
  content: {
    whatIsIt:
      "EMI (Equated Monthly Installment) is the fixed monthly payment you make to repay a loan, covering both principal and interest, over an agreed number of years.",
    howToUse: [
      "Enter the loan amount you want to borrow.",
      "Enter the annual interest rate.",
      "Enter the loan tenure in years.",
      "Click Calculate EMI to see your monthly payment, total interest, and total repayment.",
    ],
    formula:
      "EMI = [P × R × (1+R)^N] ÷ [(1+R)^N − 1]\nwhere P = loan amount, R = monthly interest rate (annual rate ÷ 12 ÷ 100), N = number of monthly installments (years × 12)",
    examples: [
      "A $20,000 loan at 8.5% annual interest over 5 years gives an EMI of roughly $410/month",
    ],
    notes: [
      "This calculator assumes a fixed interest rate for the full loan term (a standard reducing-balance EMI calculation) — it does not account for variable rates, processing fees, or prepayment penalties.",
    ],
    faqs: [
      {
        question: "What does EMI stand for?",
        answer:
          "EMI stands for Equated Monthly Installment — a fixed payment amount made by a borrower to a lender at a specified date each calendar month.",
      },
      {
        question: "Does this include taxes or fees?",
        answer:
          "No. This calculates the core loan EMI based on principal, interest rate, and tenure only. Processing fees, insurance, or taxes charged by a lender are not included.",
      },
    ],
  },
};
