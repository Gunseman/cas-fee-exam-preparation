'use strict';

var gulp            = require('gulp'),
    markdownpdf     = require("markdown-pdf");

var mdDocs = [
    "20160504__1__git-installfest.md",
    "20160511__2a__vorkurs-html-und-css.md",
    "20160518__2b__javascript-dom.md",
    "20160525__3__javascript-1.md",
    "20160601__4__javascript-2.md",
    "20160608__5__client-server.md",
    "20160615__6__client-server-express.md",
    "20160622__7__typescript.md",
    "20160627__10__angular2.md",
    "20160713__12_13_14__html-css.md",
    "20160907__15__komplexe_sites_modular_strukturieren.md",
    "20160914__16__testing.md",
    "20160921__17__react_and_test_driven_development.md",
    "20160928__18_19_22__SPA.md",
    "20161026__20__grosse_seiten_mit_react.md",
    "20161102__21__site_optimization.md",
    "20161116__23__isomorphic_frameworks.md",
    "20161123__24__accessibility_seo.md"
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
