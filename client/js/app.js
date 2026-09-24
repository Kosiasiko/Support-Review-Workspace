const customerQuestion = {
  text: "When will my next billing date be?"
};

const aiDraftReply = {
  text:
    "Your next billing date is scheduled for the same date each month as your original subscription date. You can check your account details for the exact date."
};

const approvedKnowledge = {
  id: "billing-date-policy-001",
  title: "Monthly Billing Date Policy",
  source: "Approved Billing Policy",
  policyText:
    "Customers are billed monthly on the same calendar date as their original subscription date. If that date does not occur in a particular month, billing takes place on the last calendar day of that month."
};

function validateKnowledgeRecord(record) {
  const requiredFields = ["title", "source", "policyText"];

  for (const field of requiredFields) {
    if (
      typeof record[field] !== "string" ||
      record[field].trim() === ""
    ) {
      throw new Error(
        `Knowledge record requires a non-empty ${field} field.`
      );
    }
  }

  return true;
}

function renderReviewPage() {
  document.querySelector("#customer-question").textContent =
    customerQuestion.text;

  document.querySelector("#ai-draft-reply").textContent =
    aiDraftReply.text;

  document.querySelector("#knowledge-title").textContent =
    approvedKnowledge.title;

  document.querySelector("#knowledge-source").textContent =
    approvedKnowledge.source;

  document.querySelector("#knowledge-policy").textContent =
    approvedKnowledge.policyText;
}

validateKnowledgeRecord(approvedKnowledge);
renderReviewPage();