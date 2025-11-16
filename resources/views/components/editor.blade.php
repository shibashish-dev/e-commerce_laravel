<div>
    <textarea id="{{ $name }}" name="{{ $name }}">{{ old($name, $value) }}</textarea>

</div>
@once
    @push('styles')
        <link rel="stylesheet" href="{{ asset('css/editor.css') }}">
    @endpush

    @push('scripts')
        <script type="module">
            /**
             * This configuration was generated using the CKEditor 5 Builder. You can modify it anytime using this link:
             * https://ckeditor.com/ckeditor-5/builder/?redirect=portal#installation/NoRgNARATAdAzPCkoHY4AYCsA2OLvrZEAsAHNpiqcZiFKZaelAJxT0jZTrpIQCmAOyTowoMOEkSw6ALqRSAEwDGKTACN+EWUA===
             */

            const {
                ClassicEditor,
                Alignment,
                AutoLink,
                Autosave,
                BalloonToolbar,
                BlockQuote,
                BlockToolbar,
                Bold,
                Bookmark,
                Code,
                CodeBlock,
                Essentials,
                FontBackgroundColor,
                FontColor,
                FontFamily,
                FontSize,
                GeneralHtmlSupport,
                Heading,
                Highlight,
                HorizontalLine,
                Indent,
                IndentBlock,
                Italic,
                Link,
                Mention,
                Paragraph,
                RemoveFormat,
                Strikethrough,
                Style,
                Subscript,
                Superscript,
                Table,
                TableCaption,
                TableCellProperties,
                TableColumnResize,
                TableProperties,
                TableToolbar,
                TextPartLanguage,
                Title,
                Underline,
                WordCount
            } = window.CKEDITOR;

            const LICENSE_KEY =
                'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NDM4OTc1OTksImp0aSI6IjM4YTlhYWM5LTQ5OTctNDUyNS05OGQyLWE4YWNhYWVmODQzZiIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6ImFhMWQ0NDEzIn0.Upygs_-YDqnbM3W8h1NTdtYCxyX5F7bULm5Js1WjjsJgzE2rkquCwG-w-hmGrfTlg8WqdJ-AI_fTTYrKQhGX9A';

            const editorConfig = {
                toolbar: {
                    items: [
                        'heading',
                        'style',
                        '|',
                        'fontSize',
                        'fontFamily',
                        'fontColor',
                        'fontBackgroundColor',
                        '|',
                        'bold',
                        'italic',
                        'underline',
                        '|',
                        'link',
                        'insertTable',
                        'highlight',
                        'blockQuote',
                        'codeBlock',
                        '|',
                        'alignment',
                        '|',
                        'outdent',
                        'indent'
                    ],
                    shouldNotGroupWhenFull: false
                },
                plugins: [
                    Alignment,
                    AutoLink,
                    Autosave,
                    BalloonToolbar,
                    BlockQuote,
                    BlockToolbar,
                    Bold,
                    Bookmark,
                    Code,
                    CodeBlock,
                    Essentials,
                    FontBackgroundColor,
                    FontColor,
                    FontFamily,
                    FontSize,
                    GeneralHtmlSupport,
                    Heading,
                    Highlight,
                    HorizontalLine,
                    Indent,
                    IndentBlock,
                    Italic,
                    Link,
                    Mention,
                    Paragraph,
                    RemoveFormat,
                    Strikethrough,
                    Style,
                    Subscript,
                    Superscript,
                    Table,
                    TableCaption,
                    TableCellProperties,
                    TableColumnResize,
                    TableProperties,
                    TableToolbar,
                    TextPartLanguage,
                    Title,
                    Underline,
                    WordCount
                ],
                balloonToolbar: ['bold', 'italic', '|', 'link'],
                blockToolbar: [
                    'fontSize',
                    'fontColor',
                    'fontBackgroundColor',
                    '|',
                    'bold',
                    'italic',
                    '|',
                    'link',
                    'insertTable',
                    '|',
                    'outdent',
                    'indent'
                ],
                fontFamily: {
                    supportAllValues: true
                },
                fontSize: {
                    options: [10, 12, 14, 'default', 18, 20, 22],
                    supportAllValues: true
                },
                heading: {
                    options: [{
                            model: 'paragraph',
                            title: 'Paragraph',
                            class: 'ck-heading_paragraph'
                        },
                        {
                            model: 'heading1',
                            view: 'h1',
                            title: 'Heading 1',
                            class: 'ck-heading_heading1'
                        },
                        {
                            model: 'heading2',
                            view: 'h2',
                            title: 'Heading 2',
                            class: 'ck-heading_heading2'
                        },
                        {
                            model: 'heading3',
                            view: 'h3',
                            title: 'Heading 3',
                            class: 'ck-heading_heading3'
                        },
                        {
                            model: 'heading4',
                            view: 'h4',
                            title: 'Heading 4',
                            class: 'ck-heading_heading4'
                        },
                        {
                            model: 'heading5',
                            view: 'h5',
                            title: 'Heading 5',
                            class: 'ck-heading_heading5'
                        },
                        {
                            model: 'heading6',
                            view: 'h6',
                            title: 'Heading 6',
                            class: 'ck-heading_heading6'
                        }
                    ]
                },
                htmlSupport: {
                    allow: [{
                        name: /^.*$/,
                        styles: true,
                        attributes: true,
                        classes: true
                    }]
                },
                initialData: `{!! $value !!}`,
                licenseKey: LICENSE_KEY,
                link: {
                    addTargetToExternalLinks: true,
                    defaultProtocol: 'https://',
                    decorators: {
                        toggleDownloadable: {
                            mode: 'manual',
                            label: 'Downloadable',
                            attributes: {
                                download: 'file'
                            }
                        }
                    }
                },
                mention: {
                    feeds: [{
                        marker: '@',
                        feed: [
                            /* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html */
                        ]
                    }]
                },
                menuBar: {
                    isVisible: true
                },
                placeholder: 'Type or paste your content here!',
                style: {
                    definitions: [{
                            name: 'Article category',
                            element: 'h3',
                            classes: ['category']
                        },
                        {
                            name: 'Title',
                            element: 'h2',
                            classes: ['document-title']
                        },
                        {
                            name: 'Subtitle',
                            element: 'h3',
                            classes: ['document-subtitle']
                        },
                        {
                            name: 'Info box',
                            element: 'p',
                            classes: ['info-box']
                        },
                        {
                            name: 'Side quote',
                            element: 'blockquote',
                            classes: ['side-quote']
                        },
                        {
                            name: 'Marker',
                            element: 'span',
                            classes: ['marker']
                        },
                        {
                            name: 'Spoiler',
                            element: 'span',
                            classes: ['spoiler']
                        },
                        {
                            name: 'Code (dark)',
                            element: 'pre',
                            classes: ['fancy-code', 'fancy-code-dark']
                        },
                        {
                            name: 'Code (bright)',
                            element: 'pre',
                            classes: ['fancy-code', 'fancy-code-bright']
                        }
                    ]
                },
                table: {
                    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
                }
            };


            const editorElement = document.getElementById(`{{ $name }}`);

            if (!editorElement) {
                console.error(`The element with ID "{{ $name }}" was not found.`);
            }
            ClassicEditor.create(editorElement, editorConfig).then(editor => {

                return editor;
            });
        </script>
    @endpush
@endonce
