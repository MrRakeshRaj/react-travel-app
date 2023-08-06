type propsType = {
  color: boolean;
};
export function AlohaIcon({ color }: propsType): JSX.Element {
  return (
    <>
      <a
        href="#"
        className={`${
          color ? "text-white" : ""
        } mr-16 cursor-pointer py-1.5 px-1.5 font-dance`}
      >
        Aloha
      </a>
    </>
  );
}
