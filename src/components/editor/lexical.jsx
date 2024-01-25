'use client';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import TreeViewPlugin from '@/components/lexicalplugins/treeview';
import ToolbarPlugin from '@/components/lexicalplugins/toolbar';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { ListItemNode, ListNode } from '@lexical/list';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { TRANSFORMERS } from '@lexical/markdown';
import { exampleTheme } from '@/utils/themeLexical';

import ListMaxIndentLevelPlugin from '@/components/lexicalplugins/treeview';
import CodeHighlightPlugin from '@/components/lexicalplugins/codehighlight';
import AutoLinkPlugin from '@/components/lexicalplugins/autolink';

function Placeholder() {
	return <div className='editor-placeholder'>Enter some rich text...</div>;
}

const editorConfig = {
	// The editor theme
	namespace: 'Felipe',
	theme: exampleTheme,
	// Handling of errors during update
	onError(error) {
		throw error;
	},
	// Any custom nodes go here
	nodes: [
		HeadingNode,
		ListNode,
		ListItemNode,
		QuoteNode,
		CodeNode,
		CodeHighlightNode,
		TableNode,
		TableCellNode,
		TableRowNode,
		AutoLinkNode,
		LinkNode,
	],
};

export default function Editor() {
	return (
		<div className='p-20'>
			<LexicalComposer initialConfig={editorConfig}>
				<div className='editor-container'>
					<ToolbarPlugin />
					<div className='editor-inner'>
						<RichTextPlugin
							contentEditable={
								<ContentEditable className='editor-input' />
							}
							placeholder={<Placeholder />}
							ErrorBoundary={LexicalErrorBoundary}
						/>
						<HistoryPlugin />
						<TreeViewPlugin />
						<AutoFocusPlugin />
						<CodeHighlightPlugin />
						<ListPlugin />
						<LinkPlugin />
						<AutoLinkPlugin />
						<ListMaxIndentLevelPlugin maxDepth={7} />
						<MarkdownShortcutPlugin transformers={TRANSFORMERS} />
					</div>
				</div>
			</LexicalComposer>
		</div>
	);
}
