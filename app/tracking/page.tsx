import Link from "next/link";
export default function Tracking() {

    return <div id="contentAlign" className="mdc-layout-grid container">
        <div id="bodyPanel" className="content mdc-layout-grid__inner content--tracking mt-[130px]">
            <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6 mdc-elevation--z3 block block--elevated">
                <h6 className="mdc-typography--headline6">Find products to track!</h6>

                <ul className="mdc-list mdc-list--variable-line">
                    <li className="mdc-list-item" data-link="search" tabIndex={1}>
                        <span className="mdc-list-item__ripple"></span>
                        <i className="fa fa-fw fa-search mdc-list-item__graphic"></i>
                        <span className="mdc-list-item__text">
                            <Link href="/search">
                                <span className="mdc-list-item__primary-text">Search</span>
                                <span className="mdc-list-item__secondary-text">Search for products by title, ASIN or Amazon product links</span>
                            </Link>
                        </span>
                    </li>
                    <li className="mdc-list-item" data-link="deals" tabIndex={2}>
                        <span className="mdc-list-item__ripple"></span>
                        <i className="fa fa-fw fa-shopping-bag mdc-list-item__graphic"></i>
                        <span className="mdc-list-item__text">
                            <Link href="/deals">
                                <span className="mdc-list-item__primary-text">Deals</span>
                                <span className="mdc-list-item__secondary-text">Deals, an overview of recent price drops</span>
                            </Link>
                        </span>
                    </li>
                    <li className="mdc-list-item" data-link="addon" tabIndex={3}>
                        <span className="mdc-list-item__ripple"></span>
                        <i className="fa fa-fw fa-cloud-download mdc-list-item__graphic"></i>
                        <span className="mdc-list-item__text">
                            <Link href="/addon">
                                <span className="mdc-list-item__primary-text">Amazon Browser extensions</span>
                                <span className="mdc-list-item__secondary-text">Browser extensions - once installed the Keepa price history graph will be displayed directly on each Amazon product page</span>
                            </Link>
                        </span>
                    </li>
                </ul>
            </div>


            <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6 mdc-elevation--z3 block block--elevated">
                <h6 className="mdc-typography--headline6">Manage existing trackings!</h6>
                <ul className="mdc-list mdc-list--variable-line">
                    <li className="mdc-list-item" data-link="manage" tabIndex={4}>
                        <span className="mdc-list-item__ripple"></span>
                        <i className="fa fa-fw fa fa-bell mdc-list-item__graphic"></i>
                        <span className="mdc-list-item__text">
                            <Link href="/tracking">
                                <span className="mdc-list-item__primary-text">Tracking Overview</span>
                                <span className="mdc-list-item__secondary-text">Manage your product watches</span>
                            </Link>
                        </span>
                    </li>
                    <li className="mdc-list-item" data-link="notification" tabIndex={5}>
                        <span className="mdc-list-item__ripple"></span>
                        <i className="fa fa-fw fa-bell-o mdc-list-item__graphic"></i>
                        <span className="mdc-list-item__text">
                            <Link href="/notification">
                                <span className="mdc-list-item__primary-text">Recent NotificationsLink</span>
                                <span className="mdc-list-item__secondary-text">Review recent notifications Keepa sent you</span>
                            </Link>
                        </span>
                    </li>
                    <li className="mdc-list-item" data-link="import" tabIndex={6}>
                        <span className="mdc-list-item__ripple"></span>
                        <i className="fa fa-fw fa-upload mdc-list-item__graphic"></i>
                        <span className="mdc-list-item__text">
                            <Link href="/import">
                                <span className="mdc-list-item__primary-text">Wish Lists</span>
                                <span className="mdc-list-item__secondary-text">Import public Amazon Wish List</span>
                            </Link>
                        </span>
                    </li>
                </ul>
            </div>
        </div >
    </div>
}