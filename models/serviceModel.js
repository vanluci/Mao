// Simple services model (in-memory). Replace with DB-driven model when needed.
export const getServices = () => {
  return [
    { iconUrl: "https://vectorified.com/images/budget-planning-icon-3.png", title: "Budget Preparation", description: "Assisting in the formulation and preparation of the municipal budget in accordance with national guidelines." },
    { iconUrl: "https://tse4.mm.bing.net/th/id/OIP.QlHNm-cZWFHwot38xrsLMAHaHa?pid=Api&P=0&h=220", title: "Financial Reporting", description: "Preparation and submission of accurate financial reports to ensure transparency and accountability." },
    { iconUrl: "https://cdn-icons-png.flaticon.com/512/8649/8649232.png", title: "Disbursement Processing", description: "Efficient processing of payments and disbursements for municipal projects and operations." },
    { iconUrl: "https://cdn0.iconfinder.com/data/icons/reports-and-analytics-5/128/85-1024.png", title: "Financial Analysis", description: "Analyzing financial data to support decision-making and improve resource allocation." },
    { iconUrl: "https://img.freepik.com/premium-vector/system-monitoring-icon-3d-illustration-from-data-science-collection-creative-system-monitoring-3d-icon-web-design-templates-infographics-more_676904-944.jpg?w=740", title: "Compliance Monitoring", description: "Ensuring all financial transactions comply with government accounting rules and regulations." },
    { iconUrl: "https://cdn-icons-png.flaticon.com/512/9971/9971483.png", title: "Stakeholder Support", description: "Providing financial information and assistance to other departments and the public." }
  ];
};
