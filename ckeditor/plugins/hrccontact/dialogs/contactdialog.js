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
						type: 'html',
						html: 	'<div class="contactsHolder">' +
								'<table id="contactsTable">' +
								'<th class="btnCol"></th>' +
								'<th class="btnCol"></th>' +
								'<th class="nameCol">Name</th>' +
								'<th class="titleCol">Title</th>' +
								'<th class="emailCol">Email</th>' +
								'<th class="phoneCol">Phone</th>' +
								'</table>' +
								'</div>'
								,
						setup: function (element) {
							var newHtml = '<table id="contactsTable" width="100%">' +
											'<tr>' +
											'<th>Name</th>' +
											'<th>Title</th>' +
											'<th>Email</th>' +
											'<th>Phone</th>' +
											'</tr>';
							var rows = element.getChildren();
							for (var r = 0; r < rows.count(); r++) {
								var row = rows.getItem(r);
								newHtml += '<tr>';
								cells = row.getChildren();
								for( var c = 0; c < cells.count(); c++) {
									var cell = cells.getItem(c);
									newHtml += '<td>' +
												cell.getChildren().getItem(0).getText() +
												'</td>';
								}	
								newHtml += '</tr>';
							}
							newHtml += '</table><input type="button" class="addRowBtn" value="Add Row" onclick="addRow()" />';
							console.log(newHtml);
							$(".contactsHolder").html(newHtml);
						},
						commit: function (element) {
							var html = '<contacts class="contactsTable">';
							$.each($(".contactsHolder").find("tr"), function(r) {
								var row = $(this);
								if(r != 0) {
									var item = '<div class="item">';
									$.each($(row).find("td"), function(c) {
										var cell = $(this);
										if (c == 0)
											item += '<div class="itemMain">' +
													$(cell).text() +
													'</div>';
										else
											item += '<div class="itemData">' +
													$(cell).text() +
													'</div>';
									});
									item += '</div>';
									html += item;
								}
							});
							html += '</contacts>';
							element.setHtml(html);
							resetDialog();
						}
					}, {
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
							this.setValue( element.getText() );
						},
						commit: function( element ) {
							element.setText( this.getValue() );
						}
					}, {
						type: 'text',
						id: 'contactEmail',
						label: 'Email:',
						validate: CKEDITOR.dialog.validate.notEmpty(" Email field required."),
						setup: function( element ) {
							this.setValue( element.getText() );
						},
						commit: function( element ) {
							element.setText( this.getValue() );
						}
					}, {
						type: 'text',
						id: 'contactPhone',
						label: 'Phone:',
						validate: CKEDITOR.dialog.validate.notEmpty(" Phone field required."),
						setup: function( element ) {
							this.setValue( element.getText() );
						},
						commit: function( element ) {
							element.setText( this.getValue() );
						}
					}, {
						type: 'button',
						id: 'contactAdd',
						label: 'Add Contact',
						onClick: function() {
							var dialog = this.getDialog();
							var nameOut = dialog.getContentElement('tab-basic', 'contactName').getValue();
							var titleOut = dialog.getContentElement('tab-basic', 'contactTitle').getValue();
							var emailOut = dialog.getContentElement('tab-basic', 'contactEmail').getValue();
							var phoneOut = dialog.getContentElement('tab-basic', 'contactPhone').getValue();

							var newRow = '<tr>';
							newRow += '<td class="btnCol"><button>edit</button></td>';
							newRow += '<td class="btnCol"><button>delete</button></td>';
							newRow += '<td class="nameCol">' + nameOut + '</td>';
							newRow += '<td class="titleCol">' + titleOut + '</td>';
							newRow += '<td class="emailCol">' + emailOut + '</td>';
							newRow += '<td class="phoneCol">' + phoneOut + '</td>';
							newRow += '</tr>';
							$("#contactsTable").append(newRow);

							// Clear Input fields
							dialog.getContentElement('tab-basic', 'contactName').setValue('');
							dialog.getContentElement('tab-basic', 'contactTitle').setValue('');
							dialog.getContentElement('tab-basic', 'contactEmail').setValue('');
							dialog.getContentElement('tab-basic', 'contactPhone').setValue('');
							// alert('Clicked - ' + nameOut + ', ' + titleOut + ', ' + emailOut + ', ' + phoneOut );
						}
					}
					// , 
					// {
					// 	// Text input field for the abbreviation text.
					// 	type: 'text',
					// 	id: 'abbr',
					// 	label: 'Abbreviation',

					// 	// Validation checking whether the field is not empty.
					// 	validate: CKEDITOR.dialog.validate.notEmpty( "Abbreviation field cannot be empty." ),

					// 	// Called by the main setupContent method call on dialog initialization.
					// 	setup: function( element ) {
					// 		this.setValue( element.getText() );
					// 	},

					// 	// Called by the main commitContent method call on dialog confirmation.
					// 	commit: function( element ) {
					// 		element.setText( this.getValue() );
					// 	}
					// }, {
					// 	// Text input field for the abbreviation title (explanation).
					// 	type: 'text',
					// 	id: 'title',
					// 	label: 'Explanation',
					// 	validate: CKEDITOR.dialog.validate.notEmpty( "Explanation field cannot be empty." ),

					// 	// Called by the main setupContent method call on dialog initialization.
					// 	setup: function( element ) {
					// 		this.setValue( element.getAttribute( "title" ) );
					// 	},

					// 	// Called by the main commitContent method call on dialog confirmation.
					// 	commit: function( element ) {
					// 		element.setAttribute( "title", this.getValue() );
					// 	}
					// }
				]
			}
		],

		onShow: function() {
			var selection = editor.getSelection();
			var element = selection.getStartElement();

			if(element)
				element = element.getAscendant('contacts', true);

			if(!element || element.getName() != 'contacts') {
				element = editor.document.createElement('div');
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
			resetDialog();
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