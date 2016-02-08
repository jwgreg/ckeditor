CKEDITOR.dialog.add('hrciconlist', function (editor) {
    return {
        title: 'Icon List Properties',
        minWidth: 500,
        minHeight: 300,

        contents: [
            {
                id: 'tab1',
                label: 'List Info',
                title: 'List Info',
                elements: [
                    {
                        id: 'listtitle',
                        type: 'text',
                        label: 'List Title',
                        width: '300px',
                        setup: function (widget) {
                            this.setValue(widget.data.listtitle);
                        },
                        commit: function (widget) {
                            widget.setData('listtitle', this.getValue());
                        }
                    }
                ]
            },
            {
                id: 'tab2',
                label: 'List Items',
                title: 'List Items',
                elements: [
                    {
                        id: 'itemlist',
                        type: 'html',
                        html:
                            '<table id="linksTable">' +
                                '<tr>' +
                                    '<th>Select Icon</th>' +
                                    '<th>Title</th>' +
                                    '<th>URL</th>' +
                                '</tr>' +
                                '<tr>' +
                                    '<td contenteditable width="150px"></td>' +
                                    '<td contenteditable width="200px"></td>' +
                                    '<td contenteditable width="200px"></td>' +
                                '</tr>' +
                            '</table>'
                    },
                    {
                        id: 'buttons',
                        type: 'html',
                        html:
                            '<div>' +
                                '<button id="createListItem" value"Add List Item" onclick="showListItemDialog()">Add List Item</button>' +
                                //'<input id="createListItem" class="btn btn-default" type="button" value="Add List Item" onclick="showListItemDialog()" />' +
                                '<input id="createSectionHeader" type="button" value="Add Section Header" onclick="showSectionHeaderDialog()" />' +
                                '<input id="createLink" type="button" value="Add Link" onclick="showLinkDialog()" />' +
                            '</div>'
                    }
                ]
            }
        ],


        onShow: function () {
            var selection = editor.getSelection();
            var element = selection.getStartElement();

            if (element)
                element = element.getAscendant('listtitle', true);

            if (!element || element.getName() != 'listtitle') {
                element = editory.document.createElement('listtitle');
                this.insertMode = true;
            } else {
                this.insertMode = false;
            }

            this.element = element;
            if (!this.insertMode)
                this.setupContent(this.element);
        },

        onOK: function () {
            var dialog = this;
            var listtitle = this.element;
            this.commitContent(listtitle);

            if (this.insertMode)
                editor.insertElement(listtitle);
        }
    };
});