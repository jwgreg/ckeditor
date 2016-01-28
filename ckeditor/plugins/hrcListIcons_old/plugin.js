CKEDITOR.plugins.add('hrclisticons', {
    // Register the icons.
    icons: 'hrcListIcons',
    // The plugin initialization logic goes inside this method.
    init: function(editor) {
        // Define and editory command that opens our dialog window
        editor.addCommand( 'hrclisticons', new CKEDITOR.dialogCommand('hrclisticonsdialog'));
        editor.ui.addButton( 'Hrclisticons', {
            label: 'Insert List Icons',
            command: 'hrclisticons',
            toolbar: 'insert'
        });

        if (editor.contextMenu ) {
            // Add a context menu group with the list icon dialog item.
            editor.addMenuGroup('listiconGroup');
            editor.addMenuItem('listiconItem', {
                label: 'Edit List Icon',
                icon: this.path + 'icons/hrcListIcons.png',
                command: 'hrclisticons',
                group: 'listiconGroup'
            });
            editor.contextMenu.addListener( function(element) {
                if(element.getAscendant('hrclisticons', true)) {
                    return{ listitconItem: CKEDITOR.TRISTATE_OFF };
                }
            });
        }

        // Register the dialog file
        CKEDITOR.dialog.add('hrclisticonsdialog', this.path + 'dialogs/hrclisticonsdialog.js'  );



   //      editor.widgets.add('hrclisticons', {
   //          button: 'Create an HRC Icon List',
   //          template:
   //          '<div class="iconListBox">' +
			// 	'<h3 id="listtitle">Test Title</h3>' +
			// 	'<ul class="insigniaParent">' +
			// 		'<li id="air_Defense_Artillery_Insignia">Air Defense</li>' +
			// 	'</ul>' +
			// '</div>',
			// dialog: 'hrclisticonsdialog',
			// init: function() {
			// 	var listtitle = this.element.getStyle('listitle');
			// }
   //      });
   //      CKEDITOR.dialog.add('hrclisticonsDialog', this.path + 'dialogs/hrclisticonsdialog.js');
    }
});
