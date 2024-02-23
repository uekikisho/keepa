import Link from "next/link";

export default function Notification() {

    return <div id="contentAlign" className="mt-[160px] min-w-[650px] max-w-[850px] mr-[40px] ml-[40px] relative w-[1461px]">
        <div id="bodyPanel" className="content"><div className="paper block block--mdc-typography">
            <h3 className="mdc-typography--subtitle1">Terms of Service</h3>
            <p className="mdc-typography--body2">This website provides a free service and, as such, we provide no warranty or guarantee of service or uptime. Any automated use of our service is strictly forbidden without express permission from us. Persons found to be using automation will be immediately and permanently banned. Keepa reserves the right to make changes and improvements to these Terms of Service at any time and without notice. By using this site you acknowledge that you have read and agree to these terms and do so at your own risk.</p>
            <h3 className="mdc-typography--subtitle1">Privacy Policy</h3>
            <p className="mdc-typography--body2">You can use all of our services without providing any personal information. However, if you do so we will not sell or trade your personal information under any circumstance. Setting up a tracking request on our site implies that you'd like us to contact you via the contact information you provided us. We will do our best to only do so if useful and necessary - we hate spam as much as you do. If you login/register using Social-Login or OpenID we will only save the username and/or email address of the provided data. Should you choose to subscribe to one of our fee-based subscriptions we will share your email and billing address with the chosen payment provider - solely for the purpose of payment related communication and authentication. You can delete all your information by deleting your account through the settings.</p>
            <h3 className="mdc-typography--subtitle1">Disclaimer</h3>
            <p className="mdc-typography--body2">Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.<br /><br /> Product prices shown are accurate as of the date/time indicated and are subject to change. Any price and availability information displayed on Amazon at the time of purchase will apply to the purchase of this product.</p>
            <h3 className="mdc-typography--subtitle1" style={{ fontWeight: 'bold' }}>Support</h3>
            <p className="mdc-typography--body2" style={{ fontWeight: 'bold' }} > If you are seeking support for our browser extension or any of our other offered features, please use our <a className="href" href="https://keepa.com/#!discuss/" target="_blank">discussion board</a> or send us an email to <a className="href mailto" href="mailto:info@keepa.com?subject=Question%20about%20Keepa" target="_blank">info@keepa.com</a>.</p>
            <h3 className="mdc-typography--subtitle1">Contact</h3>
            <p className="mdc-typography--body2">
                Keepa GmbH<br />
                Berndorfer Str. 10<br />
                95478 Kemnath - Germany<br /><br />
                Amtsgericht Weiden i.d.OPf. HRB 5942<br />
                Geschäftsführer: Julian Johann, Sascha Arthur<br />
                USt-IdNr. (VAT-ID): DE313904564<br /><br />
                <span style={{ fontWeight: 'bold' }} >Email: <a className="href mailto" href="mailto:info@keepa.com?subject=Question%20about%20Keepa" target="_blank">info@keepa.com</a></span>
            </p>

            <p className="mdc-typography--body2 m-b-0">Contact form</p>
            <form id="contactForm" className="m-y-20">

                <div className="m-t-0 m-b-20" style={{ width: 500 }}><div className="mdc-text-field mdc-text-field--textarea">
                    <textarea id="contactBody" className="mdc-text-field__input" rows={2} cols={100} name="contactBody" placeholder="Your message:*" required></textarea>
                </div></div>
                <button id="submitContactForm" className="mdc-button mdc-button--raised mdc-button--primary mdc-ripple-upgraded" data-mdc-auto-init="MDCRipple" name="action">

                    Submit

                </button>
            </form>

            <p className="mdc-typography--body2">
                © 2011-2024
                <br />
                <a className="gcblink" href="https://cdn.keepa.com/Keepa_Logo.zip">Keepa_Logo.zip</a>
            </p>
        </div></div>
    </div>

}