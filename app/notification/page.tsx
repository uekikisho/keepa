import Link from "next/link";

export default function Notification() {

    return <div id="contentAlign" className="mt-[160px] min-w-[650px] max-w-[850px] mr-[40px] ml-[40px] relative w-[1461px]">
        <div id="bodyPanel" className="content">
            <h1 className="headline hRed">Review recent notifications Keepa sent you</h1>
            <span className="paper">
                <div id="notificationContent">
                    <div id="notificationsBox">
                        <p className="mdc-typography--body2">You received no notifications recently from Keepa.</p>
                    </div>
                </div>
            </span>
        </div>
    </div>

}