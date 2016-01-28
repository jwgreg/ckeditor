CKEDITOR.editorConfig = function(config) {

	config.toolbar = [
		{
			name: 'document',
			groups: ['mode', 'document', 'doctools']
		}, {
			name: 'styles',
			groups: ['Styles', 'Format']
		}, {
			name: 'editing',
			groups: ['undo', 'find', 'format'],
		}
	];

};