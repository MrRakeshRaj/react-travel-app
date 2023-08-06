type propsType = {
  className: string;
  handleBooking: () => void;
};
export function Button({ className, handleBooking }: propsType): JSX.Element {
  return (
    <>
      <button onClick={handleBooking} type="button" className={className}>
        Book a trip
      </button>
    </>
  );
}
