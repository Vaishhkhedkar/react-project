// const Sidebar = () => {
//   return (
//     <aside
//       style={{
//         backgroundColor: "#e5e7eb",
//         padding: "20px",
//       }}
//     >
//       Sidebar
//     </aside>
//   );
// };

// export default Sidebar;

// type Props = {
//   pointSize: number;
//   opacity: number;
//   bg: string;
//   setPointSize: (n: number) => void;
//   setOpacity: (n: number) => void;
//   setBg: (c: string) => void;
// };

// const Sidebar = ({
//   pointSize,
//   opacity,
//   bg,
//   setPointSize,
//   setOpacity,
//   setBg,
// }: Props) => {
//   return (
//     <aside
//       style={{
//         background: "#e5e7eb",
//         padding: 20,
//       }}
//     >
//       <h3>Controls</h3>

//       <br />

//       <label>Point Size</label>

//       <input
//         type="range"
//         min="1"
//         max="10"
//         value={pointSize}
//         onChange={(e) => setPointSize(Number(e.target.value))}
//       />

//       <br />
//       <br />

//       <label>Opacity</label>

//       <input
//         type="range"
//         min="0.1"
//         max="1"
//         step="0.1"
//         value={opacity}
//         onChange={(e) => setOpacity(Number(e.target.value))}
//       />

//       <br />
//       <br />

//       <label>Background</label>

//       <input
//         type="color"
//         value={bg}
//         onChange={(e) => setBg(e.target.value)}
//       />
//     </aside>
//   );
// };

// export default Sidebar;


type Props = {
  pointSize: number;
  opacity: number;
  bg: string;
  setPointSize: (n: number) => void;
  setOpacity: (n: number) => void;
  setBg: (c: string) => void;
};

const Sidebar = ({
  pointSize,
  opacity,
  bg,
  setPointSize,
  setOpacity,
  setBg,
}: Props) => {
  return (
    <aside
      style={{
        background: "#f3f4f6",
        height: "100%",
        padding: "20px",
        overflowY: "auto",
        borderRight: "1px solid #d1d5db",
      }}
    >
      <h3
        style={{
          marginBottom: "20px",
        }}
      >
        Viewer Controls
      </h3>

      {/* Point Size */}

      <div style={{ marginBottom: "25px" }}>
        <label>Point Size : {pointSize}</label>

        <input
          type="range"
          min={1}
          max={10}
          value={pointSize}
          onChange={(e) =>
            setPointSize(Number(e.target.value))
          }
        />
      </div>

      {/* Opacity */}

      <div style={{ marginBottom: "25px" }}>
        <label>Opacity : {opacity.toFixed(1)}</label>

        <input
          type="range"
          min={0.1}
          max={1}
          step={0.1}
          value={opacity}
          onChange={(e) =>
            setOpacity(Number(e.target.value))
          }
        />
      </div>

      {/* Background */}

      <div style={{ marginBottom: "25px" }}>
        <label>Background</label>

        <input
          type="color"
          value={bg}
          onChange={(e) =>
            setBg(e.target.value)
          }
        />
      </div>

      <hr />

      <div
        style={{
          marginTop: "20px",
          fontSize: "14px",
          color: "#555",
          lineHeight: 1.7,
        }}
      >
        <p>✔ Zoom : Mouse Wheel</p>

        <p>✔ Rotate : Left Mouse</p>

        <p>✔ Pan : Right Mouse</p>
      </div>
    </aside>
  );
};

export default Sidebar;