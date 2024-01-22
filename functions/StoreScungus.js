function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
import { useState } from "react";
function storeScungusLocally(key, initialValue) {
    // State to store value
    // pass initial state function to useState so logic is only executed once
    var _useState = _slicedToArray(useState(function() {
        try {
            // get from local storage by key
            var item = window.localStorage.getItem(key);
            // parse stored json or if none return init val
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // if error, also return init value
            console.log(error);
            return initialValue;
        }
    }), 2), storedValue = _useState[0], setStoredValue = _useState[1];
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    var setValue = function(value) {
        try {
            // allow value to be a function so we have the same api as useState
            var valueToStore = _instanceof(value, Function) ? value(storedValue) : value;
            // save state
            setStoredValue(valueToStore);
            // save to local storage
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            // a more advanced implementation would handle the error
            console.log(error);
        }
    };
    return [
        storedValue,
        setValue
    ];
}
export { storeScungusLocally };
