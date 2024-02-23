import Link from "next/link";
import Image from "next/image"
export default function MobileApp() {

    return (
        <div>
            <div id="cont/entAlign" className="mt-[160px] min-w-[650px] max-w-[850px] mr-[40px] ml-[40px] relative w-[1461px]">
                <div id="bodyPanel" className="cont/ent"><div className="block block--elevated block--mdc-typography block--no-margin-collapse mdc-elevation--z3">
                    <h3 className="mdc-typography--subtitle1">Mobile App</h3>
                    <p className="mdc-typography--body2">Now available on Google Play Store and Apple App Store.</p>
                    <div className="app-store-icons">
                        <a className="app-store--android" href="https://play.google.com/store/apps/details?id=com.keepa.mobile" target="_blank"><Image alt="Get it on Google Play" width={206} height={80} src="/en_badge_web_generic.png" /></a>
                        <a className="app-store--ios" href="https://apps.apple.com/app/keepa-price-tracker/id1518541385" target="_blank"><Image alt="" width={206} height={80} src="/App_Store.svg" /></a>
                    </div>
                    <p className="mdc-typography--body2">Keepa.com tracks over 4 billion Amazon products worldwide. Through our app you can:</p>
                    <p className="mdc-typography--body2">
                        ✜ View price history
                        <br />
                        ✜ Set up and manage price watches<br />
                        ✜ View ext/ensive product data<br />
                        ✜ Search for Amazon products and scan barcodes<br />
                        ✜ Receive price drop alerts
                    </p>
                    <p className="mdc-typography--body2">→ Contact <a className="href -gre/en" href="mailto:info@keepa.com?subject=Questions%20about%20Keepa%20Mobile%20App" target="_blank">info@keepa.com</a> for any questions, feature requests or bug reports. ←</p>
                    <div className="app-store-screens">
                        {/* <Image alt="Product overview" width={125} height={200} src="/en-product-overview.png" data-xblocker="passed" style={{ visibility: 'visible' }} /> */}
                        <img alt="Product overview" src="https://cdn.keepa.com/img/app-store/en-product-overview.png" keepapreview="pf_prevImg" data-xblocker="passed" style={{ visibility: 'visible' }}></img>
                        <img alt="Search" src="https://cdn.keepa.com/img/app-store/en-search.png" keepapreview="pf_prevImg" data-xblocker="passed" style={{ visibility: 'visible' }}></img>
                        <img alt="Product details" src="https://cdn.keepa.com/img/app-store/en-product-details.png" keepapreview="pf_prevImg" data-xblocker="passed" style={{ visibility: 'visible' }}></img>
                        <img alt="Product current prices and averages" src="https://cdn.keepa.com/img/app-store/en-product-stats.png" keepapreview="pf_prevImg" data-xblocker="passed" style={{ visibility: 'visible' }}></img>
                        <img alt="Dashboard" src="https://cdn.keepa.com/img/app-store/en-dashboard.png" keepapreview="pf_prevImg" data-xblocker="passed" style={{ visibility: 'visible' }}></img>
                        <img alt="Push notification" src="https://cdn.keepa.com/img/app-store/en-push.png" keepapreview="pf_prevImg" data-xblocker="passed" style={{ visibility: 'visible' }}></img>
                        {/* <Image alt="Search" width={125} height={200} src="/en-product-overview.png" data-xblocker="passed" style={{ visibility: 'visible' }} />
                        <Image alt="Product details" width={125} height={200} src="/en-product-overview.png" data-xblocker="passed" style={{ visibility: 'visible' }} />
                        <Image alt="Product curr/ent prices and averages" width={125} height={200} src="/en-product-overview.png" data-xblocker="passed" style={{ visibility: 'visible' }} />
                        <Image alt="Dashboard" width={125} height={200} src="/en-product-overview.png" data-xblocker="passed" style={{ visibility: 'visible' }} />
                        <Image alt="Push notification" width={125} height={200} src="/en-product-overview.png" data-xblocker="passed" style={{ visibility: 'visible' }} /> */}
                    </div>
                </div>
                </div>
            </div>

        </div>
    )
}