import {
  mergeAttributes,
  Node,
  nodeInputRule,
  type CommandProps,
} from "@tiptap/core";

export interface ImageOptions {
  inline: boolean;
  allowBase64: boolean;
  HTMLAttributes: Record<string, unknown>;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    resizableImage: {
      setResizableImage: (options: {
        src: string;
        alt?: string;
        title?: string;
        width?: string;
        height?: string;
      }) => ReturnType;
    };
  }
}

export const inputRegex = /(?:^|\s)(!\[(.*?)]\((\S+)(?:\s+"(.*?)")?\))$/;

export const ResizableImage = Node.create<ImageOptions>({
  name: "resizableImage",

  defaultOptions: {
    inline: false,
    allowBase64: false,
    HTMLAttributes: {},
  },

  inline() {
    return this.options.inline;
  },

  group() {
    return this.options.inline ? "inline" : "block";
  },

  draggable: true,

  addAttributes() {
    return {
      src: { default: null },
      alt: { default: null },
      title: { default: null },
      width: { default: "auto" },
      height: { default: "auto" },
    };
  },

  parseHTML() {
    return [
      {
        tag: "div[data-type='resizable-image']",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    const { width, height, ...attrs } = HTMLAttributes;
    return [
      "div",
      {
        "data-type": "resizable-image",
        style: "display: inline-block; position: relative;",
      },
      [
        "img",
        mergeAttributes(this.options.HTMLAttributes, {
          ...attrs,
          style: `width: ${width}; height: ${height};`,
        }),
      ],
      [
        "span",
        {
          contenteditable: "false",
          class: "resize-handle",
          style: `
            position: absolute;
            right: 0;
            bottom: 0;
            width: 12px;
            height: 12px;
            background: rgba(0,0,0,0.5);
            cursor: se-resize;
            z-index: 10;
          `,
        },
      ],
    ];
  },

  addInputRules() {
    return [
      nodeInputRule({
        find: inputRegex,
        type: this.type,
        getAttributes: (match) => {
          const [, , alt, src, title] = match;
          return { src, alt, title };
        },
      }),
    ];
  },

  addCommands() {
    return {
      setResizableImage:
        (options: {
          src: string;
          alt?: string;
          title?: string;
          width?: string;
          height?: string;
        }) =>
        ({ chain }: CommandProps) => {
          return chain()
            .focus()
            .insertContent({ type: this.name, attrs: options })
            .run();
        },
    };
  },
});
