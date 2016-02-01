CKEDITOR.plugins.add('hrccontacts', {
    // Register any icons
    icons: 'contacts',
    // Plugin Initialization object
    init: function(editor) {
        // Define the editor command
        editor.addCommand('hrccontacts', new CKEDITOR.dialogCommand('contactsDialog'));
        editor.ui.addButton('Hrccontacts', {
            label: 'Insert Contact List',
            command: 'hrccontacts',
            toolbar: 'insert'
        });

        if (editor.contextMenu) {
            // Add a context menu group with the Edit Abbreviation item.
            editor.addMenuGroup('contactsGroup');
            editor.addMenuItem('contactsItem', {
                label: 'Edit Contacts',
                icon: this.path + 'icons/contacts.png',
                command: 'hrccontacts',
                group: 'contactsGroup'
            });
            editor.contextMenu.addListener(function(element) {
                if (element.getAscendant('contacts', true)) {
                    return { contactsItem: CKEDITOR.TRISTATE_OFF };
                }
            });
        }
        // Register the dialog file -- this.path is the plugin folder
        CKEDITOR.dialog.add('contactsDialog', this.path + 'dialogs/hrccontacts.js');

        if (typeof editor.config.contentsCss == 'object') {
            editor.config.contentsCss.push(CKEDITOR.getUrl(this.path + 'contacts.css'));
        } else {
            editor.config.contentsCss = [editor.config.contentsCss, CKEDITOR.getUrl(this.path + 'contacts.css')];
        }

    }
});

// Add row to dialog table
function addRow() {
    $("#contactsTable").append("<tr><td contenteditable></td><td contenteditable></td><td contenteditable></td><td contenteditable></td></tr>");
}

// Reset dialog to empty table
function resetDialog() {
    $(".contactsHolder").html('<table id="contactsTable" width="100%"><tr><th>Name</th><th>Title</th><th>Email</th><th>Phone</th></tr><tr><td contenteditable></td><td contenteditable></td><td contenteditable></td><td contenteditable></td></tr></table><input type="button" class="addRowBtn" value="Add Row" onclick="addRow()" />');
}