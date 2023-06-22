const dayMap = {
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6
}
const monthMap = {
  JAN: 0,
  FEB: 1,
  MAR: 2,
  APR: 3,
  MAY: 4,
  JUN: 5,
  JUL: 6,
  AUG: 7,
  SEP: 8,
  OCT: 9,
  NOV: 10,
  DEC: 11
}

export const openAnn = true // toggle here to open announcements

// format: {date: date object, header: string, content: string}
export const announcements = [
  {
      date: new Date(2023, monthMap.MAY, 16),
      header: "Test header",
      content: "Test content"
  },
  {
      date: new Date(2023, monthMap.JUN, 21),
      header: "Happy Birthday Gabrielle!!",
      content: ""
  }
] // dates where header, content will be shown, else defaults will be shown
// e.g. new Date(1995, 11, 17); // TODO: BE CAREFUL: the month is 0-indexed, date is as per normal

export const openingDays = [
  dayMap.SUNDAY,
  dayMap.TUESDAY,
  dayMap.THURSDAY,
  dayMap.FRIDAY,
  dayMap.SATURDAY
] // array of NORMAL operating days where the restaurant is not open, exceptions go under the "announcements" array
// note: 0 represents Sunday, start counting from sunday

export const announceOpen = {
  header: "Announcement",
  content: "Dear Friends of THREE, we are open for walk-ins, reservations and take-aways.\nThank you and we hope to see you!"
}
export const announceClose = {
  header: "Announcement",
  content: "Dear Friends of THREE, we are not open on Mondays and Wednesdays. We hope to see you on our regular business days!"
}