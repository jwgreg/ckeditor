CKEDITOR.dialog.add('addedititem', function (editor) {
    return {
        title: 'Add/Edit List Items',
        minWidth: 300,
        minHeight: 175,
        contents: [
            {
                id: 'item',
                elements: [
                    {
                        id: 'itemLabel',
                        label: 'This is a test',
                        width: '100px'
                    }
                ]
            }
        ]
    };
});