import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {useMemo, useRef} from "react";

const Editor = ({ onChange, value}) => {
    const quillRef = useRef(null)

    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
                    [{ size: [] }],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['link', 'video'],
                    ['link', 'image', 'video'],
                    ['clean'],
                    ['code-block']
                ],
                handlers: {
                    image: imageHandler,
                },
            },
        }),
        [],
    )

    function imageHandler() {
        if (!quillRef.current) return

        const editor = quillRef.current.getEditor()
        const range = editor.getSelection()
        const value = prompt("Please enter the image URL")

        if (value && range) {
            editor.insertEmbed(range.index, "image", value, "user")
        }
    }

    return <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}/>;
};

export default Editor;