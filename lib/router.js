Router.configure({
	layoutTemplate: 'layout',
});

Router.route('/', {name: 'welcome'});
Router.route('/grade', {name: 'grade'});