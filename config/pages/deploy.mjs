import * as pages from 'gh-pages';

function deploy() {
	pages.publish('dist', { add: true }, function (err) {
		alert(err);
	});
}

export default [deploy()];
