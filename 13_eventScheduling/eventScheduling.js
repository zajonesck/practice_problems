let checkOverlap = function (event1, event2) {
  return event1.start < event2.end && event1.end > event2.start;
};
let eventScheduling = function (events) {
  let overlappingEvents = [];

  for (let i = 0; i < events.length; i++) {
    for (let j = i + 1; j < events.length; j++) {
      if (checkOverlap(events[i], events[j])) {
        overlappingEvents.push(events[i].name, events[j].name);
      }
    }
  }
  let uniqueOverlappingEvents = [...new Set(overlappingEvents)];

  if (uniqueOverlappingEvents.length === 0) {
    return "You can attend all events.";
  } else {
    return uniqueOverlappingEvents;
  }
};

let events = [
  { name: "Workshop A", start: 10, end: 12 },
  { name: "Workshop B", start: 12, end: 14 },
  { name: "Workshop C", start: 13, end: 15 },
];

console.log(eventScheduling(events));
