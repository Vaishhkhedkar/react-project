// const Header = () => {
//   return (
//     <header
//       style={{
//         background: "#1f2937",
//         color: "white",
//         padding: "15px",
//       }}
//     >
//       3D Point Cloud Dashboard
//     </header>
//   );
// };

// export default Header;

// type Props = {
//   loading: boolean;
// };

// const Header = ({ loading }: Props) => {
//   return (
//     <header
//       style={{
//         background: "#1f2937",
//         color: "white",
//         height: "60px",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "0 20px",
//       }}
//     >
//       <h2>3D Point Cloud Dashboard</h2>

//       <div>{loading ? "Loading..." : "Loaded"}</div>
//     </header>
//   );
// };

// export default Header;

type Props = {
  loading: boolean;
};

const Header = ({ loading }: Props) => {
  return (
    <header
      style={{
        background: "#1f2937",
        color: "#fff",
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        borderBottom: "1px solid #374151",
      }}
    >
      <h2 style={{ fontSize: "22px" }}>
        3D Point Cloud Dashboard
      </h2>

      <div
        style={{
          background: loading ? "#dc2626" : "#16a34a",
          padding: "6px 14px",
          borderRadius: "20px",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        {loading ? "Loading..." : "Loaded"}
      </div>
    </header>
  );
};

export default Header;