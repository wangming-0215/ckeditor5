/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/* globals console, window, document */

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classic';
import EssentialsPreset from '@ckeditor/ckeditor5-presets/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';

ClassicEditor.create( document.querySelector( '#editor' ), {
	plugins: [ EssentialsPreset, Paragraph, Bold ],
	toolbar: [ 'undo', 'redo' ]
} )
.then( editor => {
	window.editor = editor;

	editor.editing.view.on( 'selectionChange', () => {
		editor.document.enqueueChanges( () => {} );
		console.log( 'selectionChange', ( new Date() ).getTime() );
	} );
} )
.catch( err => {
	console.error( err.stack );
} );
