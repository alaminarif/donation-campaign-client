type ActionbarProps = {
  title?: string;
  children?: React.ReactElement | React.ReactNode;
};

const Actionbar = ({ title, children }: ActionbarProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "10px 20px" }}>{children}</div>
    </div>
  );
};

export default Actionbar;
