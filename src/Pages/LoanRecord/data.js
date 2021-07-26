export const paymentRecord = [
  {
    createdDate: "2021-07-12T12:56:53.106Z",
    updatedDate: "2021-07-12T12:56:53.106Z",
    paymentDate: "2021-08-14T12:56:53.106Z",
    status: "Not Started", // {"Unverified" (for unenrolled), "Completed", "Failed", "Pending", "Not Started"}
    description: "Monthly Payment- August",
    paymentMethod: "BANK_TRANSER", //{"BANK_TRANSFER", "CREDIT_CARD"}
    paymentDescription: "Bank Transfer",
    amountInCents: -20000,
    loanAmountPendingInCents: 440000,
  },
  {
    createdDate: "2021-07-12T12:56:53.106Z",
    updatedDate: "2021-07-12T12:56:53.106Z",
    paymentDate: "2021-07-14T12:56:53.106Z",
    status: "Failed", // {"Unverified" (for unenrolled), "Completed", "Failed", "Pending", "Not Started"}
    description: "Monthly Payment- July",
    paymentMethod: "BANK_TRANSER", // {"BANK_TRANSFER", "CREDIT_CARD"}
    paymentDescription: "Bank Transfer",
    amountInCents: -20000,
    loanAmountPendingInCents: 460000,
  },
  {
    createdDate: "2021-07-12T12:56:53.106Z",
    updatedDate: "2021-07-12T12:56:53.106Z",
    paymentDate: "2021-06-14T12:56:53.106Z",
    status: "Completed", // {"Unverified" (for unenrolled), "Completed", "Failed", "Pending", "Not Started"}
    description: "Monthly Payment- June",
    paymentMethod: "BANK_TRANSER", // {"BANK_TRANSFER", "CREDIT_CARD"}
    paymentDescription: "Bank Transfer",
    amountInCents: -20000,
    loanAmountPendingInCents: 480000,
  },
  {
    createdDate: "2021-07-12T12:56:53.106Z",
    updatedDate: "2021-07-12T12:56:53.106Z",
    paymentDate: "2021-05-14T12:56:53.106Z",
    status: "Completed", // {"Unverified" (for unenrolled), "Completed", "Failed", "Pending", "Not Started"}
    description: "Loan fund",
    paymentMethod: "BANK_TRANSER",
    paymentDescription: "Bank Transfer",
    amountInCents: 500000,
    loanAmountPendingInCents: null,
  },
  {
    createdDate: "2021-07-12T12:56:53.106Z",
    updatedDate: "2021-07-12T12:56:53.106Z",
    paymentDate: "2021-05-14T12:56:53.106Z",
    status: "Completed", // {"Unverified" (for unenrolled), "Completed", "Failed", "Pending", "Not Started"}
    description: "Loan fund",
    paymentMethod: "BANK_TRANSER",
    paymentDescription: "Bank Transfer",
    amountInCents: 500000,
    loanAmountPendingInCents: null,
  },
];
export const loan = {
  purpose: "Wedding Reception",
  borrowerName: "Brad Nero",
  lenderName: "Tom Ford",
};
export const serviceEnrollment = {
  enrollmentType: "namma_easy",
};
