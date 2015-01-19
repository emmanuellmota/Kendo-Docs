exports.install = function(framework) {
    framework.route('/*', view_app);
};

function view_app() {
    var self = this;
    var url = (self.req.url != '/') ? self.req.url: '/index';

    fs.readFile('./kendo-docs' + url + '.md', 'utf8', function(err, data) {
        if (err) self.view('index', { title: 'Error', body: err });
        else {
            var dataArr = data.split('---');
            var patt = new RegExp('\\n(.*?)\\n');
            var title = patt.exec(dataArr[1]);

            self.view('index', {title: title[1].split(':')[1], body: marked(dataArr[2]).replace(/.jpeg/g, '.jpg')});
        }
    });
}