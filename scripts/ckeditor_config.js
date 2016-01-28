// CKEDITOR.editorConfig = function( config ) {

// 	// %REMOVE_START%
// 	// The configuration options below are needed when running CKEditor from source files.
// 	config.plugins = 'dialogui,dialog,about,a11yhelp,basicstyles,blockquote,clipboard,panel,floatpanel,menu,contextmenu,resize,button,toolbar,elementspath,enterkey,entities,popup,filebrowser,floatingspace,listblock,richcombo,format,horizontalrule,htmlwriter,wysiwygarea,image,indent,indentlist,fakeobjects,link,list,magicline,maximize,pastetext,pastefromword,removeformat,showborders,sourcearea,specialchar,menubutton,scayt,stylescombo,tab,table,tabletools,undo,wsc,lineutils,widget,bootstrapVisibility,autogrow,bbcode,colordialog,devtools,custimage,div,divarea,find,flash,floating-tools,forms,iframe,liststyle,onchange,pagebreak,placeholder,preview,showblocks,stylesheetparser,tableresize,uicolor';
// 	config.skin = 'moono';
// 	config.extraPlugins = 'widgetbootstrap,widgettemplatemenu';
// 	// %REMOVE_END%

// 	// Define changes to default configuration here.
// 	// For complete reference see:
// 	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

// 	The toolbar groups arrangement, optimized for two toolbar rows.
// 	config.toolbarGroups = [
// 		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
// 		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
// 		{ name: 'links' },
// 		{ name: 'insert' },
// 		{ name: 'forms' },
// 		{ name: 'tools' },
// 		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
// 		{ name: 'others' },
// 		'/',
// 		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
// 		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
// 		{ name: 'styles' },
// 		{ name: 'colors' },
// 		{ name: 'about' }
// 	];

// 	// Remove some buttons provided by the standard plugins, which are
// 	// not needed in the Standard(s) toolbar.
// 	// config.removeButtons = 'Flash,Table,Subscript,Superscript';

// 	// Set the most common block elements.
// 	// config.format_tags = 'p;h1;h2;h3;pre';

// 	// Simplify the dialog windows.
// 	// config.removeDialogTabs = 'image:advanced;link:advanced';


// 	// config.height = 400;
// 	// config.toolbar = [
// 	// 	[ 'Source', '-', 'NewPage', 'Preview', '-', 'Templates' ],
// 	// 	[ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ],
// 	// 	[ 'Bold' ],
// 	// 	[ 'WidgetTemplateMenu' ]
// 	//];
// 	// allowedContent: 'p a div span h2 h3 h4 h5 h6 section article iframe object embed strong b i em cite pre blockquote small,' +
//  //            'sub sup code ul ol li dl dt dd table thead tbody th tr td img caption mediawrapper br[href,src,target,width,height,colspan,' +
//  //            'span,alt,name,title,class,id,data-options]{text-align,float,margin}(*);';
// };

CKEDITOR.editorConfig = function(config) {
    config.language = 'en';
    config.uiColor = '#e8e8e8';
    config.width = '100%';
    config.disableNativeSpellChecker = true;
    config.title = false; //10062014. PCG. Disables the pop-up tooltip in th editor body area.
    config.removePlugins = 'contextmenu,liststyle,magicline';
    config.removePlugins = 'scayt'; //This disables the Spell Check As You Type Plugin.
    config.removePlugins = 'magicline'; //This disables the magicline Plugin.
    config.contentsLangDirection = 'ltr';
    config.fillEmptyBlocks = true; //PCG. 10282014. Whether a filler text (non-breaking space entity ó &nbsp;) will be inserted into empty block elements in HTML output. 
    config.htmlEncodeOutput = false; // PCG. 10282014. Whether to escape HTML when the editor updates the original input element.
    config.ignoreEmptyParagraph = false; // PCG. 10282014. Whether the editor must output an empty value ('') if its content only consists of an empty paragraph.

    config.extraPlugins = 'tabletools';
    //config.extraPlugins = 'dialog';
    config.extraPlugins = 'contextmenu';
    config.extraPlugins = 'menu';
    config.extraPlugins = 'floatpanel';
    config.extraPlugins = 'panel';
    config.extraPlugins = 'autogrow';
    config.extraPlugins = 'config';
    //config.extraPlugins = 'hrcwidgetbootstrap';
    config.extraPlugins = 'widgetbootstrap';

    config.entities = false; // PCG. 10282014. Set the editor to use HTML entities if switch is true.
    config.basicEntities = false; // PCG. 10282014. This switch (if true) allows the editor to escape basic HTML entities in the document, including: &nbsp; &gt; &lt; &amp; 
    config.entities_greek = false; // PCG. 10282014. Whether to convert some symbols, mathematical symbols, and Greek letters to HTML entities. 
    config.entities_latin = false; // PCG. 10282014. Whether to convert some Latin characters (Latin alphabet No. 1, ISO 8859-1) to HTML entities.
    config.entities_additional = 'nbsp'; // PCG. 10282014. A comma-separated list of additional entities to be used. Entity names or numbers must be used in a form that excludes the '&amp;' prefix and the ';' ending.

    config.allowedContent = {
        $1: {
            // Use the ability to specify elements as an object.
            elements: CKEDITOR.dtd,
            attributes: true,
            styles: true,
            classes: true
        }
    };
    config.disallowedContent = '*{font*}';

    config.enterMode = CKEDITOR.ENTER_BR;   
    config.shiftenterMode = CKEDITOR.ENTER_P;

    config.autoParagraph = false;
    config.plugins = 'dialogui,dialog,about,a11yhelp,basicstyles,blockquote,clipboard,panel,floatpanel,menu,contextmenu,resize,button,toolbar,elementspath,enterkey,entities,popup,filebrowser,floatingspace,listblock,richcombo,format,horizontalrule,htmlwriter,wysiwygarea,image,indent,indentlist,fakeobjects,link,list,magicline,maximize,pastetext,pastefromword,removeformat,showborders,sourcearea,specialchar,menubutton,scayt,stylescombo,tab,table,tabletools,undo,wsc,lineutils,widget,bootstrapVisibility,autogrow,bbcode,colordialog,devtools,custimage,div,divarea,find,flash,floating-tools,forms,iframe,liststyle,onchange,pagebreak,placeholder,preview,showblocks,stylesheetparser,tableresize,uicolor';
    config.height = 400;
    config.toolbar = [{
        name: 'document',
        items: ['Source', 'Preview', '-', 'Bold', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink', 'Anchor', '-', 'WidgetbootstrapLeftCol', 'WidgetbootstrapRightCol', 'WidgetbootstrapTwoCol', 'WidgetbootstrapThreeCol']
        //items: ['Source', 'Preview', '-', 'Bold', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink', 'Anchor', '-', 'HrcwidgetbootstrapLeftCol', 'HrcwidgetbootstrapRightCol', 'HrcwidgetbootstrapTwoCol', 'HrcwidgetbootstrapThreeCol', 'HrcwidgetbootstrapThreeColStack']
    }, {
        name: 'styles',
        items: ['Styles', 'Format', 'Font', 'FontSize']
    }, {
        name: 'editing',
        items: ['Undo', 'Redo', '-', 'Find', 'Replace', '-', 'SelectAll', 'RemoveFormat']
    }, {
        name: 'clipboard',
        items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord']
    }];

    CKEDITOR.stylesSet.add('default', [{
            name: 'Heading 2',
            element: 'h2'
        }, {
            name: 'Heading 3',
            element: 'h3'
        }, {
            name: 'General Heding',
            element: 'p',
            attributes: {
                'class': 'generalheading'
            }
        }, {
            name: 'Indented',
            element: 'p',
            attributes: {
                'class': 'indented'
            }
        }, {
            name: 'FAQ-Q',
            element: 'p',
            attributes: {
                'class': 'faq_q'
            }
        }, {
            name: 'FAQ-A',
            element: 'p',
            attributes: {
                'class': 'faq_a'
            }
        }, {
            name: 'Callout-Light',
            element: 'div',
            attributes: {
                'class': 'callout-light'
            }
        }, {
            name: 'Callout-Dark',
            element: 'div',
            attributes: {
                'class': 'callout-dark'
            }
        }, {
            name: 'Graphic Bullet',
            element: 'ul',
            attributes: {
                'class': 'graphicbullet'
            }
        }, {
            name: 'Wide Spaced',
            element: 'ul',
            attributes: {
                'class': 'widespaced'
            }
        }, {
            name: 'Medium Spacing',
            element: 'ul',
            attributes: {
                'class': 'mediumspacing'
            }
        }, {
            name: 'No Spacing',
            element: 'ul',
            attributes: {
                'class': 'nospacing'
            }
        }, {
            name: 'Check List',
            element: 'ul',
            attributes: {
                'class': 'checklist'
            }
        }, {
            name: 'Data Table Bordered',
            element: 'table',
            attributes: {
                'class': 'datatablebordered'
            }
        }, {
            name: 'Table Border',
            element: 'table',
            attributes: {
                'border': '1'
            }
        }, {
            name: 'Data Table Row Color 1',
            element: 'tr',
            attributes: {
                'class': 'datatablerowcolor1'
            }
        }, {
            name: 'Data Table Row Color 2',
            element: 'tr',
            attributes: {
                'class': 'datatablerowcolor2'
            }
        }


    ]);

	//config.removeButtons = 'Print,Preview,Templates,NewPage,Save,Underline,Strike,Subscript,Superscript,Italic,Outdent,Indent,Blockquote,CreateDiv,JustifyLeft,JustifyRight,JustifyCenter,JustifyBlock,Image,Flash,HorizontalRule,Smiley,SpecialChar,SCAYT,PageBreak,Iframe,Format,Font,FontSize';

	// Dialog windows are also simplified.
	//config.removeDialogTabs = 'link:advanced';


    // [ 'Source', '-', 'NewPage', 'Preview', '-', 'Templates' ],
    // [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ],
    // [ 'Bold' ],
    // [ 'insert' ]


    // config.toolbarGroups = [
    //   { name: 'clipboard',   groups: [ 'clipboard', 'undo', 'source' ] },
    //   { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
    //   { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
    //   { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align' ] },
    //   { name: 'links' },
    //   { name: 'insert' },
    //   { name: 'about' }
    // ];


};
