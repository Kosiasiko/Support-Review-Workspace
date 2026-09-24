# Support Review Workspace

A small full-stack learning project for reviewing an AI-drafted customer support reply against approved company knowledge.

## Project Goal

The current Month 1 page provides a simple support-review screen where a reviewer can read the customer question, compare the AI-drafted reply with approved company knowledge, and understand the billing-policy example.

## Getting the Project

Clone the repository and open the project folder:

```bash
git clone https://github.com/Kosiasiko/Support-Review-Workspace.git
cd Support-Review-Workspace
```

No external database or service is required for the current sample.

## Viewing the Sample Review

The current review page is located at:

```text
client/index.html
```

To view it locally, serve the client folder with a local HTTP server. From the client directory:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Sample Support Review

The page displays three information areas together:

### Customer Question

The sample customer asks:

> When will my next billing date be?

### AI-Drafted Reply

The page displays a sample AI-drafted response explaining that billing normally occurs on the same calendar date as the original subscription date.

### Approved Company Knowledge

The approved knowledge record provides:

- **Knowledge Title:** Monthly Billing Date Policy
- **Source:** Approved Billing Policy
- **Policy Text:** Customers are billed monthly on the same calendar date as their original subscription date. If that date does not occur in a particular month, billing takes place on the last calendar day of that month.

The draft reply and approved policy are displayed together so they can be read and compared on the same review page.

## Data Notice

All customer questions, draft replies, and knowledge content in this project are fictional sample data for learning purposes. The project is not connected to real customers, customer accounts, or a real company support system.
