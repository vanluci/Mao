// Simple announcement model (in-memory). Replace with a Sequelize model when ready.
export const getAnnouncements = () => {
  return [
    {
      title: "Year-End Financial Reporting Deadline",
      date: "December 15, 2023",
      body: "All departments are reminded to submit their financial documents for year-end reporting by December 15, 2023, to ensure timely preparation of annual financial statements."
    },
    {
      title: "New Online Payment System",
      date: "November 5, 2023",
      body: "We are pleased to announce the launch of our new online payment system for local taxes and fees. This system aims to provide more convenient payment options for residents."
    },
    {
      title: "Office Hours During Holidays",
      date: "October 28, 2023",
      body: "Please be informed of our adjusted office hours during the upcoming holiday season. The office will be closed on December 25-26 and January 1."
    }
  ];
};
