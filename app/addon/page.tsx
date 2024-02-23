import Image from "next/image";

export default function Addon() {

    return <div id="contentAlign" className="mt-[160px] min-w-[650px] max-w-[850px] mr-[5%] ml-[5%] relativew-[1461px]">
        <div id="bodyPanel" className="content">
            <div className="block block--elevated block--mdc-typography block--no-margin-collapse mdc-elevation--z3">
                <h3 className="mdc-typography--subtitle1">Browser extensions</h3>
                <p className="mdc-typography--body2">You can use all our features right on Amazon with the help of our browser extensions. Nifty!</p>
                <div id="browserAddons" className="text-center">
                    <a href="https://addons.mozilla.org/firefox/addon/keepa/" className="colorTipContainer black">
                        <Image alt="firefox" src="https://cdn.keepa.com/img/firefox_128x128.png" width={64} height={64} />
                        <span className="colorTip">
                            <span className="colorTipContent">Goto Firefox Add-ons</span>
                            <span className="pointyTipShadow"></span>
                            <span className="pointyTip"></span>
                        </span>
                    </a>
                    <a href="https://chrome.google.com/webstore/detail/neebplgakaahbhdphmkckjjcegoiijjo" className="colorTipContainer black">
                        <Image alt="chrome" src="https://cdn.keepa.com/img/chrome_128x128.png" width={64} height={64} />
                        <span className="colorTip">
                            <span className="colorTipContent">Goto Chrome Web Store</span>
                            <span className="pointyTipShadow"></span>
                            <span className="pointyTip"></span>
                        </span>
                    </a>
                    <a id="opera" href="https://chrome.google.com/webstore/detail/neebplgakaahbhdphmkckjjcegoiijjo" className="colorTipContainer black">
                        <Image alt="opera" src="https://cdn.keepa.com/img/opera_128x128.png" width={64} height={64} />
                        <span className="colorTip">
                            <span className="colorTipContent">Our Chrome extension is compatible with Opera</span>
                            <span className="pointyTipShadow"></span>
                            <span className="pointyTip"></span>
                        </span>
                    </a>
                    <a href="https://microsoftedge.microsoft.com/addons/detail/ejefaeioamebhekmfaclajddbpnnobje" className="colorTipContainer black">
                        <Image alt="edgechromium" src="https://cdn.keepa.com/img/edgechromium_128x128.png" width={64} height={64} />
                        <span className="colorTip">
                            <span className="colorTipContent">Install on Edge for Windows</span>
                            <span className="pointyTipShadow"></span>
                            <span className="pointyTip"></span>
                        </span>
                    </a>
                    <a href="https://apps.apple.com/us/app/id1533805339" className="colorTipContainer black">
                        <Image alt="safari" src="https://cdn.keepa.com/img/safari_128x128.png" width={64} height={64} />
                        <span className="colorTip">
                            <span className="colorTipContent">Install on Safari</span>
                            <span className="pointyTipShadow"></span>
                            <span className="pointyTip"></span>
                        </span>
                    </a>
                </div>
                <p className="mdc-typography--body2">Click on the browser icons to find out more</p>
                <div className="py-[16px] px-0">
                    <iframe src="https://player.vimeo.com/video/233639719" width="818" height="460" frameBorder="0" allowFullScreen={true}></iframe>
                </div>
            </div>
        </div>
    </div>

}