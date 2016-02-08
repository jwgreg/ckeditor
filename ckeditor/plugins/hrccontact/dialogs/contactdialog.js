// Dialog definition.
CKEDITOR.dialog.add( 'contactDialog', function( editor ) {
	return {

		// Basic properties of the dialog window: title, minimum size.
		title: 'Contact Details',
		minWidth: 600,
		minHeight: 300,

		// Dialog window content definition.
		contents: [
			{
				// Definition of the Basic Settings dialog tab (page).
				id: 'tab-basic',
				label: 'Basic Settings',

				// The tab content.
				elements: [
                    {
						type: 'text',
						id: 'contactName',
						label: 'Name:',
						className: 'contactNameClass',
						validate: CKEDITOR.dialog.validate.notEmpty(" Name field required."),
						setup: function( element ) {
							this.setValue( element.getText() );
						},
						commit: function( element ) {
							element.setText( this.getValue() );
						}
					}, {
						type: 'text',
						id: 'contactTitle',
						label: 'Title:',
						validate: CKEDITOR.dialog.validate.notEmpty(" Title field required."),
						setup: function( element ) {
							this.setValue( element.getAttribute( "title" ) );
						},
						commit: function( element ) {
							element.setAttribute( "title", this.getValue() );
						}
					}, {
						type: 'text',
						id: 'contactEmail',
						label: 'Email:',
						validate: CKEDITOR.dialog.validate.notEmpty(" Email field required."),
						setup: function( element ) {
							this.setValue( element.getAttribute( "email" ) );
						},
						commit: function( element ) {
							element.setAttribute( "email", this.getValue() );
						}
					}, {
						type: 'text',
						id: 'contactPhone',
						label: 'Phone:',
						validate: CKEDITOR.dialog.validate.notEmpty(" Phone field required."),
						setup: function( element ) {
							this.setValue( element.getAttribute("phone") );
						},
						commit: function( element ) {
							element.setAttribute( "phone", this.getValue() );
						}
					}, {
						type: 'text',
						id: 'contactUrl',
						label: 'Url:',
						setup: function( element ) {
							this.setValue( element.getAttribute("url") );
						},
						commit: function( element ) {
							element.setAttribute( "url", this.getValue() );
						}
					}
				]
			}
		],

		onShow: function() {
			var selection = editor.getSelection();
			var element = selection.getStartElement();

			if(element)
				element = element.getAscendant('hrc-contact', true);

			if(!element || element.getName() != 'hrc-contact') {
				element = editor.document.createElement('hrc-contact');
				this.insertMode = true;
			} else {
				this.insertMode = false;
			}

			this.element = element;
			if(!this.insertMode)
				this.setupContent(this.element);
			$(".contactsHolder td").html("");
		},

		onOk: function() {
			var dialog = this;
			dialog.commitContent(this.element);
			if(this.insertMode)
				editor.insertElement(this.element);
		},
		onCancel: function() {
			//resetDialog();
		}
		// // Invoked when the dialog is loaded.
		// onShow: function() {

		// 	// Get the selection from the editor.
		// 	var selection = editor.getSelection();

		// 	// Get the element at the start of the selection.
		// 	var element = selection.getStartElement();

		// 	// Get the <abbr> element closest to the selection, if it exists.
		// 	if ( element )
		// 		element = element.getAscendant( 'abbr', true );

		// 	// Create a new <abbr> element if it does not exist.
		// 	if ( !element || element.getName() != 'abbr' ) {
		// 		element = editor.document.createElement( 'abbr' );

		// 		// Flag the insertion mode for later use.
		// 		this.insertMode = true;
		// 	}
		// 	else
		// 		this.insertMode = false;

		// 	// Store the reference to the <abbr> element in an internal property, for later use.
		// 	this.element = element;

		// 	// Invoke the setup methods of all dialog window elements, so they can load the element attributes.
		// 	if ( !this.insertMode )
		// 		this.setupContent( this.element );
		// },

		// // This method is invoked once a user clicks the OK button, confirming the dialog.
		// onOk: function() {

		// 	// The context of this function is the dialog object itself.
		// 	// http://docs.ckeditor.com/#!/api/CKEDITOR.dialog
		// 	var dialog = this;

		// 	// Create a new <abbr> element.
		// 	var abbr = this.element;

		// 	// Invoke the commit methods of all dialog window elements, so the <abbr> element gets modified.
		// 	this.commitContent( abbr );

		// 	// Finally, if in insert mode, insert the element into the editor at the caret position.
		// 	if ( this.insertMode )
		// 		editor.insertElement( abbr );
		// }
	};
});