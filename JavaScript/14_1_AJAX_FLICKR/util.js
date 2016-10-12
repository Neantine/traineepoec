function ellipsis(s, n){
    return s.length  > n ? s.substr(0,n-1)+'&hellip;' : s; // from http://stackoverflow.com/questions/1199352/smart-way-to-shorten-long-strings-with-javascript
}