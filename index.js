/*jshint esversion: 6 */

/* global console*/

function download(filename, text) {
    "use strict";
    let element = document.createElement('a');
    element.setAttribute('href',
                         'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download',
                         filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById('upper-case')
        .addEventListener('click',
                          () => {
                              "use strict";
                              let ta = document.getElementById('text-area');
                              let value = ta.value;

                              if (value) {
                                  ta.value = value.toUpperCase();
                              }
                          });

document.getElementById('lower-case')
        .addEventListener('click',
                          () => {
                              "use strict";
                              let ta = document.getElementById('text-area');
                              let value = ta.value;

                              if (value) {
                                  ta.value = value.toLowerCase();
                              }
                          });

document.getElementById('proper-case')
        .addEventListener('click',
                          () => {
                              "use strict";
                              let ta = document.getElementById('text-area');
                              let value = ta.value;

                              if (value) {
                                  let sentenceArr = value.split(' ');
                                  console.log(sentenceArr);
                                  sentenceArr = sentenceArr.map(item => {
                                      if (item.length > 0) {
                                          let wordArr = item.split('');
                                          wordArr[0] = wordArr[0].toUpperCase();
                                          return wordArr.join('');
                                      }
                                  });

                                  ta.value = sentenceArr.join(' ');
                              }
                          });

document.getElementById('sentence-case')
        .addEventListener('click',
                          () => {
                              "use strict";
                              let ta = document.getElementById('text-area');
                              let value = ta.value;

                              if (value) {
                                  value = value.toLowerCase();

                                  let sentenceArr = value.split('.');
                                  console.log(sentenceArr);
                                  sentenceArr = sentenceArr.map(item => {
                                      item = item.trim();

                                      if (item.length > 0) {
                                          console.log(item);
                                          let wordArr = item.split('');
                                          wordArr[0] = wordArr[0].toUpperCase();
                                          wordArr.unshift(' ');
                                          return wordArr.join('');
                                      }
                                  });

                                  ta.value = sentenceArr.join('.')
                                                        .trim();
                              }
                          });

document.getElementById('save-text-file')
        .addEventListener('click',
                          () => {
                              "use strict";
                              let ta = document.getElementById('text-area');
                              let value = ta.value;

                              download('text.txt',
                                       value);
                          });
