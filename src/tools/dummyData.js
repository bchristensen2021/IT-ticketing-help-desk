const DUMMY_TICKETS = [
  {
    id: 99,
    date: new Date(2022, 7, 14),
    technician: "Ally",
    resolved: false,
    notes: "Forgot their password",
    submitter: "Dallin",
  },
  {
    id: 98,
    date: new Date(2021, 10, 24),
    technician: "Fred",
    resolved: true,
    notes: "machine wont recognize his USB drive",
    submitter: "Ethan",
  },
  {
    id: 97,
    date: new Date(2022, 3, 10),
    technician: "Bob",
    resolved: false,
    notes: "printer is saying its out of ink but its not",
    submitter: "Alice",
  },
  {
    id: 96,
    date: new Date(2022, 1, 14),
    technician: "Ally",
    resolved: false,
    notes: "forgot to save an import file, wants help with recovery",
    submitter: "Steve",
  },
  {
    id: 95,
    date: new Date(2022, 2, 30),
    technician: "Fred",
    resolved: true,
    notes: "internet on floor 6 is slow",
    submitter: "Rebecca",
  },
  {
    id: 94,
    date: new Date(2021, 11, 16),
    technician: "Elizabeth",
    resolved: false,
    notes: "blue screen of death",
    submitter: "Allen",
  },
];

module.exports = {
  DUMMY_TICKETS,
};
