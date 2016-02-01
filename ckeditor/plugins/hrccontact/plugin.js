CKEDITOR.plugins.add( 'hrccontact', {
	// Register the icons.
	icons: 'contacts',
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
				icon: this.path + 'icons/contacts.png',
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
	}
});