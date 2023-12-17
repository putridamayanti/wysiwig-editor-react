import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import {SourceEditing} from "@ckeditor/ckeditor5-source-editing";

ClassicEditor.builtinPlugins = []
ClassicEditor.builtinPlugins.push(SourceEditing)
const editor = ClassicEditor.create();

if (editor) {
    const model = editor.model;
}

const CkEditor = () => {
    return (
        <>
            <h2>Using CKEditor&nbsp;5 build in React</h2>
            <CKEditor
                editor={editor}
                config={{
                    toolbar: [
                        'heading', '|',
                        'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|',
                        'indent', 'outdent', '|',
                        'code', 'codeBlock', '|',
                        'blockQuote', '|',
                        'undo', 'redo', '|',
                        'sourceEditing'
                    ],
                }}
                data="<p>Hello from CKEditor&nbsp;5!</p>"
                onReady={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event ) => {
                    console.log( event );
                } }
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                } }
            />
        </>
    )
}

export default CkEditor;