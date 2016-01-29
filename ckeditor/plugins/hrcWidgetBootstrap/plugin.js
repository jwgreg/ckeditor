CKEDITOR.plugins.add('hrcwidgetbootstrap', {
    requires: 'widget',
    icons: 'hrcwidgetbootstrapLeftCol,hrcwidgetbootstrapRightCol,hrcwidgetbootstrapTwoCol,hrcwidgetbootstrapThreeCol,hrcwidgetbootstrapFourCol,hrcwidgetbootstrapThreeColStack,hrcwidgetbootstrapPanel',

    init: function(editor) {
        // Configurable Settings
        var allowedFull = editor.config.widgetbootstrap_allowedFull != undefined ? editor.config.widgetbootstrap_allowedFull :
            'p a div span h2 h3 h4 h5 h6 section article iframe object embed strong b i em cite pre blockquote small sub sup code ul ol li dl dt dd table thead tbody th tr td img caption mediawrapper br[href,src,target,width,height,colspan,span,alt,name,title,class,id,data-options]{text-align,float,margin}(*);'

        var showButtons = editor.config.widgetbootstrapShowButtons != undefined ? editor.config.widgetbootstrapShowButtons : true;

        allowedWidget = allowedFull;

        editor.widgets.add('hrcwidgetbootstrapLeftCol', {
        	button: showButtons ? 'Add HRC left column box' : undefined,
        	template:
             '<div class="row two-col-left">' +
                 '<div class="col-md-3 col-sidebar"><p><img src="http://placehold.it/300x250&text=Image" /></p></div>' +
                 '<div class="col-md-9 col-main"><p>Content</p></div>' +
             '</div>',
            editables: {
            	col1: {
            		selector: '.col-sidebar',
            		allowedContent: allowedWidget
            	},
            	col2: {
            		selector: '.col-main',
            		allowedContent: allowedWidget
            	}
            },

            allowedContent: allowedFull,

            upcast: function( element ) {
                return element.name == 'div' && element.hasClass( 'two-col-right-left' );
            }

        });

        editor.widgets.add( 'hrcwidgetbootstrapRightCol', {

            button: showButtons ? 'Add HRC right column box' : undefined,

            template:
                '<div class="row two-col-right">' +
                    '<div class="col-md-9 col-main"><p>Content</p></div>' +
                    '<div class="col-md-3 col-sidebar"><p><img src="http://placehold.it/300x250&text=Image" /></p></div>' +
                '</div>',
            editables: {
                col1: {
                    selector: '.col-sidebar',
                    allowedContent: allowedWidget
                },
                col2: {
                    selector: '.col-main',
                    allowedContent: allowedWidget
                }
            },

            allowedContent: allowedFull,

            upcast: function( element ) {
                return element.name == 'div' && element.hasClass( 'two-col-right' );
            }

        } );

        editor.widgets.add('hrcwidgetbootstrapTwoCol', {
            button: showButtons ? 'Add HRC two column box' : undefined,
            template: '<div class="row two-col">' +
                '<div class="col-md-6 col-xs-12 col-1" style="background: #bfb8ab;"><p><img src="http://placehold.it/400x225&text=Image" /></p><p>Text below</p></div>' +
                '<div class="col-md-6 col-xs-12 col-2"><p><img src="http://placehold.it/400x225&text=Image" /></p><p>Text below</p></div>' +
                '</div>',
            editables: {
                col1: {
                    selector: '.col-1',
                    allowedContent: allowedWidget
                },
                col2: {
                    selector: '.col-2',
                    allowedContent: allowedWidget
                }
            },
            allowedContent: allowedFull,
            upcast: function(element) {
                return element.name == 'div' && element.hasClass('three-col');
            }
        });

        editor.widgets.add('hrcwidgetbootstrapThreeCol', {

            button: showButtons ? 'Add HRC three column box' : undefined,

            template: '<div class="row three-col">' +
                '<div class="col-md-4 col-xs-12 col-1" style="background: #bfb8ab;"><p><img src="http://placehold.it/400x225&text=Image" /></p><p>Text below</p></div>' +
                '<div class="col-md-4 col-xs-12 col-2"><p><img src="http://placehold.it/400x225&text=Image" /></p><p>Text below</p></div>' +
                '<div class="col-md-4 col-xs-12 col-3"><p><img src="http://placehold.it/400x225&text=Image" /></p><p>Text below</p></div>' +
                '</div>',

            editables: {
                col1: {
                    selector: '.col-1',
                    allowedContent: allowedWidget
                },
                col2: {
                    selector: '.col-2',
                    allowedContent: allowedWidget
                },
                col3: {
                    selector: '.col-3',
                    allowedContent: allowedWidget
                }
            },

            allowedContent: allowedFull,

            upcast: function(element) {
                return element.name == 'div' && element.hasClass('three-col');
            }

        });

        editor.widgets.add('hrcwidgetbootstrapFourCol', {

            button: showButtons ? 'Add HRC four column box' : undefined,

            template: '<div class="row three-col">' +
                '<div class="col-md-3 col-xs-12 col-1" style="background: #bfb8ab;"><p><img src="http://placehold.it/400x225&text=Image" /></p><p>Text below</p></div>' +
                '<div class="col-md-3 col-xs-12 col-2"><p><img src="http://placehold.it/400x225&text=Image" /></p><p>Text below</p></div>' +
                '<div class="col-md-3 col-xs-12 col-3"><p><img src="http://placehold.it/400x225&text=Image" /></p><p>Text below</p></div>' +
                '<div class="col-md-3 col-xs-12 col-4"><p><img src="http://placehold.it/400x225&text=Image" /></p><p>Text below</p></div>' +
                '</div>',

            editables: {
                col1: {
                    selector: '.col-1',
                    allowedContent: allowedWidget
                },
                col2: {
                    selector: '.col-2',
                    allowedContent: allowedWidget
                },
                col3: {
                    selector: '.col-3',
                    allowedContent: allowedWidget
                },
                col4: {
                    selector: '.col-4',
                    allowedContent: allowedWidget
                }
            },

            allowedContent: allowedFull,

            upcast: function(element) {
                return element.name == 'div' && element.hasClass('three-col');
            }

        });
        
         editor.widgets.add('hrcwidgetbootstrapPanel', {
        	button: showButtons ? 'Add Panel' : undefined,
        	template:
             '<div class="panel panel-default">' +
                 '<div class="panel-heading">Enter Title Here</div>' +
                 '<div class="panel-body">Content Goes Here</div>' +
             '</div>',
            editables: {
            	col1: {
            		selector: '.panel-heading',
            		allowedContent: allowedWidget
            	},
            	col2: {
            		selector: '.panel-body',
            		allowedContent: allowedWidget
            	}
            },

            allowedContent: allowedFull,

            upcast: function( element ) {
                return element.name == 'div' && element.hasClass( 'panel-default' );
            }

        });


        // Append the widget's styles when in the CKEditor edit page,
        // added for better user experience.
        // Assign or append the widget's styles depending on the existing setup.
        if (typeof editor.config.contentsCss == 'object') {
            editor.config.contentsCss.push(CKEDITOR.getUrl(this.path + 'contents.css'));
        } else {
            editor.config.contentsCss = [editor.config.contentsCss, CKEDITOR.getUrl(this.path + 'contents.css')];
        }

    }
});
