/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function(config) {

    config.language = 'en';
    config.uiColor = '#E8E8E8';
    config.width = '100%'; //This will force the width of the CKEditor window to match the width of the HTMLEditorBody asp Textbox.
    config.disableNativeSpellChecker = true; //This disables the native CKEditor Spell Checker.
    config.title = false; //Disables the pop-up tooltip in th editor body area.

    //config.removePlugins = 'contextmenu,liststyle,tabletools,magicline';
    config.removePlugins = 'contextmenu,liststyle,magicline';
    config.removePlugins = 'scayt'; //This disables the Spell Check As You Type Plugin.
    config.removePlugins = 'magicline'; //This disables the magicline Plugin.

    config.contentsLangDirection = 'ltr';
    //config.bodyClass = 'contents'; //PCG. 10282014. Sets the class attribute to be used on the body element of the editing area. This can be useful when you intend to reuse the original CSS file you are using on your live website and want to assign the editor the same class as the section that will include the contents. In this way class-specific CSS rules will be enabled.
    config.fillEmptyBlocks = true; //PCG. 10282014. Whether a filler text (non-breaking space entity — &nbsp;) will be inserted into empty block elements in HTML output. 
    config.htmlEncodeOutput = false; // PCG. 10282014. Whether to escape HTML when the editor updates the original input element.
    config.ignoreEmptyParagraph = false; // PCG. 10282014. Whether the editor must output an empty value ('') if its content only consists of an empty paragraph.

    // Added new custom plugins and dependencies.
    config.extraPlugins = 'tabletools';
    config.extraPlugins = 'dialog';
    config.extraPlugins = 'contextmenu';
    config.extraPlugins = 'menu';
    config.extraPlugins = 'floatpanel';
    config.extraPlugins = 'panel';
    // config.extraPlugins = 'widget';
    // config.extraPlugins = 'hrcwidgetbootstrap';
    // config.extraPlugins = 'hrclisticons';
    // config.extraPlugins = 'abbr';
    // config.extraPlugins = 'hrccontacts';
    //config.extraPlugins = 'onchange';
    //config.minimumChangeMilliseconds = 100; // 100 milliseconds (default value)

    // The following options will prevent CKEditor from escaping nbsp gt lt amp ' " and other latin and greek characters.
    config.entities = false; // Set the editor to use HTML entities if switch is true.
    config.basicEntities = false; // This switch (if true) allows the editor to escape basic HTML entities in the document, including: &nbsp; &gt; &lt; &amp; 
    config.entities_greek = false; // Whether to convert some symbols, mathematical symbols, and Greek letters to HTML entities. 
    config.entities_latin = false; // Whether to convert some Latin characters (Latin alphabet No. 1, ISO 8859-1) to HTML entities.
    config.entities_additional = 'nbsp'; // A comma-separated list of additional entities to be used. Entity names or numbers must be used in a form that excludes the '&amp;' prefix and the ';' ending.

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

    // Prevent paragraph tags from being added to modified text.
    config.enterMode = CKEDITOR.ENTER_BR;
    config.shiftenterMode = CKEDITOR.ENTER_P;
    config.autoParagraph = false;


    config.extraPlugins = 'widget,hrcwidgetbootstrap,hrclisticon,abbr';


    // Toolbar configuration for Custom HRC CMS. The SOURCE menu bar option is NOT available to non-admin users.
    config.toolbar = [
        { 
            name: 'document', 
            items: ['Source', '-','Bold', '-', 'NumberedList', 'BulletedList', 'Table', '-', 'Link', 'Unlink', 'Anchor', '-', 'HrcwidgetbootstrapLeftCol', 
                    'HrcwidgetbootstrapRightCol', 'HrcwidgetbootstrapTwoCol', 'HrcwidgetbootstrapThreeCol', 'HrcwidgetbootstrapFourCol', '-', 'Hrclisticon', 
                    'Abbr']  
        }, { 
            name: 'styles',     
            items: ['Styles', 'Format', 'Font', 'FontSize'] 
        }, { 
            name: 'editing', 
            items: ['Undo', 'Redo', '-', 'Find', 'Replace', '-', 'SelectAll', 'RemoveFormat'] 
        }, { 
            name: 'clipboard', 
            items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord'] 
        }
    ];

    CKEDITOR.stylesSet.add( 'default',
                [
                { name: 'Heading 2', element: 'h2' },
                { name: 'Heading 3', element: 'h3' },
                { name: 'General Heading', element: 'p', attributes: { 'class': 'generalheading' } },
                { name: 'Indented', element: 'p', attributes: { 'class': 'indented' } },
                { name: 'FAQ-Q', element: 'p', attributes: { 'class': 'faq_q' } },
                { name: 'FAQ-A', element: 'p', attributes: { 'class': 'faq_a' } },
                { name: 'Callout-Light', element: 'div', attributes: { 'class': 'callout-light' } },
                { name: 'Callout-Dark', element: 'div', attributes: { 'class': 'callout-dark' } },
                { name: 'Graphic Bullet', element: 'ul', attributes: { 'class': 'graphicbullet' } },
                { name: 'Wide Spaced', element: 'ul', attributes: { 'class': 'widespaced' } },
                { name: 'Medium Spacing', element: 'ul', attributes: { 'class': 'mediumspacing' } },
                { name: 'No Spacing', element: 'ul', attributes: { 'class': 'nospacing' } },
                { name: 'Check List', element: 'ul', attributes: { 'class': 'checklist' } },
                { name: 'Data Table Bordered', element: 'table', attributes: { 'class': 'datatablebordered' } },
                { name: 'Table Border', element: 'table', attributes: { 'border': '1' } },
                { name: 'Data Table Row Color 1', element: 'tr', attributes: { 'class': 'datatablerowcolor1' } },
                { name: 'Data Table Row Color 2', element: 'tr', attributes: { 'class': 'datatablerowcolor2' } }
                ]
            );

    // The default plugins included in the basic setup define some buttons that
    // are not needed in a basic editor. They are removed here. Non-admin users will not have the Source button available to them.
    config.removeButtons = 'Print,Preview,Templates,NewPage,Save,Underline,Strike,Subscript,Superscript,Italic,Outdent,Indent,Blockquote,CreateDiv,JustifyLeft,JustifyRight,JustifyCenter,JustifyBlock,Image,Flash,HorizontalRule,Smiley,SpecialChar,SCAYT,PageBreak,Iframe,Format,Font,FontSize';

    // Dialog windows are also simplified.
    config.removeDialogTabs = 'link:advanced';







    // config.plugins = 'dialogui,dialog,about,a11yhelp,dialogadvtab,basicstyles,bidi,blockquote,clipboard,button,panelbutton,panel,floatpanel,colorbutton,colordialog,templates,menu,contextmenu,div,resize,toolbar,elementspath,enterkey,entities,popup,filebrowser,find,fakeobjects,flash,floatingspace,listblock,richcombo,font,forms,format,horizontalrule,htmlwriter,iframe,wysiwygarea,image,indent,indentblock,indentlist,smiley,justify,menubutton,language,link,list,liststyle,magicline,maximize,newpage,pagebreak,pastetext,pastefromword,preview,print,removeformat,save,selectall,showblocks,showborders,sourcearea,specialchar,scayt,stylescombo,tab,table,tabletools,undo,wsc,lineutils';
    // //config.extraPlugins = 'widget,hrcwidgetbootstrap,hrclisticons,hrccontactlist';
    // config.extraPlugins = 'widget,hrcwidgetbootstrap,hrclisticons,abbr';
    // config.toolbar = [{
    //     name: 'document',
    //     groups: ['mode', 'document', 'doctools'],
    //     //items: ['Source', 'Preview', '-', 'Save', 'NewPage', 'Print', '-', 'Hrclisticons', '-', 'Templates', 'HrcwidgetbootstrapLeftCol', 'HrcwidgetbootstrapRightCol', 'HrcwidgetbootstrapTwoCol', 'HrcwidgetbootstrapThreeCol', 'HrcwidgetbootstrapFourCol', 'HrcwidgetbootstrapThreeColStack', 'Hrccontactlist', '-']
    //     items: ['Source', 'Preview', '-', 'Save', 'NewPage', 'Print', '-', 'Hrclisticons', '-', 'Templates', 'HrcwidgetbootstrapLeftCol', 'HrcwidgetbootstrapRightCol', 'HrcwidgetbootstrapTwoCol', 'HrcwidgetbootstrapThreeCol', 'HrcwidgetbootstrapFourCol', 'HrcwidgetbootstrapThreeColStack', '-', 'Abbr']
    // }, {
    //     name: 'styles',
    //     items: ['Styles', 'Format']
    // }, {
    //     name: 'editing',
    //     groups: ['undo', 'find', 'format'],
    //     items: ['Undo', 'Redo', '-', 'Find', 'Replace', '-', 'SelectAll', 'RemoveFormat',]
    // }, {
    //     name: 'paragraph',
    //     groups: ['list', 'indent', 'blocks', 'align'],
    //     items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
    // }, {
    //     name: 'clipboard',
    //     groups: ['clipboard'],
    //     items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord']
    // }, ];
    

    // CKEDITOR.stylesSet.add('default', [{
    //         name: 'Heading 2',
    //         element: 'h2'
    //     }, {
    //         name: 'Heading 3',
    //         element: 'h3'
    //     }, {
    //         name: 'General Heading',
    //         element: 'p',
    //         attributes: {
    //             'class': 'generalheading'
    //         }
    //     }, {
    //         name: 'Indented',
    //         element: 'p',
    //         attributes: {
    //             'class': 'indented'
    //         }
    //     }, {
    //         name: 'FAQ-Q',
    //         element: 'p',
    //         attributes: {
    //             'class': 'faq_q'
    //         }
    //     }, {
    //         name: 'FAQ-A',
    //         element: 'p',
    //         attributes: {
    //             'class': 'faq_a'
    //         }
    //     }, {
    //         name: 'Callout-Light',
    //         element: 'div',
    //         attributes: {
    //             'class': 'callout-light'
    //         }
    //     }, {
    //         name: 'Callout-Dark',
    //         element: 'div',
    //         attributes: {
    //             'class': 'callout-dark'
    //         }
    //     }, {
    //         name: 'Graphic Bullet',
    //         element: 'ul',
    //         attributes: {
    //             'class': 'graphicbullet'
    //         }
    //     }, {
    //         name: 'Wide Spaced',
    //         element: 'ul',
    //         attributes: {
    //             'class': 'widespaced'
    //         }
    //     }, {
    //         name: 'Medium Spacing',
    //         element: 'ul',
    //         attributes: {
    //             'class': 'mediumspacing'
    //         }
    //     }, {
    //         name: 'No Spacing',
    //         element: 'ul',
    //         attributes: {
    //             'class': 'nospacing'
    //         }
    //     }, {
    //         name: 'Check List',
    //         element: 'ul',
    //         attributes: {
    //             'class': 'checklist'
    //         }
    //     }, {
    //         name: 'Data Table Bordered',
    //         element: 'table',
    //         attributes: {
                
    //         }
    //     }, {
    //         name: 'Table Border',
    //         element: 'table',
    //         attributes: {
    //             'border': '1'
    //         }
    //     }, {
    //         name: 'Data Table Row Color 1',
    //         element: 'tr',
    //         attributes: {
    //             'class': 'datatablerowcolor1'
    //         }
    //     }, {
    //         name: 'Data Table Row Color 2',
    //         element: 'tr',
    //         attributes: {
    //             'class': 'datatablerowcolor2'
    //         }
    //     }


    // ]);

    // //config.allowedContent = true;
    // config.allowedContent = {
    // $1: {
    //         // Use the ability to specify elements as an object.
    //         elements: CKEDITOR.dtd,
    //         attributes: true,
    //         styles: true,
    //         classes: true
    //     }
    // };
    // //config.extraAllowedContent = 'abbr[*];';
    // config.disallowedContent = 'table[*];';

    // // config.allowedContent = 'abbr[*]; div[*]; img[*];' +
    // //                         'p a div span h2 h3 h4 h5 h6 section article iframe object embed strong b i em cite pre blockquote small';

    // // config.allowedContent = 'p a div span h2 h3 h4 h5 h6 section article iframe object embed strong b i em cite pre blockquote small,' +
    // //                     'sub sup code ul ol li dl dt dd table thead tbody th tr td img caption mediawrapper br[href,src,target,width,height,colspan,' +
    // //         'span,alt,name,title,class,id,data-options]{text-align,float,margin}(*);' +
    // //         'abbr[*];';


};



