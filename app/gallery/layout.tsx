export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className=" w-full flex justify-center items-center">
      {props.children}
      {props.modal}
      <div className="flex justify-center items-center bg-transparent" id="modal-root" />
    </div>
  );
}
