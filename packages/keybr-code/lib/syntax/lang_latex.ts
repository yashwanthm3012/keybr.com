// Generated file, do not edit.

import { type Rules } from "../ast.ts";

export default {
  start: {
    ref: "latex_document",
  },
  latex_document: {
    alt: [
      {
        ref: "preamble",
      },
      {
        ref: "body",
      },
      {
        ref: "preamble_and_body",
      },
    ],
  },
  preamble_and_body: {
    seq: [
      {
        ref: "preamble",
      },
      " ",
      {
        ref: "body",
      },
    ],
  },
  preamble: {
    alt: [
      {
        ref: "documentclass_declaration",
      },
      {
        ref: "package_import",
      },
      {
        ref: "preamble_command",
      },
      {
        seq: [
          {
            ref: "preamble",
          },
          " ",
          {
            ref: "preamble_command",
          },
        ],
      },
    ],
  },
  documentclass_declaration: {
    seq: [
      {
        ref: "cmd_documentclass",
      },
      " ",
      {
        ref: "documentclass_options",
      },
      " ",
      "{",
      " ",
      {
        ref: "document_class",
      },
      " ",
      "}",
    ],
  },
  documentclass_options: {
    alt: [
      {
        seq: [
          "[",
          " ",
          {
            ref: "option_list",
          },
          " ",
          "]",
        ],
      },
      "",
    ],
  },
  option_list: {
    seq: [
      {
        ref: "option",
      },
      {
        f: 0.5,
        opt: {
          seq: [
            " ",
            ",",
            " ",
            {
              ref: "option",
            },
          ],
        },
      },
    ],
  },
  option: {
    alt: [
      "10pt",
      "11pt",
      "12pt",
      "a4paper",
      "letter",
      "twocolumn",
      "landscape",
      "draft",
      "final",
    ],
  },
  document_class: {
    alt: ["article", "report", "book", "letter", "beamer", "memoir", "slides"],
  },
  package_import: {
    seq: [
      {
        ref: "cmd_usepackage",
      },
      " ",
      {
        ref: "package_options",
      },
      " ",
      "{",
      " ",
      {
        ref: "package_name",
      },
      " ",
      "}",
    ],
  },
  package_options: {
    alt: [
      {
        seq: [
          "[",
          " ",
          {
            ref: "option_list",
          },
          " ",
          "]",
        ],
      },
      "",
    ],
  },
  package_name: {
    alt: [
      "amsmath",
      "amssymb",
      "graphicx",
      "hyperref",
      "geometry",
      "tikz",
      "booktabs",
      "natbib",
      "biblatex",
      "xcolor",
    ],
  },
  preamble_command: {
    alt: [
      {
        ref: "title_command",
      },
      {
        ref: "author_command",
      },
      {
        ref: "date_command",
      },
      {
        ref: "newcommand_definition",
      },
      {
        ref: "newenvironment_definition",
      },
      {
        ref: "setlength_command",
      },
      {
        ref: "package_configuration",
      },
    ],
  },
  title_command: {
    seq: [
      {
        ref: "cmd_title",
      },
      " ",
      "{",
      " ",
      {
        ref: "title_text",
      },
      " ",
      "}",
    ],
  },
  author_command: {
    seq: [
      {
        ref: "cmd_author",
      },
      " ",
      "{",
      " ",
      {
        ref: "author_text",
      },
      " ",
      "}",
    ],
  },
  date_command: {
    alt: [
      {
        seq: [
          {
            ref: "cmd_date",
          },
          " ",
          "{",
          " ",
          {
            ref: "date_text",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_date",
          },
          " ",
          "{",
          " ",
          "}",
        ],
      },
    ],
  },
  newcommand_definition: {
    seq: [
      {
        ref: "cmd_newcommand",
      },
      " ",
      "{",
      " ",
      {
        ref: "command_name",
      },
      " ",
      "}",
      " ",
      "[",
      " ",
      {
        ref: "arg_count",
      },
      " ",
      "]",
      " ",
      "{",
      " ",
      {
        ref: "command_definition",
      },
      " ",
      "}",
    ],
  },
  newenvironment_definition: {
    seq: [
      {
        ref: "cmd_newenvironment",
      },
      " ",
      "{",
      " ",
      {
        ref: "environment_name",
      },
      " ",
      "}",
      " ",
      "{",
      " ",
      {
        ref: "begin_definition",
      },
      " ",
      "}",
      " ",
      "{",
      " ",
      {
        ref: "end_definition",
      },
      " ",
      "}",
    ],
  },
  setlength_command: {
    seq: [
      {
        ref: "cmd_setlength",
      },
      " ",
      "{",
      " ",
      {
        ref: "length_parameter",
      },
      " ",
      "}",
      " ",
      "{",
      " ",
      {
        ref: "length_value",
      },
      " ",
      "}",
    ],
  },
  package_configuration: {
    seq: [
      {
        ref: "cmd_hypersetup",
      },
      " ",
      "{",
      " ",
      {
        ref: "key_value_list",
      },
      " ",
      "}",
    ],
  },
  key_value_list: {
    seq: [
      {
        ref: "key_value_pair",
      },
      {
        f: 0.5,
        opt: {
          seq: [
            " ",
            ",",
            " ",
            {
              ref: "key_value_pair",
            },
          ],
        },
      },
    ],
  },
  key_value_pair: {
    seq: [
      {
        ref: "key",
      },
      " ",
      "=",
      " ",
      {
        ref: "value",
      },
    ],
  },
  body: {
    seq: [
      {
        ref: "begin_document",
      },
      " ",
      {
        ref: "content",
      },
      " ",
      {
        ref: "end_document",
      },
    ],
  },
  begin_document: {
    seq: [
      {
        ref: "cmd_begin",
      },
      " ",
      "{",
      " ",
      "document",
      " ",
      "}",
    ],
  },
  end_document: {
    seq: [
      {
        ref: "cmd_end",
      },
      " ",
      "{",
      " ",
      "document",
      " ",
      "}",
    ],
  },
  content: {
    alt: [
      {
        ref: "text_content",
      },
      {
        ref: "latex_environment",
      },
      {
        ref: "latex_command",
      },
      {
        seq: [
          {
            ref: "content",
          },
          " ",
          {
            ref: "content",
          },
        ],
      },
    ],
  },
  text_content: "*",
  latex_environment: {
    seq: [
      {
        ref: "begin_environment",
      },
      " ",
      {
        ref: "environment_content",
      },
      " ",
      {
        ref: "end_environment",
      },
    ],
  },
  begin_environment: {
    seq: [
      {
        ref: "cmd_begin",
      },
      " ",
      "{",
      " ",
      {
        ref: "environment_name",
      },
      " ",
      "}",
      {
        f: 0.5,
        opt: {
          seq: [
            " ",
            {
              ref: "environment_options",
            },
          ],
        },
      },
    ],
  },
  end_environment: {
    seq: [
      {
        ref: "cmd_end",
      },
      " ",
      "{",
      " ",
      {
        ref: "environment_name",
      },
      " ",
      "}",
    ],
  },
  environment_options: {
    seq: [
      "[",
      " ",
      {
        ref: "option_list",
      },
      " ",
      "]",
    ],
  },
  environment_name: "*",
  environment_content: "*",
  latex_command: {
    alt: [
      {
        ref: "section_command",
      },
      {
        ref: "formatting_command",
      },
      {
        ref: "reference_command",
      },
      {
        ref: "citation_command",
      },
      {
        ref: "math_command",
      },
      {
        ref: "special_command",
      },
    ],
  },
  section_command: {
    alt: [
      {
        seq: [
          {
            ref: "cmd_part",
          },
          " ",
          "{",
          " ",
          {
            ref: "section_title",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_chapter",
          },
          " ",
          "{",
          " ",
          {
            ref: "section_title",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_section",
          },
          " ",
          "{",
          " ",
          {
            ref: "section_title",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_subsection",
          },
          " ",
          "{",
          " ",
          {
            ref: "section_title",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_subsubsection",
          },
          " ",
          "{",
          " ",
          {
            ref: "section_title",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_paragraph",
          },
          " ",
          "{",
          " ",
          {
            ref: "section_title",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_subparagraph",
          },
          " ",
          "{",
          " ",
          {
            ref: "section_title",
          },
          " ",
          "}",
        ],
      },
    ],
  },
  formatting_command: {
    alt: [
      {
        seq: [
          {
            ref: "cmd_textbf",
          },
          " ",
          "{",
          " ",
          {
            ref: "text_content",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_textit",
          },
          " ",
          "{",
          " ",
          {
            ref: "text_content",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_underline",
          },
          " ",
          "{",
          " ",
          {
            ref: "text_content",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_emph",
          },
          " ",
          "{",
          " ",
          {
            ref: "text_content",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_texttt",
          },
          " ",
          "{",
          " ",
          {
            ref: "text_content",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_small",
          },
          " ",
          "{",
          " ",
          {
            ref: "text_content",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_large",
          },
          " ",
          "{",
          " ",
          {
            ref: "text_content",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_footnote",
          },
          " ",
          "{",
          " ",
          {
            ref: "text_content",
          },
          " ",
          "}",
        ],
      },
    ],
  },
  reference_command: {
    alt: [
      {
        seq: [
          {
            ref: "cmd_label",
          },
          " ",
          "{",
          " ",
          {
            ref: "label_name",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_ref",
          },
          " ",
          "{",
          " ",
          {
            ref: "label_name",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_pageref",
          },
          " ",
          "{",
          " ",
          {
            ref: "label_name",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_eqref",
          },
          " ",
          "{",
          " ",
          {
            ref: "label_name",
          },
          " ",
          "}",
        ],
      },
    ],
  },
  citation_command: {
    alt: [
      {
        seq: [
          {
            ref: "cmd_cite",
          },
          " ",
          "{",
          " ",
          {
            ref: "citation_key",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_citep",
          },
          " ",
          "{",
          " ",
          {
            ref: "citation_key",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_citet",
          },
          " ",
          "{",
          " ",
          {
            ref: "citation_key",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_bibliography",
          },
          " ",
          "{",
          " ",
          {
            ref: "bib_file",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_bibliographystyle",
          },
          " ",
          "{",
          " ",
          {
            ref: "bib_style",
          },
          " ",
          "}",
        ],
      },
    ],
  },
  math_command: {
    alt: [
      {
        ref: "inline_math",
      },
      {
        ref: "display_math",
      },
      {
        ref: "equation_environment",
      },
      {
        ref: "math_function",
      },
    ],
  },
  inline_math: {
    seq: [
      "$",
      " ",
      {
        ref: "math_expression",
      },
      " ",
      "$",
    ],
  },
  display_math: {
    alt: [
      {
        seq: [
          "$$",
          " ",
          {
            ref: "math_expression",
          },
          " ",
          "$$",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_displaystyle",
          },
          " ",
          "{",
          " ",
          {
            ref: "math_expression",
          },
          " ",
          "}",
        ],
      },
    ],
  },
  equation_environment: {
    seq: [
      {
        ref: "cmd_begin",
      },
      " ",
      "{",
      " ",
      "equation",
      " ",
      "}",
      " ",
      {
        ref: "math_expression",
      },
      " ",
      {
        ref: "cmd_end",
      },
      " ",
      "{",
      " ",
      "equation",
      " ",
      "}",
    ],
  },
  math_expression: "*",
  math_function: {
    alt: [
      {
        seq: [
          {
            ref: "cmd_frac",
          },
          " ",
          "{",
          " ",
          {
            ref: "math_expression",
          },
          " ",
          "}",
          " ",
          "{",
          " ",
          {
            ref: "math_expression",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_sqrt",
          },
          " ",
          "{",
          " ",
          {
            ref: "math_expression",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_int",
          },
          " ",
          "_",
          " ",
          "{",
          " ",
          {
            ref: "math_expression",
          },
          " ",
          "}",
          " ",
          "^",
          " ",
          "{",
          " ",
          {
            ref: "math_expression",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_sum",
          },
          " ",
          "_",
          " ",
          "{",
          " ",
          {
            ref: "math_expression",
          },
          " ",
          "}",
          " ",
          "^",
          " ",
          "{",
          " ",
          {
            ref: "math_expression",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_prod",
          },
          " ",
          "_",
          " ",
          "{",
          " ",
          {
            ref: "math_expression",
          },
          " ",
          "}",
          " ",
          "^",
          " ",
          "{",
          " ",
          {
            ref: "math_expression",
          },
          " ",
          "}",
        ],
      },
    ],
  },
  special_command: {
    alt: [
      {
        seq: [
          {
            ref: "cmd_includegraphics",
          },
          " ",
          "[",
          " ",
          {
            ref: "image_options",
          },
          " ",
          "]",
          " ",
          "{",
          " ",
          {
            ref: "image_path",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_input",
          },
          " ",
          "{",
          " ",
          {
            ref: "file_path",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_include",
          },
          " ",
          "{",
          " ",
          {
            ref: "file_path",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_hspace",
          },
          " ",
          "{",
          " ",
          {
            ref: "length_value",
          },
          " ",
          "}",
        ],
      },
      {
        seq: [
          {
            ref: "cmd_vspace",
          },
          " ",
          "{",
          " ",
          {
            ref: "length_value",
          },
          " ",
          "}",
        ],
      },
      {
        ref: "cmd_maketitle",
      },
      {
        ref: "cmd_tableofcontents",
      },
      {
        ref: "cmd_listoffigures",
      },
      {
        ref: "cmd_listoftables",
      },
      {
        ref: "cmd_newpage",
      },
      {
        ref: "cmd_clearpage",
      },
    ],
  },
  image_options: {
    seq: [
      {
        ref: "image_option",
      },
      {
        f: 0.5,
        opt: {
          seq: [
            " ",
            ",",
            " ",
            {
              ref: "image_option",
            },
          ],
        },
      },
    ],
  },
  image_option: {
    alt: [
      {
        seq: [
          "width",
          " ",
          "=",
          " ",
          {
            ref: "length_value",
          },
        ],
      },
      {
        seq: [
          "height",
          " ",
          "=",
          " ",
          {
            ref: "length_value",
          },
        ],
      },
      {
        seq: [
          "scale",
          " ",
          "=",
          " ",
          {
            ref: "scale_factor",
          },
        ],
      },
      {
        seq: [
          "angle",
          " ",
          "=",
          " ",
          {
            ref: "rotation_angle",
          },
        ],
      },
    ],
  },
  cmd_documentclass: "\\documentclass",
  cmd_usepackage: "\\usepackage",
  cmd_title: "\\title",
  cmd_author: "\\author",
  cmd_date: "\\date",
  cmd_begin: "\\begin",
  cmd_end: "\\end",
  cmd_part: "\\part",
  cmd_chapter: "\\chapter",
  cmd_section: "\\section",
  cmd_subsection: "\\subsection",
  cmd_subsubsection: "\\subsubsection",
  cmd_paragraph: "\\paragraph",
  cmd_subparagraph: "\\subparagraph",
  cmd_textbf: "\\textbf",
  cmd_textit: "\\textit",
  cmd_underline: "\\underline",
  cmd_emph: "\\emph",
  cmd_texttt: "\\texttt",
  cmd_small: "\\small",
  cmd_large: "\\large",
  cmd_footnote: "\\footnote",
  cmd_label: "\\label",
  cmd_ref: "\\ref",
  cmd_pageref: "\\pageref",
  cmd_eqref: "\\eqref",
  cmd_cite: "\\cite",
  cmd_citep: "\\citep",
  cmd_citet: "\\citet",
  cmd_bibliography: "\\bibliography",
  cmd_bibliographystyle: "\\bibliographystyle",
  cmd_includegraphics: "\\includegraphics",
  cmd_input: "\\input",
  cmd_include: "\\include",
  cmd_hspace: "\\hspace",
  cmd_vspace: "\\vspace",
  cmd_maketitle: "\\maketitle",
  cmd_tableofcontents: "\\tableofcontents",
  cmd_listoffigures: "\\listoffigures",
  cmd_listoftables: "\\listoftables",
  cmd_newpage: "\\newpage",
  cmd_clearpage: "\\clearpage",
  cmd_newcommand: "\\newcommand",
  cmd_newenvironment: "\\newenvironment",
  cmd_setlength: "\\setlength",
  cmd_hypersetup: "\\hypersetup",
  cmd_frac: "\\frac",
  cmd_sqrt: "\\sqrt",
  cmd_int: "\\int",
  cmd_sum: "\\sum",
  cmd_prod: "\\prod",
  cmd_displaystyle: "\\displaystyle",
  title_text: "*",
  author_text: "*",
  date_text: "*",
  section_title: "*",
  command_name: "\\*",
  command_definition: "*",
  begin_definition: "*",
  end_definition: "*",
  length_parameter: "*",
  length_value: "*",
  key: "*",
  value: "*",
  label_name: "*",
  citation_key: "*",
  bib_file: "*",
  bib_style: "*",
  file_path: "*",
  image_path: "*",
  scale_factor: "*",
  rotation_angle: "*",
  arg_count: {
    alt: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  },
} as Rules;
