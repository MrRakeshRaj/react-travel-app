type propsType = {
  title: string;
};
export function Headings({ title }: propsType): JSX.Element {
  return (
    <>
      <h3 className="font-bold mx-2 text-base font-robotomono">{title}</h3>
    </>
  );
}
