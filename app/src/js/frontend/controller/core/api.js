class API {

	// Distance ~ Degree to Radius
	degrad(deg) {
	    return deg * (Math.PI/180);
	}

	// Distance between 2 coordinates
	distance(data) {
		let radius, lat, lon, distance, circumfrence, km, mi;
		radius = 6371;
		lat = this.degrad(data[3] - data[2]);
		lon = this.degrad(data[1] - data[0]);
		distance = Math.sin(lat/2) * Math.sin(lat/2) + Math.cos(this.degrad(data[2])) * Math.cos(this.degrad(data[3])) * Math.sin(lon/2) * Math.sin(lon/2);
		circumfrence = 2 * Math.atan2(Math.sqrt(distance), Math.sqrt(1-distance));
		km = (radius * circumfrence); // Distance in km
		mi = (radius * circumfrence) * 0.621371; // Distance in miles
		mi = mi + (mi*0.1); // 10% rule
		return mi.toFixed(1);
	}

	unique(arr, comparator) {
        let uniqueArr = [];
        for (let i in arr) {
            let found = false;
            for (let j in uniqueArr) {
                if (comparator instanceof Function) {
                    if (comparator.call(null, arr[i], uniqueArr[j])) {
                        found = true;
                        break;
                    }
                }
                else {
                    if (arr[i] == uniqueArr[j]) {
                        found = true;
                        break;
                    }
                }
            }
            if (!found) {
                uniqueArr.push(arr[i]);
            }
        }
        return uniqueArr;
    }

	getPage() {
		var page;
		page = window.location.pathname;
		return page;
	}

}