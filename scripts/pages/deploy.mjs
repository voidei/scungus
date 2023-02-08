import * as pages from 'gh-pages';

export default [
  pages.publish('./dist', {
    add: true,
  }),
];

/*
function deploy() {
  pages.publish(
    'dist',
    {
      async beforeAdd(git) {
        return git.rm('./test.txt');
      },
    },
    function (err) {
      alert(err);
    }
  );
}
*/
