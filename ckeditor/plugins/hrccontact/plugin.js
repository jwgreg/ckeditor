CKEDITOR.plugins.add( 'hrccontact', {
	// Register the icons.
	icons: 'hrccontact',
	// The plugin initialization logic goes inside this method.
	init: function( editor ) {
		// Define an editor command that opens our dialog window.
		editor.addCommand( 'hrccontact', new CKEDITOR.dialogCommand( 'contactDialog' ) );
		editor.ui.addButton( 'Hrccontact', {
			label: 'Insert Contact',
			command: 'hrccontact',
			toolbar: 'insert'
		});

		if ( editor.contextMenu ) {
			// Add a context menu group with the Edit Abbreviation item.
			editor.addMenuGroup( 'hrccontactGroup' );
			editor.addMenuItem( 'hrccontactItem', {
				label: 'Edit Contact',
				icon: this.path + 'icons/hrccontact.png',
				command: 'hrccontact',
				group: 'hrccontactGroup'
			});
			editor.contextMenu.addListener( function( element ) {
				if ( element.getAscendant( 'hrccontact', true ) ) {
					return { abbrItem: CKEDITOR.TRISTATE_OFF };
				}
			});
		}

		// Register our dialog file -- this.path is the plugin folder path.
		CKEDITOR.dialog.add( 'contactDialog', this.path + 'dialogs/contactDialog.js' );

        if(typeof editor.config.contentsCss == 'object') {
        	editor.config.contentsCss.push(CKEDITOR.getUrl(this.path + 'contacts.css'));
        } else {
        	editor.config.contentsCss = [editor.config.contentsCss, CKEDITOR.getUrl(this.path + 'contacts.css')];
        }
	}
});

function addRow() {
    $("#contactsTable").append("<tr><td contenteditable></td><td contenteditable></td><td contenteditable></td><td contenteditable></td></tr>");
}

function resetDialog () {
    $(".contactsHolder").html('<table id="contactsTable" width="100%"><tr><th>Name</th><th>Title</th><th>Email</th><th>Phone</th></tr><tr><td contenteditable></td><td contenteditable></td><td contenteditable></td><td contenteditable></td></tr></table><input type="button" class="addRowBtn" value="Add Row" onclick="addRow()" />');
}