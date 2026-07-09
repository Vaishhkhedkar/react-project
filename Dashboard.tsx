// import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";
// import Viewer3D from "../components/Viewer3D";
// import InfoPanel from "../components/InfoPanel";

// const Dashboard = () => {
//   return (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "250px 1fr",
//         gridTemplateRows: "60px 1fr 50px",
//         height: "100vh",
//       }}
//     >
//       <div style={{ gridColumn: "1 / 3" }}>
//         <Header />
//       </div>

//       <Sidebar />

//       <Viewer3D />

//       <div style={{ gridColumn: "1 / 3" }}>
//         <InfoPanel />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import { useState } from "react";

// import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";
// import Viewer3D from "../components/Viewer3D";
// import InfoPanel from "../components/InfoPanel";

// const Dashboard = () => {
//   const [pointSize, setPointSize] = useState(2);

//   const [opacity, setOpacity] = useState(1);

//   const [background, setBackground] = useState("#111827");

//   const [loading, setLoading] = useState(false);

//   const [points, setPoints] = useState(0);

//   const [camera, setCamera] = useState("0,0,0");

//   return (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "260px 1fr",
//         gridTemplateRows: "60px 1fr 70px",
//         height: "100vh",
//       }}
//     >
//       {/* Header */}

//       <div style={{ gridColumn: "1 / 3" }}>
//         <Header loading={loading} />
//       </div>

//       {/* Sidebar */}

//       <Sidebar
//         pointSize={pointSize}
//         opacity={opacity}
//         bg={background}
//         setPointSize={setPointSize}
//         setOpacity={setOpacity}
//         setBg={setBackground}
//       />

//       {/* Viewer */}

//       <Viewer3D
//         pointSize={pointSize}
//         opacity={opacity}
//         background={background}
//         setLoading={setLoading}
//         setPoints={setPoints}
//         setCamera={setCamera}
//       />

//       {/* Footer */}

//       <div style={{ gridColumn: "1 / 3" }}>
//         <InfoPanel
//           points={points}
//           loading={loading}
//           camera={camera}
//         />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import { useState } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Viewer3D from "../components/Viewer3D";
import InfoPanel from "../components/InfoPanel";

const Dashboard = () => {
  const [pointSize, setPointSize] = useState(2);

  const [opacity, setOpacity] = useState(1);

  const [background, setBackground] = useState("#111827");

  const [loading, setLoading] = useState(false);

  const [points, setPoints] = useState(0);

  const [camera, setCamera] = useState("0,0,0");

  return (
    <div
      className="dashboard"
      style={{
        display: "grid",
        gridTemplateColumns: "260px 1fr",
        gridTemplateRows: "60px 1fr 70px",
        height: "100dvh",
        overflow: "hidden",
      }}
    >
      <div style={{ gridColumn: "1 / 3" }}>
        <Header loading={loading} />
      </div>

      <div className="sidebar">
        <Sidebar
          pointSize={pointSize}
          opacity={opacity}
          bg={background}
          setPointSize={setPointSize}
          setOpacity={setOpacity}
          setBg={setBackground}
        />
      </div>

      <div className="viewer">
        <Viewer3D
          pointSize={pointSize}
          opacity={opacity}
          background={background}
          setLoading={setLoading}
          setPoints={setPoints}
          setCamera={setCamera}
        />
      </div>

      <div
        className="footer"
        style={{
          gridColumn: "1 / 3",
        }}
      >
        <InfoPanel
          points={points}
          loading={loading}
          camera={camera}
        />
      </div>
    </div>
  );
};

export default Dashboard;