/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.editorConfig=function(e){e.filebrowserBrowseUrl="/ckeditor/attachment_files",e.filebrowserFlashBrowseUrl="/ckeditor/attachment_files",e.filebrowserFlashUploadUrl="/ckeditor/attachment_files",e.filebrowserImageBrowseLinkUrl="/ckeditor/pictures",e.filebrowserImageBrowseUrl="/ckeditor/pictures",e.filebrowserImageUploadUrl="/ckeditor/pictures",e.filebrowserUploadUrl="/ckeditor/attachment_files",e.allowedContent=!0,e.toolbar=[{name:"document",items:["Source","-","Save","NewPage","Preview","Print","-","Templates"]},{name:"clipboard",items:["Cut","Copy","Paste","PasteText","PasteFromWord","-","Undo","Redo"]},{name:"editing",items:["Find","Replace","-","SelectAll","-","Scayt"]},{name:"forms",items:["Form","Checkbox","Radio","TextField","Textarea","Select","Button","ImageButton","HiddenField"]},"/",{name:"basicstyles",items:["Bold","Italic","Underline","Strike","Subscript","Superscript","-","RemoveFormat"]},{name:"paragraph",items:["NumberedList","BulletedList","-","Outdent","Indent","-","Blockquote","CreateDiv","-","JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock","-","BidiLtr","BidiRtl","Language"]},{name:"links",items:["Link","Unlink","Anchor"]},{name:"insert",items:["Image","Flash","Table","HorizontalRule","Smiley","SpecialChar","PageBreak","Iframe"]},"/",{name:"styles",items:["Styles","Format","Font","FontSize"]},{name:"colors",items:["TextColor","BGColor"]},{name:"tools",items:["Maximize","ShowBlocks"]},{name:"about",items:["About"]}],e.toolbar_mini=[{name:"paragraph",groups:["list","indent","blocks","align","bidi"],items:["NumberedList","BulletedList","-","Outdent","Indent","-","Blockquote","CreateDiv","-","JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock"]},{name:"styles",items:["Font","FontSize"]},{name:"colors",items:["TextColor","BGColor"]},{name:"basicstyles",groups:["basicstyles","cleanup"],items:["Bold","Italic","Underline","Strike","Subscript","Superscript","-","RemoveFormat"]},{name:"insert",items:["Image","Table","HorizontalRule","SpecialChar"]}]};