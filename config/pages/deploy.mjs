import * as pages from 'gh-pages';

export default function () {
	pages.publish('dist', { add: true }, function (err) {
		alert(err);
	});
}
