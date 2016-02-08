


CKEDITOR.plugins.add( 'simpleLink', {
    init: function (editor) {
        var iconPath = this.path + 'images/icon.png';
        editor.addCommand('simpleLinkDialog', new CKEDITOR.dialogCommand('simpleLinkDialog'));
        editor.ui.addButton('SimpleLink', {
            label: 'Insert a Link',
            command: 'simpleLinkDialog',
            icon: iconPath
        });

        CKEDITOR.dialog.add('simpleLinkDialog', function (editor) {
            return {
                title: 'Link Properties',
                minWidth: 400,
                minHeight: 200,
                contents: [
                    {
                        id: 'general',
                        label: 'Settings',
                        elements: [
                            {
                                type: 'html',
                                html: 'This dialog window lets you create simple links for your website.'
                            }, {
                                type: 'textarea',
                                id: 'contents',
                                label: 'Displayed Text',
                                validate: CKEDITOR.dialog.validate.notEmpty('The Displayed Text field cannot be empty.'),
                                required: true,
                                commit: function (data) {
                                    data.contents = this.getValue();
                                }
                            }, {
                                type: 'text',
                                id: 'url',
                                label: 'URL',
                                validate: CKEDITOR.dialog.validate.notEmpty('The link must have a URL.'),
                                required: true,
                                commit: function (data) {
                                    data.url = this.getValue();
                                }
                            }, {
                                type: 'select',
                                id: 'style',
                                label: 'Style',
                                items: [
                                    ['<none>', ''],
                                    ['Bold', 'b'],
                                    ['Underline', 'u'],
                                    ['Italics', 'i']
                                ],
                                commit: function (data) {
                                    data.style = this.getValue();
                                }
                            }, {
                                type: 'checkbox',
                                id: 'newPage',
                                label: 'Opens in a new page',
                                'default': true,
                                commit: function (data) {
                                    data.newPage = this.getValue();
                                }
                            }
                        ]
                    }
                ],
                onOk: function () {
                    var dialog = this,
                        data = {},
                        link = editor.document.createElement('a');
                    this.commitContent(data);

                    link.setAttribute('href', data.url);
                    if (data.newPage)
                        link.setAttribute('target', '_blank');
                    switch (data.style) {
                        case 'b':
                            link.setStyle('font-weight', 'bold');
                            break;
                        case 'u':
                            link.setStyle('text-decoration', 'underline');
                            break;
                        case 'i':
                            link.setStyle('font-style', 'italic');
                            break;
                    }
                    link.setHtml(data.contents);
                    editor.insertElement(link);
                }
            };
        });
    }
});


