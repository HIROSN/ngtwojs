(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      templateUrl: 'app/app.component.html'
    })
    .Class({
      constructor: function() {
        this.paragraph = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

        this.items = [
          {
            id: 1,
            date: new Date('2512-01-04T14:00:00'),
            fee: 3200
          },
          {
            id: 2,
            date: new Date('2512-07-03T20:00:00'),
            fee: 4700
          },
          {
            id: 3,
            date: new Date('2512-07-12T21:00:00'),
            fee: 4300
          }
        ];
      }
    });
})(window.app || (window.app = {}));
