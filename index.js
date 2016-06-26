function getType(name) {
	if (name.match(/bachelor/i)) {
		return 'bachelor';
	}
	if (name.indexOf('MLaw') === 0) {
		return 'master';
	}
	if (name.indexOf('BLaw') === 0) {
		return 'bachelor';
	}
	if (name.indexOf('BA') === 0) {
		return 'bachelor';
	}
	if (name.indexOf('MA') === 0) {
		return 'master';
	}
	if (name.match(/master/i)) {
		return 'master';
	}
	if (name.match(/doktor/i)) {
		return 'doctorate';
	}
	if (name.match(/lizentiat/i)) {
		return 'licenciate';
	}
	if (name.match(/joint deg/i)) {
		return 'joint-degree';
	}
	if (name.match(/Vorbereitung Notariatsprüfung/i)) {
		return 'notary-exam-preparation';
	}
	if (name.indexOf('MSc') === 0) {
		return 'master';
	}
	if (name.indexOf('BSc') === 0) {
		return 'bachelor';
	}
}

module.exports = getType;
