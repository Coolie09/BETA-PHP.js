"use strict"

function addslashes(a) {
    let elementList = ["'", "\"", "\\"];
    elementList.forEach(e => {
        a = a.replaceAll(e, `/${e}`);
    });
    return a;
}
function addcslashes(a, b) {
    let elementList = b.split("");
    elementList.forEach(e => {
        a = a.replaceAll(e, `/${e}`);
    });
    return a;
}
function bin2hex(a) {
    return parseInt(a, 2).toString(16).toUpperCase();
}
function chop(a) {
    var _a;
    return (_a = a.trimEnd()) !== null && _a !== void 0 ? _a : a.trimRight();
}
function chr(a) {
    if (a < 0) { 
        while (a < 0) a += 256
        a %= 256;
    }
    return String.fromCharCode(Math.floor(a));
}
function chunk_split(a, b, c = "\r\n") {
    let v = [];
    for (let i = a.length / b, j = 0; i >= 0; i--, j++) {
        v.push(a.slice(0, b));
        a = a.replace(v[0], "");
    }
    a = v.join(c);
    return a;
}

function convert_uuencode(a) {
    let aA = a.split("");
    let c = [];
    let s = [];
    let d = false;
    let i;
    aA.forEach(e => {
        console.log(convertToBinary(e.charCodeAt(0)))
        s.push(convertToBinary(e.charCodeAt(0)));

    });
    a = s.join("");   
    if (a.length%6 != 0) {
        console.log(`Before ${a}`); 
        while (a.length%6 != 0) { 
            a += "0"
            i++
        }
        console.log(`After ${a}`);
        !d
    }
    
    for (let i = a.length/6; i >= 0; i--) { 
        console.log(a.slice(0,5));
    }
    
    function convertToBinary(x) {
        let bin = 0;
        let rem, i = 1, step = 1;
        while (x != 0) {
            rem = x % 2;
            x = parseInt(x / 2);
            bin = bin + rem * i;
            i = i * 10;
        }
        return bin;
    }
    return "Sorry, I didn't get to finish this method yet!"
}

function wordwrap(string,width,$break=" \n ",cut_long_words=false) {
    cut_long_words = !cut_long_words
    let arr = [];
    if (string.includes(" ") == false) cut_long_words = false;
    for (let i = (string.length/width); i >= 0; i--) { 
        if (cut_long_words== false) {arr.push(string.slice(0,width));string = string.replace(arr[arr.length-1], "")}
        else { 
            for (let y = width; y <= string.length; y++) { 
                if (string[y-1] == " ") { 
                    arr.push(string.slice(0,y))
                    string = string.replace(arr[arr.length-1], "")
                } 
            }
        }
    }
    if (cut_long_words) arr.push(string)
    string = arr.join($break);
    return string
}

function strstr(haystack, needle ,before_needle=false) {
    needle.toString();
    console.log(needle);
    if (haystack.includes(needle) == false) { 
        return false;
    }
    if (before_needle == false) return haystack.slice(haystack.indexOf(needle))
    else return haystack.replace(haystack.slice(haystack.indexOf(needle)), "")
}

function strtolower(string) {
    return string.toLowerCase()
}

function strcmp(string1, string2) {
    return string1.localeCompare(string2);
}

function strcasecmp(string1, string2) {
    return string1.toUpperCase().localeCompare(string2.toUpperCase());
}

function strncmp(string1, string2, length) {
    return string1.slice(0, length).localeCompare(string2.slice(0,length))
}

function strncasecmp(string1, string2, length) {
    return string1.toUpperCase().slice(0, length).localeCompare(string2.toUpperCase().slice(0,length))
}

function strtoupper(string) {
    return string.toUpperCase()
}

Window.prototype.chunk_split = chunk_split;
Window.prototype.chop = chop;
Window.prototype.bin2hex = bin2hex;
Window.prototype.addcslashes = addcslashes;
Window.prototype.addslashes = addslashes;
Window.prototype.wordwrap = wordwrap;
Window.prototype.strstr = strstr;
Window.prototype.strtolower = strtolower;
Window.prototype.strcmp = strcmp;

String.prototype.chunk_split = chunk_split;
String.prototype.chop = chop;
String.prototype.bin2hex = bin2hex;
String.prototype.addcslashes = addcslashes;
String.prototype.addslashes = addslashes;
String.prototype.wordwrap = wordwrap;
String.prototype.strstr = strstr;
String.prototype.strtolower = strtolower;
String.prototype.strcmp = strcmp;
