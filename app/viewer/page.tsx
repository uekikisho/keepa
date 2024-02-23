import Link from "next/link";
import Image from 'next/image'

export default function Viewer() {

    return <div id="contentAlign" className="mt-[160px] min-w-[650px] max-w-[850px] mr-[40px] ml-[40px] relative w-[1461px]">
        <div id="bodyPanel" className="content">
            <div className="paper">
                <h6 className="mdc-typography--subtitle1">Load <img src='/1flag.png' alt="no" style={{ display: 'inline' }} />
                    <span style={{ fontWeight: 500 }}>Amazon.com</span> Products
                </h6>
                <div style={{ width: 400 }}>
                    <p>You can load up to 10000 products* to view. Once loaded you can create a bookmark**
                        of your list.</p><br />
                    <form name="loadForm" id="importForm">
                        <section id="typeRadio">
                            <div className="mdc-form-field">
                                <div className="mdc-radio mdc-ripple-upgraded mdc-ripple-upgraded--unbounded">
                                    <input className="mdc-radio__native-control" type="radio" id="asinCh-radio" name="type" checked={true} />
                                    <div className="mdc-radio__background">
                                        <div className="mdc-radio__outer-circle"></div>
                                        <div className="mdc-radio__inner-circle"></div>
                                    </div>
                                </div>
                                <label id="asinCh-radio1-label" htmlFor="asinCh-radio">List of ASINs</label>
                            </div>
                            <div className="mdc-form-field">
                                <div className="mdc-radio mdc-ripple-upgraded mdc-ripple-upgraded--unbounded" data-mdc-auto-init="MDCRadio">
                                    <input className="mdc-radio__native-control" type="radio" id="upcCh-radio" name="type" />
                                    <div className="mdc-radio__background">
                                        <div className="mdc-radio__outer-circle"></div>
                                        <div className="mdc-radio__inner-circle"></div>
                                    </div>
                                </div>
                                <label id="upcCh-radio1-label" htmlFor="upcCh-radio">List of UPC / EAN codes</label>
                            </div>
                        </section>
                        <div style={{ height: 110, marginTop: -10 }}><span style={{ position: "absolute", width: 400 }}><div className="mdc-text-field mdc-text-field--dense mdc-text-field--upgraded" style={{ width: 'inherit' }} data-mdc-auto-init="MDCTextField">
                            <input type="text" id="importInputAsin" className="mdc-text-field__input" pattern=".*(([BC][A-Z0-9]{9}|\d{9}(!?X|\d))).*" name="text" required aria-controls="importInputAsin-validation-msg" />
                            <label htmlFor="importInputAsin" className="mdc-floating-label" style={{ fontSize: 15 }}>A list of ASINs… (up to 10000)</label>
                        </div>
                            <p id="importInputAsin-validation-msg" className="mdc-text-field-helper-text mdc-text-field-helper-text--validation-msg" aria-hidden="true">
                                no valid ASIN found
                            </p></span><span style={{ position: "absolute", width: 400, display: 'none' }}><div className="mdc-text-field mdc-text-field--dense mdc-text-field--upgraded" style={{ width: 'inherit' }} data-mdc-auto-init="MDCTextField">
                                <input type="text" id="importInputUpc" className="mdc-text-field__input" pattern=".*(\d{8,}).*" name="text" required aria-controls="importInputUpc-validation-msg" />
                                <label htmlFor="importInputUpc" className="mdc-floating-label" style={{ fontSize: 15 }}>A list of UPC or EANs… (up to 10000)</label>
                            </div>
                                <p id="importInputUpc-validation-msg" className="mdc-text-field-helper-text mdc-text-field-helper-text--validation-msg" aria-hidden="true">
                                    no valid UPC / EAN found
                                </p></span></div>
                        <p>Alternatively you can upload a text file containing a list of ASINs or UPC / EAN codes:</p>
                        <div style={{ height: 110 }}><span style={{ position: "absolute", width: 400 }}><div className="mdc-text-field mdc-text-field--dense mdc-text-field--upgraded" style={{ width: 'inherit' }} data-mdc-auto-init="MDCTextField">
                            <input id="importInputFileTrigger" className="mdc-text-field__input" required autoComplete="" />
                            <input id="importInputFile" name="importInputFile" type="file" accept=".txt, .csv, .md" style={{ display: 'none' }} />
                            <label htmlFor="importInputFile" className="mdc-floating-label" style={{ display: 'none' }}>Choose text file (e.g. *.txt, *.csv, ...)</label>
                        </div>
                            <p id="importInputFile-validation-msg" className="mdc-text-field-helper-text mdc-text-field-helper-text--validation-msg" aria-hidden="true">
                                no valid file found
                            </p></span></div>
                        <div style={{ height: 50 }}><div className="mdc-form-field">
                            <div className="mdc-checkbox mdc-checkbox--upgraded mdc-ripple-upgraded mdc-ripple-upgraded--unbounded" data-mdc-auto-init="MDCCheckbox">
                                <input className="mdc-checkbox__native-control" type="checkbox" id="includeInaccessibleAsins-checkbox" name="includeInaccessibleAsins" value="1" />
                                <div className="mdc-checkbox__background">
                                    <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                                        <path className="mdc-checkbox__checkmark-path" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
                                    </svg>
                                    <div className="mdc-checkbox__mixedmark"></div>
                                </div>
                            </div>
                            <label htmlFor="includeInaccessibleAsins-checkbox">Include products we currently are unable to collect fresh information for</label>
                        </div></div>

                        <button id="importSubmit" className="mdc-button mdc-button--raised mdc-button--primary mdc-ripple-upgraded" data-mdc-auto-init="MDCRipple" name="action">

                            Load List
                            <i className="fa fa-upload"></i>
                        </button>
                    </form><br />
                    <p style={{ fontSize: 11 }}>
                        * Recommended: 5000, larger lists may take some time to load!
                        <br />
                        ** Currently bookmarks are only possible if the result contains a maximum
                        <br />of ~3000 products.
                    </p>
                </div>
            </div>
        </div>
    </div>

}