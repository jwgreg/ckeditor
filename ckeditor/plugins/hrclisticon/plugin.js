CKEDITOR.plugins.add( 'hrclisticon', {
	// Register the icons.
	icons: 'hrclisticon',
	// The plugin initialization logic goes inside this method.
	init: function( editor ) {
		var templateHtml = '';
		// Define an editor command that opens our dialog window.
		editor.addCommand( 'hrclisticon', new CKEDITOR.dialogCommand( 'hrclisticonDialog' ) );
		editor.ui.addButton( 'Hrclisticon', {
			label: 'Insert List Icon',
			command: 'hrclisticon',
			toolbar: 'insert'
		});

		if ( editor.contextMenu ) {
			// Add a context menu group with the Edit Abbreviation item.
			editor.addMenuGroup( 'hrclisticonGroup' );
			editor.addMenuItem( 'hrclisticonItem', {
				label: 'Edit List Icon',
				icon: this.path + 'icons/hrclisticon.png',
				command: 'hrclisticon',
				group: 'hrclisticonGroup'
			});
			editor.contextMenu.addListener( function( element ) {
				if ( element.getAscendant( 'hrclisticon', true ) ) {
					return { hrclisticonItem: CKEDITOR.TRISTATE_OFF };
				}
			});
		}

		// Register our dialog file -- this.path is the plugin folder path.
		CKEDITOR.dialog.add( 'hrclisticonDialog', this.path + 'dialogs/hrclisticondialog.js' );
	}
});