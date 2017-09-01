import React, { Component } from "react";
import jsPDF from "jspdf";

export default class PDF extends Component {
    componentDidMount() {
        const app = document.querySelector("#app");
        if (app) {
            app.className = "fix-navbar";
        }
    }

    componentWillUnmount() {
        const app = document.querySelector("#app");
        if (app) {
            app.className = "";
        }
    }

    constructor(props) {
        super(props);
        this.pdfToHTML = this.pdfToHTML.bind(this);
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
            source // HTML string or DOM elem ref.
            , margins.left // x coord
            , margins.top // y coord
            , {
                'width': margins.width // max width of content on PDF
                    ,
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
        return ( 
            <div>
                <div classID = "HTMLtoPDF" >
                    <center>
                        <h2> HTML to PDF </h2> 
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing </p> 
                    </center> 
                </div> 
                <button onClick = { this.pdfToHTML } > Download PDF </button>
            </div>
        );
    }
}