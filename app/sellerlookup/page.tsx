import Link from "next/link";

export default function Notification() {

    return <div id="contentAlign" className="mt-[160px] min-w-[650px] max-w-[850px] mr-[40px] ml-[40px] relative w-[1461px]">
        <div id="bodyPanel" className="content"><h1 id="sellerName" className="headline hPink" style={{ paddingTop: 0 }}>Seller Lookup</h1>
            <div className="paper">
                <p className="mdc-typography--body2">Looking for information on an Amazon seller? Use our seller lookup tool to find out more about their rating, review count, and other important details.</p>
                <form id="sellerLookupForm" className="flex" style={{ alignItems: 'baseline' }}>
                    <div style={{ width: 670, marginRight: 20 }} ><div className="mdc-text-field mdc-text-field--dense mdc-text-field--upgraded" style={{ width: 'inherit' }} data-mdc-auto-init="MDCTextField">
                        <input type="text" id="sellerLookupId" className="mdc-text-field__input" pattern="([A-Z0-9]{9,21})" name="sellerLookupId" required aria-controls="sellerLookupId-validation-msg" />
                        <label htmlFor="sellerLookupId" className="mdc-floating-label">Seller Id</label>
                    </div>
                        <p id="sellerLookupId-validation-msg" className="mdc-text-field-helper-text mdc-text-field-helper-text--validation-msg" aria-hidden="true">
                            Invalid seller id format. Please enter a value consisting of 9 to 21 uppercase letters or digits.
                        </p></div>
                    <div><button id="sellerLookupSubmit" className="mdc-button mdc-button--raised mdc-button--primary mdc-ripple-upgraded" data-mdc-auto-init="MDCRipple" name="action">

                        Submit
                        <i className="fa fa-paper-plane"></i>
                    </button></div>
                </form>
            </div></div>
    </div>

}