import * as pages from 'gh-pages';

function deploy() {
	pages.publish('dist', {}, function (err) {
		alert(err);
	});
}

export default [deploy()];

//	async beforeAdd(git) {
//		return git.rm('./test.txt');
//	},
