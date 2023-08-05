export function Button({ className, handleBooking }): JSX.Element {
  return (
    <>
      <button onClick={handleBooking} type="button" className={className}>
        Book a trip
      </button>
    </>
  );
}
