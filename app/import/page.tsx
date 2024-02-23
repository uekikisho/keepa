import Link from "next/link";

export default function Manage() {

    return <div id="contentAlign" className="mt-[160px] min-w-[650px] max-w-[850px] mr-[40px] ml-[40px] relative w-[1461px]">
        <div id="bodyPanel" className="content">
            <h1 className="headline hRed">Import public Amazon Wish List</h1>
            <div className="paper block block--mdc-typography p-[16px]">
                <div id="settingsBox"><section id="step1">
                    <p className="mdc-typography--body2">You can create price watches of all the products on your Amazon Wish List (existing price watches will not be overwritten). The process is simple and just takes two steps.</p>
                    <p className="mdc-typography--body2">Open <a className="href" href="http://www.amazon.com/registry/wishlist/" target="_blank">the Amazon Wish List page</a> and navigate to the Amazon Wish List you want to import by clicking on its name in the left navigation bar. Once done you should see something like
                        <span style={{ fontFamily: "monospace" }}>…/wishlist/1T2H3I4586FGG/…</span>
                        in your current URL. Now simply copy the whole URL into this textfield:</p>
                    <div className="w-full"><div className="mdc-text-field mdc-text-field--dense mdc-text-field--upgraded mdc-text-field--invalid" style={{ width: "inherit" }} data-mdc-auto-init="MDCTextField">
                        <input type="text" id="importWish" className="mdc-text-field__input" pattern="([A-Z0-9]{11,13})|(https?:\/\/.*?amazon\.(de|com\.mx|com|co\.uk|co\.jp|ca|fr|cn|it|es|in)\/.*?\/([A-Z0-9]{11,13}).*)" name="" required={true} aria-controls="importWish-validation-msg" />
                        <label htmlFor="importWish" className="mdc-floating-label">Wish List URL</label>
                    </div>
                        <p id="importWish-validation-msg" className="mdc-text-field-helper-text mdc-text-field-helper-text--validation-msg" role="alert">
                            Sorry, but what you have entered is neither an Amazon Wish List URL nor a Wishlist ID.
                        </p></div>
                    <button id="wishlistSubmit" className="mdc-button mdc-button--raised mdc-button--primary mdc-ripple-upgraded" data-mdc-auto-init="MDCRipple" name="action">
                        Submit
                        <i className="fa fa-paper-plane"></i>
                    </button>
                    <hr className="hr" />
                    <p className="mdc-typography--caption">Note: Amazon changed the limit we can import to 10 items per wish list. You have to use multiple wish lists if you want to import more items. Best option would be to use our <a href="#!addon" className="href">browser extension</a> and add items to track via Keepa right from Amazon - instead (or in addition) to using Amazon wish lists.</p>
                </section>
                    <section id="step2"></section>
                    <section id="step3" style={{ display: "none" }}>
                        <div className="text-[#00b753] text-[16px]"><i className="fa fa-bell-o"></i> List import successful!</div><br />
                        <div id="notification-channels"></div>
                    </section>
                    <div id="wishError" className="text-[red] pt-[10px] clear-both"></div>
                    <div id="loadingIcon" className="text-center">
                        <p className="mdc-typography--body2"><br /><br /><br />
                            This can take a minute if your Wish List is big (lots of wishes!). Please be patient.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

}