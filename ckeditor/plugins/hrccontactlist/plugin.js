CKEDITOR.plugins.add ('hrccontactlist', {
	// Register the icons
    icons: 'contacts',
    // Plugin initialization logic
    init: function (editor) {
    	// Define paths
        var iconPath = this.path + 'icons/contacts.png';
        var dialogPath = this.path + 'dialogs/hrccontacts.js';
        // Define the editor command that opens our dialog window
        editor.addCommand('hrccontactlist', new CKEDITOR.dialogCommand('contactsDialog'));
        // Create a toolbar button that executes the above command
        editor.ui.addButton('<Hrccontactlist></Hrccontactlist>', {
        	label: 'Insert Contact List',  	// The text part of the button (if available) and the tooltip
        	command: 'hrccontactlist', 		// The command to execute on click
        	toolbar: 'insert'				// Toolbar group name for button placement
        });

        if(editor.contextMenu) {
        	// Add a context menu group with the Edit Abbreviation item.
        	editor.addMenuGroup('contactsGroup');
        	editor.addMenuItem('contactsItem', {
        		label: 'Edit Contacts',
        		icon: iconPath,
        		command: 'hrccontactlist',
        		group: 'contactsGroup'
        	});

        	editor.contextMenu.addListener(function (element) {
        		if (element.getAscendant('contacts', true)) {
        			return { contactsItem: CKEDITOR.TRISTATE_OFF };
        		}
        	});
        }

        // Register the dialog file -- this.path is the plugin folder
        CKEDITOR.dialog.add('contactsDialog', dialogPath);

        if(typeof editor.config.contentsCss == 'object') {
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