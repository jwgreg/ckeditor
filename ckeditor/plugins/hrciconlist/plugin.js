CKEDITOR.plugins.add('hrciconlist', {
    requires: 'widget',
    icons: 'hrciconlist',
    init: function (editor) {
        editor.widgets.add('hrciconlist', {
            button: 'Create an HRC Link List',
            template:
                '<div class="iconlistBox">' +
                    '<h3 id="listtitle">Test Title</h3>' +
                    '<ul class="insigniaParent">' +
                        '<li id="air_Defense_Artillery_Insignia">Air Defense</li>' +
                    '</ul>' +
                '</div>',
            
            dialog: 'hrciconlist',

            init: function () {
                var listtitle = this.element.getStyle('listtitle');
            }
        });
        CKEDITOR.dialog.add('hrciconlist', this.path + 'dialogs/hrciconlist.js');
    }
});

dialog = $("#dialog-list-item-form").dialog({
    autoOpen: false,
    height: 300,
    width: 350,
    modal: true,
    buttons: {
        "Create a List Item": addItem,
        Cancel: function () {
            dialog.dialog("close");
        }
    },
    close: function () {
        form[0].reset();
        allFields.removeClass("ui-state-error");
    }
});

form = dialog.find("form").on("submit", function (event) {
    event.preventDefault();
    addItem();
})


function showListItemDialog() {
    alert('Clicked:');

}

function showSectionHeaderDialog() {
    alert('Add Section Header:');
}

function showLinkDialog() {
    alert('Add Link' );
}

//CKEDITOR.plugins.add('hrciconlist', {
//    requires: 'widget',
//    icons: 'hrciconlist',
//    init: function (editor) {
//        editor.addCommand('hrciconlist', new CKEDITOR.dialogCommand('hrciconlist'));
//        editor.ui.addButton('hrciconlist', {
//            label: 'Insert Icon List',
//            command: 'hrciconlist',
//            toobar: 'insert'
//        });
//    }
//});
