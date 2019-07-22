function scan(success, error) {
    var code = window.prompt("Enter barcode value (empty value will fire the error handler):");
    if(code) {
        var result = {
            text:code,
            format:"Fake",
            cancelled:false
        };
        success(result);
    } else {
        error("No barcode");
    }
}

function encode(type, data, success, errorCallback) {
    success();
}

function cancelCapture(success, error) {
    success();
}

module.exports = {
    scan: scan,
    encode: encode,
    cancelCapture: cancelCapture
};

require("cordova/exec/proxy").add("BarcodeScanner", module.exports);
