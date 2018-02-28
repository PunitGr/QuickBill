// @flow
import React, { Component } from "react";
import jsPDF from "jspdf";
import { connect } from "react-redux";
import moment from "moment";

type Props = {
    currency: Object,
    items: Object,
    addInfo: {
        discount: ?number,
        tax: ?number,
        amountPaid: ?number,
        vat: ?number
    },
    invoiceDetails: {
        to: string,
        from: string,
        addressTo: string,
        addressFrom: string,
        phoneTo: string,
        phoneFrom: string,
        emailTo: string,
        emailFrom: string,
        invoiceNumber: string,
        job: string,
        invoiceType: string
    },
    status: {value: ?string, label: ?string},
    paidStatus: ?boolean,
    downloadStatus: ?boolean,
    dateFormat: ?string
};


class Preview extends Component {
    constructor(props) {
        super(props);
        this.pdfToHTML = this.pdfToHTML.bind(this);
    }

    pdfToHTML: () => void;

    componentDidMount() {
        const app = document.querySelector("#app");
        if (app) {
            app.className = "fix-navbar";
        }
        window.scrollTo(0, 0);
        if (this.props.downloadStatus) {
            this.pdfToHTML();
        }
    }

    componentWillUnmount() {
        const app = document.querySelector("#app");
        if (app) {
            app.className = "";
        }
    }

    pdfToHTML() {
        let element = document.querySelector(".invoice");
        let options = {
            onrendered: function(canvas) {
                let imgstring = canvas.toDataURL("image/jpeg", 1.0);
                let pdf = new jsPDF();
                if (element) {
                    let width = (element.offsetWidth *  0.264583) + 10;
                    let height = element.offsetHeight *  0.264583;
                    pdf.deletePage(1);
                    pdf.addPage(width, height);
                    pdf.addImage(imgstring, 'JPEG', 5, 5);
                    pdf.save("download.pdf");
                }
            }
        };
        html2canvas(element, options);
    }

    render() {
        const { items, addInfo, invoiceDetails, issueDate, dueDate, dateFormat, width, paidStatus } = this.props;

        let discountElement;
        let vatElement;
        let amount = 0;
        let subTotal = 0;
        let discount = 0;
        let tax = 0;
        let vat = 0;
        let job;
        let itemElement;
        let amountPaidElement;

        if (invoiceDetails.job.length > 0) {
            job = (
                <div className="info">
                    <label htmlFor="job">Job</label>
                    {invoiceDetails.job}
                </div>
            );
        }

        if (items) {
            itemElement = Object.keys(items).map((key, index) => {
                let data = items[key];
                if (data) {
                    let itemPrice = (
                        parseFloat(data["quantity"]) * parseFloat(data["price"]) > 0
                        ? (data["quantity"] * data["price"]).toFixed(2) : 0
                    );                    
                    return (
                        <div key={index} className="invoice__item-list__item">
                            <div>
                                <h4>Name</h4>
                                <span>{data["name"]}</span>
                            </div>
                            <div>
                                <h4>Description</h4>
                                <span>{data["description"]}</span>
                            </div>
                            <div>
                                <h4>Qty</h4>
                                <span>{data["quantity"]}</span>
                            </div>
                            <div>
                                <h4>Price</h4>
                                <span>{data["price"]}</span>
                            </div>
                            <div>
                                <h4>Subamount</h4>
                                <span>{this.props.currency["value"]} {itemPrice}</span>
                            </div>
                        </div>
                    );
                } else {
                    return;
                }
            });
        }

        if(addInfo["vat"] && addInfo["vat"] > 0) {
            vatElement = (
                <div>
                    <span>VAT</span>
                    <h2>{this.props.addInfo["vat"]} %</h2>
                </div>
            )
        }

        if (addInfo["discount"] && addInfo["discount"] > 0) {
            discountElement = (<div>
                            <span>Discount</span>
                            <h2>{addInfo["discount"]} %</h2>
                        </div>);
        }

        if (addInfo["amountPaid"] && addInfo["amountPaid"] > 0 && paidStatus) {
            amountPaidElement = (
                        <div>
                            <span>Paid to Date</span>
                            <h2>{this.props.currency["value"]} {addInfo["amountPaid"]}</h2>
                        </div>
                    );
        }

        for (let key in items) {
            if (items.hasOwnProperty(key)) {
                if (items[key] && parseFloat(items[key]["quantity"]) > 0 && parseFloat(items[key]["price"]) > 0) {
                    subTotal = subTotal + (items[key]["quantity"] * items[key]["price"]);
                    let tax = 0;
                    
                    if (addInfo["discount"] && addInfo["discount"] >= 0 ) {
                        discount = (addInfo["discount"] / 100);
                    }
                    if (addInfo["tax"] && addInfo["tax"] >= 0) {
                        tax = (addInfo["tax"] / 100);
                    }
                    if (addInfo["vat"] && addInfo["vat"] >= 0) {
                        vat = (addInfo["vat"] / 100);
                    }
                    if (addInfo["amountPaid"] && addInfo["amountPaid"] > 0 && paidStatus) {
                        amount = (subTotal - (subTotal * discount)) + (subTotal * tax) + (subTotal * vat) - parseFloat(addInfo["amountPaid"]);
                    }
                    else {
                        amount = (subTotal - (subTotal * discount)) + (subTotal * tax) + (subTotal * vat);
                    }
                }
            }
        }

        return ( 
            <div className="dashboard">
                <div className="preview-wrapper">
                    <div className="preview">
                        <div className="invoice">
                            <link rel="stylesheet" href="/assets/css/styles.css"/>
                            <div className="invoice__header">
                                <h4>{this.props.status["label"]}</h4>
                                <h2>{invoiceDetails.invoiceType}</h2>
                            </div>

                            <div className="invoice__info">
                                <div className="info">
                                    <label htmlFor="date">Date</label>
                                    {moment(issueDate).format(dateFormat["value"])}
                                </div>

                                <div className="info">
                                    <label htmlFor="date">Due Date</label>
                                    {moment(dueDate).format(dateFormat["value"])}
                                </div>

                                <div className="info">
                                    <label htmlFor="invoice">Invoice #</label>
                                    {invoiceDetails.invoiceNumber}
                                </div>

                                {job}
                            </div>

                            <div className="invoice__info">
                                <div className="address-element">
                                    <label htmlFor="from">Bill from:</label>
                                    <span>{ invoiceDetails.from }</span>
                                    <span>{ invoiceDetails.addressFrom }</span>
                                    <span>{ invoiceDetails.phoneFrom }</span>
                                    <span>{ invoiceDetails.emailFrom }</span>
                                </div>
                                <div className="address-element">
                                    <label htmlFor="to">Bill to:</label>
                                    <span>{ invoiceDetails.to }</span>
                                    <span>{ invoiceDetails.addressTo }</span>
                                    <span>{ invoiceDetails.phoneTo }</span>
                                    <span>{ invoiceDetails.emailTo }</span>
                                </div>
                            </div>
                            <hr />
                            <div className="invoice__item-list">
                                <div className="invoice__item-list__head">
                                    <div>Item</div>
                                    <div>Description</div>
                                    <div>Qty</div>
                                    <div>Price</div>
                                    <div>SubAmount</div>
                                </div>
                                {itemElement}
                            </div>
                            <hr />
                            <div className="invoice__bill">
                                <div className="bill-detail">                        
                                    <div>
                                        <span>Subtotal</span>
                                        <h2>{this.props.currency["value"]} {subTotal.toFixed(2)}</h2>
                                    </div>
                                    {discountElement}
                                    <div>
                                    <span>Taxes</span>
                                        <h2>{(this.props.addInfo["tax"] >= 0 ? this.props.addInfo["tax"] : 0) || 0} %</h2>
                                    </div>
                                    {vatElement}
                                    {amountPaidElement}
                                    <div>
                                        <span>Total ({this.props.currency["label"]})</span>
                                        <h2 className="bill-total">{this.props.currency["value"]} {amount.toFixed(2)}</h2>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>

                    <div className="preview-download">
                        <div className="solid-btn solid-btn--ghost solid-btn--dashboard">
                            <a className="ghost-btn ghost-btn--preview" onClick={this.pdfToHTML}>
                                <i className="fa fa-arrow-circle-down" aria-hidden="true"> </i> Download
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        currency: state.currency,
        addInfo: state.addInfo,
        items: state.items,
        invoiceDetails: state.invoiceDetails,
        status: state.status,
        issueDate: state.issueDate,
        dueDate: state.dueDate,
        dateFormat: state.dateFormat,
        downloadStatus: state.downloadStatus,
        paidStatus: state.paidStatus
    }
}

export default connect(mapStateToProps, null)(Preview);