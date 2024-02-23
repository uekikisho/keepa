import BodyPanel from "@/components/Manage/BodyPanel";
import LeftPanel from "@/components/Manage/LeftPanel/";
import Link from "next/link";

export default function Manage() {
  return (
    <div
      id="contentAlign"
      className="mt-[160px] min-w-[650px] max-w-[850px] mr-[5%] ml-[5%] relativew-[1484px]"
    >
      <div id="bodyPanel" className="content">
        <div className="data-container text_long manage ">
          <LeftPanel />
          <BodyPanel />
        </div>
      </div>
    </div>
  );
}
