'use client'
import { editorStore } from '@/store/editorStore';
import { Editor } from '@tinymce/tinymce-react';

const key = process.env.NEXT_PUBLIC_EDITOR_KEY
export default function EditorWYSWYG({ content }: { content: string }) {
    const { editContent } = editorStore()
    return (
        <Editor
            onEditorChange={(html) => editContent(html)}
            apiKey={key}
            init={editorOpts}
            initialValue={content}
        />
    );
}

const editorOpts = {
    plugins: 'anchor autolink charmap emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste',
    toolbar1: 'link image media table mergetags | align lineheight | checklist numlist bullist indent outdent ',
    toolbar2: 'undo redo | blocks fontsize | bold italic underline strikethrough',
    tinycomments_mode: 'embedded',
    resize: false,
    quickbars_insert_toolbar: false,
    statusbar: false,
    menubar: false,
}