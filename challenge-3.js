function getValue(data, path) {
	    var i, len = path.length;
	    for (i = 0; typeof data === 'object' && i < len; ++i) {
		            data = data[path[i]];
		        }
	    return data;
}
