module.exports = {

	convertTime( time ) {
		const timeStr = time.toString();
		const min = timeStr.substr( timeStr.length - 2, 2);
		let hr = timeStr.substring( 0, timeStr.length - 2);
		if( time > 1259 ) {
			hr = (Number( hr ) - 12).toString();
		}
		const ampm = time > 1159 ? "pm" : "am";
		return `${ hr }:${ min } ${ ampm }`;
	}

}
