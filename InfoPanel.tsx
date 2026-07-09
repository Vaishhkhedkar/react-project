// const InfoPanel = () => {
//   return (
//     <footer
//       style={{
//         backgroundColor: "#1f2937",
//         color: "white",
//         padding: "10px",
//       }}
//     >
//       Info Panel
//     </footer>
//   );
// };

// export default InfoPanel;

// type Props = {
//   points: number;
//   loading: boolean;
//   camera: string;
// };

// const InfoPanel = ({ points, loading, camera }: Props) => {
//   return (
//     <footer
//       style={{
//         background: "#1f2937",
//         color: "white",
//         padding: 15,
//       }}
//     >
//       <div>Total Points : {points}</div>

//       <div>Status : {loading ? "Loading..." : "Loaded"}</div>

//       <div>Camera : {camera}</div>
//     </footer>
//   );
// };

// export default InfoPanel;


type Props = {
  points: number;
  loading: boolean;
  camera: string;
};

const InfoPanel = ({
  points,
  loading,
  camera,
}: Props) => {
  return (
    <footer
      style={{
        background: "#1f2937",
        color: "#fff",
        height: "70px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "15px",
        padding: "10px 20px",
      }}
    >
      <div>
        <strong>Total Points</strong>
        <br />
        {points.toLocaleString()}
      </div>

      <div>
        <strong>Status</strong>
        <br />
        {loading ? "Loading..." : "Loaded"}
      </div>

      <div>
        <strong>Camera</strong>
        <br />
        {camera}
      </div>
    </footer>
  );
};

export default InfoPanel;