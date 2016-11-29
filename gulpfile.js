'use strict';

var gulp            = require('gulp'),
    markdownpdf     = require("markdown-pdf");

var mdDocs = [
    "20160504-git-installfest.md",
    "20160511-vorkurs-html-und-css.md",
    "20160518-javascript-dom.md",
    "20160525-javascript-1.md",
    "20160601-javascript-2.md",
    "20160608-client-server.md",
    "20160615-client-server-express.md",
    "20160622-typescript.md",
    "20160627-angular2.md",
    "20160713-html-css.md"
  ];
var pdfDocs = mdDocs.map(function (d) { return "pdf/" + d.replace(".md", ".pdf") });
var options = {
  cssPath: "pdf-style.css"
};

gulp.task('generate', function() {
  markdownpdf(options).from(mdDocs).to(pdfDocs, function () {
    pdfDocs.forEach(function (d) { console.log("Created", d) })
  })
});

gulp.task('generate-one-pdf', function() {
  markdownpdf(options).concat.from(mdDocs).to('pdf/all-questions.pdf', function () {
    pdfDocs.forEach(function (d) { console.log("Created", d) })
  })
});
