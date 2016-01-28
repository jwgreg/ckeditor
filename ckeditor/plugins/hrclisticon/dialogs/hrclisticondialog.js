/**
 * Copyright (c) 2014-2016, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 *
 * The abbr plugin dialog window definition.
 *
 * Created out of the CKEditor Plugin SDK:
 * http://docs.ckeditor.com/#!/guide/plugin_sdk_sample_1
 */

// Our dialog definition.
CKEDITOR.dialog.add( 'hrclisticonDialog', function( editor ) {
	return {

		// Basic properties of the dialog window: title, minimum size.
		title: 'List Icon Properties',
		minWidth: 400,
		minHeight: 200,

		// Dialog window content definition.
		contents: [
			{
				// Definition of the Basic Settings dialog tab (page).
				id: 'tab-basic',
				label: 'Basic Settings',

				// The tab content.
				elements: [
					{
						// Text input field for the link text.
						type: 'text',
						id: 'linktext',
						label: 'Link Text',

						// Validation checking whether the field is not empty.
						validate: CKEDITOR.dialog.validate.notEmpty( "Link text field cannot be empty." ),

						// Called by the main setupContent method call on dialog initialization.
						setup: function( element ) {
							this.setValue( element.getText() );
						},

						// Called by the main commitContent method call on dialog confirmation.
						commit: function( element ) {
							element.setText( this.getValue() );
						}
					},
					{
						// Text input field for the URL (link).
						type: 'text',
						id: 'linkurl',
						label: 'URL',
						validate: CKEDITOR.dialog.validate.notEmpty( "URL field cannot be empty." ),

						// Called by the main setupContent method call on dialog initialization.
						setup: function( element ) {
							this.setValue( element.getAttribute( "linkurl" ) );
						},

						// Called by the main commitContent method call on dialog confirmation.
						commit: function( element ) {
							element.setAttribute( "linkurl", this.getValue() );
						}
					},
					{
						// Check box for is external flag.
					    type: 'checkbox',
					    id: 'isexternal',
					    label: 'External Link',
					    'default': 'checked',
					    onClick: function() {
					        // this = CKEDITOR.ui.dialog.checkbox
					        alert( 'Checked: ' + this.getValue() );
					    },

						// Called by the main setupContent method call on dialog initialization.
						setup: function( element ) {
							this.setValue( element.getAttribute( "isexternal" ) );
						},

						// Called by the main commitContent method call on dialog confirmation.
						commit: function( element ) {
							element.setAttribute( "isexternal", this.getValue() );
						}
					}
				]
			},

			// Definition of the Advanced Settings dialog tab (page).
			{
				id: 'tab-adv',
				label: 'Advanced Settings',
				elements: [
					{
						// Another text field for the abbr element id.
						type: 'text',
						id: 'id',
						label: 'Id',

						// Called by the main setupContent method call on dialog initialization.
						setup: function( element ) {
							this.setValue( element.getAttribute( "id" ) );
						},

						// Called by the main commitContent method call on dialog confirmation.
						commit: function ( element ) {
							var id = this.getValue();
							if ( id )
								element.setAttribute( 'id', id );
							else if ( !this.insertMode )
								element.removeAttribute( 'id' );
						}
					}
				]
			}
		],

		// Invoked when the dialog is loaded.
		onShow: function() {

			// Get the selection from the editor.
			var selection = editor.getSelection();

			// Get the element at the start of the selection.
			var element = selection.getStartElement();

			// Get the <hrclisticon> element closest to the selection, if it exists.
			if ( element )
				element = element.getAscendant( 'hrclisticon', true );

			// Create a new <hrclisticon> element if it does not exist.
			if ( !element || element.getName() != 'hrclisticon' ) {
				element = editor.document.createElement( 'hrclisticon' );

				// Flag the insertion mode for later use.
				this.insertMode = true;
			}
			else
				this.insertMode = false;

			// Store the reference to the <hrclisticon> element in an internal property, for later use.
			this.element = element;

			// Invoke the setup methods of all dialog window elements, so they can load the element attributes.
			if ( !this.insertMode )
				this.setupContent( this.element );
		},

		// This method is invoked once a user clicks the OK button, confirming the dialog.
		onOk: function() {

			// The context of this function is the dialog object itself.
			// http://docs.ckeditor.com/#!/api/CKEDITOR.dialog
			var dialog = this;

			// Create a new <hrclisticon> element.
			var hrclisticon = this.element;

			// Invoke the commit methods of all dialog window elements, so the <hrclisticon> element gets modified.
			this.commitContent( hrclisticon );

			// Finally, if in insert mode, insert the element into the editor at the caret position.
			if ( this.insertMode )
				editor.insertElement( hrclisticon );
		}
	};
});