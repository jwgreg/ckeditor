CKEDITOR.dialog.add('contactsDialog', function (editor) {
	return {
		title: 'Contact Details',
		minWidth: 600,
		minHeight: 300,
		contents: [
			{
				id: 'tab-basic',
				label: 'Basic Settings',
				elements: [
					{
						type: 'html',
						html: 	'<div class="contactsHolder">' +
								'<table id="contactsTable" width="100%">' +
								'<tr>' +
								'<th>Name</th>' +
								'<th>Title</th>' +
								'<th>Email</th>' +
								'<th>Phone</th>' +
								'</tr>' +
								'<tr>' +
								'<td contenteditable></td>' +
								'<td contenteditable></td>' +
								'<td contenteditable></td>' +
								'<td contenteditable></td>' +
								'</tr>' +
								'</table>' +
								'<input type="button" class="addRowBtn" value="Add Row" onclick="addRow()" />' +
								'</div>',
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
									newHtml += '<td contenteditable>' +
												cell.getChildren().getItem(0).getText() +
												'</td>';
								}	
								newHtml += '</tr>';
							}
							newHtml += '</table><input type="button" class="addRowBtn" value="Add Row" onclick="addRow()" />';
							console.log(newHtml);
							$(",contactsHolder").html(newHtml);
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
							elements.setHtml(html);
							resetDialog();
						}

					}
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
			} else {
				this.insertMode = false;
			}

			this.element = element;
			if(!this.insertMode)
				this.setupContent(this.element);
            $(".contactsHolder td").html("");
		},

		onOk: function () {
			var dialog = this;
			dialog,commitContent(this.element);
			if (this.insertMode)
				editor.insertElement(this.element);
		},

		onCancel: function() {
			resetDialog();
		}

	};
});