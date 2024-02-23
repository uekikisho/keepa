import Body from "@/components/Discuss/Body";
import Menu from "@/components/Discuss/Menu";
import React from "react";
import Latest from "./DTable";

const rows = [
  {
    key: "1",
    topic: "Tony Reichert",
    viewer: "CEO",
    replies: "Active",
    views: "Active",
    activity: "Active",
  },
];

export default function Discuss() {
  return (
    <div id="bodyPanel" className="content bg-gray-200">
      <div
        style={{
          width: "100%",
          height: "calc(100% - 80px)",
          border: " 0px none",
          position: "absolute",
          top: "80px",
          left: "0px",
        }}
        id="discussContainer"
      >
        <div
          style={{ width: "100%", height: "100%", border: "0 none" }}
          id="discussiFrame"
        >
          <Menu />
          <Body />
        </div>
      </div>
    </div>
  );
}
