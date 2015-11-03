/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Stuff"); },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/studentsparents', {
  name: 'studentsparents'
});
Router.route('/facultystaff', {
  name: 'facultystaff'
});
Router.route('/alumni', {
  name: 'alumni'
});Router.route('/contact', {
  name: 'contact'
});