let isBookingPossible = function (bookings, newBookings) {
  // Step 1: Filter existing bookings
  let roomTypeBookings = bookings.filter(
    (booking) => booking.type === newBooking.type
  );

  // Step 2: Helper function to check date overlap
  function isDateOverlap(startDate1, endDate1, startDate2, endDate2) {
    return (
      new Date(startDate1) < new Date(endDate2) &&
      new Date(endDate1) > new Date(startDate2)
    );
  }

  // Step 3: Count overlapping bookings
  let overlapCount = 0;
  roomTypeBookings.forEach((booking) => {
    if (
      isDateOverlap(
        booking.checkIn,
        booking.checkOut,
        newBooking.checkIn,
        newBooking.checkOut
      )
    ) {
      overlapCount++;
    }
  });

  // Step 4: Compare with total room count
  const roomCounts = {
    single: 5,
    double: 3,
    suite: 2,
  };
  return overlapCount < roomCounts[newBooking.type];
};

let bookings = [
  { type: "single", checkIn: "2023-09-01", checkOut: "2023-09-05" },
  { type: "single", checkIn: "2023-09-02", checkOut: "2023-09-03" },
  { type: "double", checkIn: "2023-09-05", checkOut: "2023-09-10" },
];

let newBooking = {
  type: "single",
  checkIn: "2023-09-02",
  checkOut: "2023-09-04",
};

console.log(isBookingPossible(bookings, newBooking));
