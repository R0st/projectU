"usestrict";

function learnJS(lang, callback) {
    console.log(`I learn: ${lang}`);
    callback();
}

function done() {
    console.log('i passed this lesson');
}

learnJS('JS', done);