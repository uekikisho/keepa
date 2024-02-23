import Image from "next/image";
import Link from "next/link";
import svg from "./data.svg";

export default function Notification() {

    return <div id="contentAlign" className="mt-[160px] min-w-[650px] max-w-[850px] mr-[40px] ml-[40px] relative w-[1461px]">
        <div id="bodyPanel" className="content">
            <div className="mdc-elevation--z3 block block--elevated block--data">
                <section>
                    <div>
                        <h6 className="mdc-typography--headline6">
                            <Link href="finder" ><span>Product Finder</span></Link>
                        </h6>
                        <p className="mdc-typography--body2">Find products matching any criteria by searching our entire product database!</p>
                    </div>
                    <div>
                        <Link href="finder" >
                            <Image className="active visible" alt="Find products" src="https://cdn.keepa.com/img/data/finder_1x.jpg" width={180} height={180} data-xblocker="passed" />
                        </Link>
                    </div>
                </section>
                <section>
                    <div>
                        <h6 className="mdc-typography--headline6">
                            <Link href="viewer" ><span>Product Viewer</span></Link>
                        </h6>
                        <p className="mdc-typography--body2">Import and export huge product lists to view all prices and product details at a glance.

                        </p>
                    </div>
                    <div>
                        <Link href="viewer" >
                            <Image className="active visible" alt="Find products" srcset="https://cdn.keepa.com/img/data/viewer_1x.jpg 1x, https://cdn.keepa.com/img/data/viewer_2x.jpg 2x" src="https://cdn.keepa.com/img/data/viewer_1x.jpg" width={180} height={180} keepapreview="pf_prevImg" data-xblocker="passed" />
                        </Link>
                    </div>
                </section>
                <section>
                    <div>
                        <h6 className="mdc-typography--headline6">
                            <Link href="bestseller" ><span>Product Best Sellers</span></Link>
                        </h6>
                        <p className="mdc-typography--body2">Find products matching any criteria by searching our entire product database!</p>
                    </div>
                    <div>
                        <Link href="bestseller" >
                            <Image className="active visible" alt="Find products" src="https://cdn.keepa.com/img/data/bestseller_1x.jpg" width={180} height={180} data-xblocker="passed" />
                        </Link>
                    </div>
                </section>
                <section>
                    <div>
                        <h6 className="mdc-typography--headline6">
                            <Link href="topseller" ><span>Top Seller List</span></Link>
                        </h6>
                        <p className="mdc-typography--body2">
                            View the top selling merchants on Amazon. You can then click on any seller in the list to view seller metrics and the storefront. By default the list is sorted by the number of ratings a merchant has.

                        </p>
                    </div>
                    <div>
                        <Link href="topseller" >
                            <Image className="active visible" alt="Find products" src="https://cdn.keepa.com/img/data/topseller_1x.jpg" width={180} height={180} data-xblocker="passed" />
                        </Link>
                    </div>
                </section>
                <section>
                    <div>
                        <h6 className="mdc-typography--headline6">
                            <Link href="categorytree" ><span>Category Tree</span></Link>
                        </h6>
                        <p className="mdc-typography--body2">
                            Browse Amazon s full category tree with deeplinks to corresponding best sellers lists.
                        </p>
                    </div>
                    <div>
                        <Link href="categorytree" >
                            <Image className="active visible" alt="Find products" src="https://cdn.keepa.com/img/data/categorytree_1x.jpg" width={180} height={180} data-xblocker="passed" />
                        </Link>
                    </div>
                </section>
                <section>
                    <div>
                        <h6 className="mdc-typography--headline6">
                            When viewing products on Keepa or Amazon
                        </h6>
                        <p className="mdc-typography--body2">
                            - Extensive product details and average prices
                            <br />
                            - Quickly view listing offers including historical prices
                            <br />
                            - Export all variation data of a product
                            <br />
                            - eBay New and Used price histories
                        </p>
                    </div>
                    <div>
                        <Image className="active visible" alt="Find products" src="https://cdn.keepa.com/img/data/datatab_v2_1x.jpg" width={180} height={180} data-xblocker="passed" />
                    </div>
                </section>
                <section>
                    <div>
                        <h6 className="mdc-typography--headline6">
                            Price Increase Tracking
                        </h6>
                        <p className="mdc-typography--body2">
                            Set up price increase alerts and get notified once a product reaches your threshold.
                        </p>
                    </div>
                    <div>
                        <Image className="active visible" alt="Find products" src="https://cdn.keepa.com/img/data/tracking_1x.jpg" width={180} height={180} data-xblocker="passed" />
                    </div>
                </section>
            </div>
        </div>
    </div>

}