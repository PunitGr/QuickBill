import React, { Component } from "react";
import jsPDF from "jspdf";
import { connect } from "react-redux";

class Preview extends Component {
    constructor(props) {
        super(props);
        this.pdfToHTML = this.pdfToHTML.bind(this);
        console.log(props);
    }

    componentDidMount() {
        const app = document.querySelector("#app");
        if (app) {
            app.className = "fix-navbar";
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    componentWillUnmount() {
        const app = document.querySelector("#app");
        if (app) {
            app.className = "";
        }
    }

    pdfToHTML() {
        let pdf = new jsPDF('p', 'pt', 'letter');
        let htmltoPDF = document.querySelectorAll('#HTMLtoPDF');
        let source = htmltoPDF;
        console.log(htmltoPDF, source);
        let specialElementHandlers = {
            '#bypassme': function(element, renderer) {
                return true
            }
        };

        const margins = {
            top: 50,
            left: 60,
            width: 545
        };

        pdf.fromHTML(
            source, // HTML string or DOM elem ref.
            margins.left, // x coord
            margins.top, // y coord
            {
                'width': margins.width, // max width of content on PDF
                'elementHandlers': specialElementHandlers
            },
            function(dispose) {
                // dispose: object with X, Y of the last line add to the PDF
                // this allow the insertion of new lines after html
                console.log("fucntion called");
                pdf.save('html2pdf.pdf');
            }
        )
    }
    render() {
        const {items} = this.props;
        const { addInfo } = this.props;
        const { invoiceDetails } = this.props;

        let discountElement;
        let price = 0;
        let subTotal = 0;
        let discount = 0;
        let tax = 0;

        if (addInfo["discount"] && addInfo["discount"] > 0) {
            console.log(price * discount);
            discountElement = (<div>
                            <span>Discount</span>
                            <h2>{addInfo["discount"]} %</h2>
                        </div>);
        }

        for (let key in items) {
            if (items.hasOwnProperty(key)) {
                if (items[key] && parseInt(items[key]["quantity"]) > 0 && parseInt(items[key]["amount"]) > 0) {
                    price += items[key]["quantity"] * items[key]["amount"];
                    subTotal += items[key]["quantity"] * items[key]["amount"];
                    discount = (addInfo["discount"] / 100);
                    tax = (addInfo["tax"] / 100);
                    price = (price - (price * discount) + (price * tax)).toFixed(2);
                }
            }
        }

        return ( 
            <div className="dashboard">
                <div className="preview-wrapper">
                    <div className="preview">
                        <div className="invoice">
                            <div className="invoice__header">
                                <span>Paid</span>
                                <h2>Invoice</h2>
                            </div>

                            <div className="invoice__info">
                                <div className="info">
                                    <label htmlFor="date">Date</label>
                                    Date
                                </div>

                                <div className="info">
                                    <label htmlFor="date">Due Date</label>
                                    Due Date
                                </div>

                                <div className="info">
                                    <label htmlFor="invoice">Invoice #</label>
                                    Invoice Number
                                </div>

                                <div className="info">
                                    <label htmlFor="job">Job</label>
                                    Job
                                </div>
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
                            <div className="invoice__bill">
                                <div className="bill-detail">                        
                                    <div>
                                        <span>Subtotal</span>
                                        <h2>{this.props.currency["value"]} {subTotal}</h2>
                                    </div>
                                    {discountElement}
                                    <div>
                                        <span>Taxes</span>
                                        <h2>{this.props.addInfo["tax"] || 0} %</h2>
                                    </div>
                                    <div>
                                        <span>Total ({this.props.currency["label"]})</span>
                                        <h2 className="bill-total">{this.props.currency["value"]} {price}</h2>
                                    </div>
                                </div>
                            </div>
                            <hr />
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
        invoiceDetails: state.invoiceDetails
    }
}

export default connect(mapStateToProps, null)(Preview);