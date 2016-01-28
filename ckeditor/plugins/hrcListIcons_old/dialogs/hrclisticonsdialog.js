CKEDITOR.dialog.add('hrclisticonsDialog', function(editor) {
    return {
        title: 'Icon List Properties',
        minWidth: 500,
        minHeight: 300,
        contents: [{
            id: 'tab',
            label: 'List Info',
            title: 'List Info',
            elements: [
            {
                id: 'listtitle',
                type: 'text',
                label: 'List Title',
                width: '300px',
                setup: function(widget) {
                    this.setValue(widget.data.listtitle);
                },
                commit: function(widget) {
                    widget.setData('listtitle', this.getValue());
                }
            }
            ]
        }, {
            id: 'tab2',
            label: 'List Items',
            title: 'List Items',
            elements: [{
                id: 'itemlist',
                type: 'html',
                html: '<table id="linksTable">' +
                    '<tr>' +
                    '<th>Select Icons</th>' +
                    '<th>Title</th>' +
                    '<th>URL</th>' +
                    '</tr>' +
                    '<tr>' +
                    '<td contentedittable width="150px"></td>' +
                    '<td contentedittable width="200px"></td>' +
                    '<td contentedittable width="200px"></td>' +
                    '</tr>' +
                    '</table>'
            }]
        }],

        onShow: function() {
        	var selection = editor.getSelection();
        	var element = selection.getStartElement();

        	if (element)
        		element = element.getAscendant('listtitle', true);

        	if (!element || element.getName() != 'listitle') {
        		element = editor.document.createElement('listittle');
        		this.insertMode = true;
        	} else {
        		this.insertMode = false;
        	}

        	this.element = element;
        	if (!this.insertMode)
        		this.setupContent(this.element);
        },

        onOK: function() {
        	var dialog = this;
        	var listtitle = htis.element;
        	this.commitContent(listtitle);
        	if(this.insertMode)
        		editor.insertElement(listtitle);
        }
    };
});

