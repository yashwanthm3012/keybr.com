start -> latex_document;

latex_document ->
    preamble
  | body
  | preamble_and_body
  ;

preamble_and_body -> preamble _ body;

preamble ->
    documentclass_declaration
  | package_import
  | preamble_command
  | preamble _ preamble_command
  ;

documentclass_declaration -> cmd_documentclass _ documentclass_options? _ "{" _ document_class _ "}";

documentclass_options -> "[" _ option_list _ "]";

option_list -> option (_ "," _ option)*;

option ->
    "10pt"
  | "11pt"
  | "12pt"
  | "a4paper"
  | "letter"
  | "twocolumn"
  | "landscape"
  | "draft"
  | "final"
  ;

document_class ->
    "article"
  | "report"
  | "book"
  | "letter"
  | "beamer"
  | "memoir"
  | "slides"
  ;

package_import -> cmd_usepackage _ package_options? _ "{" _ package_name _ "}";

package_options -> "[" _ option_list _ "]";

package_name ->
    "amsmath"
  | "amssymb"
  | "graphicx"
  | "hyperref"
  | "geometry"
  | "tikz"
  | "booktabs"
  | "natbib"
  | "biblatex"
  | "xcolor"
  ;

preamble_command ->
    title_command
  | author_command
  | date_command
  | newcommand_definition
  | newenvironment_definition
  | setlength_command
  | package_configuration
  ;

title_command -> cmd_title _ "{" _ title_text _ "}";
author_command -> cmd_author _ "{" _ author_text _ "}";
date_command -> cmd_date _ "{" _ date_text _ "}" | cmd_date _ "{" _ "}";

newcommand_definition -> cmd_newcommand _ "{" _ command_name _ "}" _ "[" _ arg_count _ "]" _ "{" _ command_definition _ "}";
newenvironment_definition -> cmd_newenvironment _ "{" _ environment_name _ "}" _ "{" _ begin_definition _ "}" _ "{" _ end_definition _ "}";

setlength_command -> cmd_setlength _ "{" _ length_parameter _ "}" _ "{" _ length_value _ "}";

package_configuration -> cmd_hypersetup _ "{" _ key_value_list _ "}";

key_value_list -> key_value_pair (_ "," _ key_value_pair)*;
key_value_pair -> key _ "=" _ value;

body -> begin_document _ content _ end_document;

begin_document -> cmd_begin _ "{" _ "document" _ "}";
end_document -> cmd_end _ "{" _ "document" _ "}";

content ->
    text_content
  | latex_environment
  | latex_command
  | content _ content
  ;

text_content -> [^\\]+;

latex_environment ->
    begin_environment _ environment_content _ end_environment
  ;

begin_environment -> cmd_begin _ "{" _ environment_name _ "}" environment_options?;
end_environment -> cmd_end _ "{" _ environment_name _ "}";

environment_options -> "[" _ option_list _ "]";

environment_name ->
    "abstract"
  | "align"
  | "align*"
  | "equation"
  | "equation*"
  | "figure"
  | "table"
  | "tabular"
  | "itemize"
  | "enumerate"
  | "description"
  | "proof"
  | "theorem"
  | "center"
  | "verbatim"
  | "tikzpicture"
  ;

environment_content -> [^\\]+;

latex_command ->
    section_command
  | formatting_command
  | reference_command
  | citation_command
  | math_command
  | special_command
  ;

section_command ->
    cmd_part _ "{" _ section_title _ "}"
  | cmd_chapter _ "{" _ section_title _ "}"
  | cmd_section _ "{" _ section_title _ "}"
  | cmd_subsection _ "{" _ section_title _ "}"
  | cmd_subsubsection _ "{" _ section_title _ "}"
  | cmd_paragraph _ "{" _ section_title _ "}"
  | cmd_subparagraph _ "{" _ section_title _ "}"
  ;

formatting_command ->
    cmd_textbf _ "{" _ text_content _ "}"
  | cmd_textit _ "{" _ text_content _ "}"
  | cmd_underline _ "{" _ text_content _ "}"
  | cmd_emph _ "{" _ text_content _ "}"
  | cmd_texttt _ "{" _ text_content _ "}"
  | cmd_small _ "{" _ text_content _ "}"
  | cmd_large _ "{" _ text_content _ "}"
  | cmd_footnote _ "{" _ text_content _ "}"
  ;

reference_command ->
    cmd_label _ "{" _ label_name _ "}"
  | cmd_ref _ "{" _ label_name _ "}"
  | cmd_pageref _ "{" _ label_name _ "}"
  | cmd_eqref _ "{" _ label_name _ "}"
  ;

citation_command ->
    cmd_cite _ "{" _ citation_key _ "}"
  | cmd_citep _ "{" _ citation_key _ "}"
  | cmd_citet _ "{" _ citation_key _ "}"
  | cmd_bibliography _ "{" _ bib_file _ "}"
  | cmd_bibliographystyle _ "{" _ bib_style _ "}"
  ;

math_command ->
    inline_math
  | display_math
  | equation_environment
  | math_function
  ;

inline_math -> "$" _ math_expression _ "$";
display_math -> "$$" _ math_expression _ "$$" | cmd_displaystyle _ "{" _ math_expression _ "}";
equation_environment -> cmd_begin _ "{" _ "equation" _ "}" _ math_expression _ cmd_end _ "{" _ "equation" _ "}";

math_expression -> [^$]+;

math_function ->
    cmd_frac _ "{" _ math_expression _ "}" _ "{" _ math_expression _ "}"
  | cmd_sqrt _ "{" _ math_expression _ "}"
  | cmd_int _ "_" _ "{" _ math_expression _ "}" _ "^" _ "{" _ math_expression _ "}"
  | cmd_sum _ "_" _ "{" _ math_expression _ "}" _ "^" _ "{" _ math_expression _ "}"
  | cmd_prod _ "_" _ "{" _ math_expression _ "}" _ "^" _ "{" _ math_expression _ "}"
  ;

special_command ->
    cmd_includegraphics _ "[" _ image_options _ "]" _ "{" _ image_path _ "}"
  | cmd_input _ "{" _ file_path _ "}"
  | cmd_include _ "{" _ file_path _ "}"
  | cmd_hspace _ "{" _ length_value _ "}"
  | cmd_vspace _ "{" _ length_value _ "}"
  | cmd_maketitle
  | cmd_tableofcontents
  | cmd_listoffigures
  | cmd_listoftables
  | cmd_newpage
  | cmd_clearpage
  ;

image_options -> image_option (_ "," _ image_option)*;
image_option ->
    "width" _ "=" _ length_value
  | "height" _ "=" _ length_value
  | "scale" _ "=" _ scale_factor
  | "angle" _ "=" _ rotation_angle
  ;

cmd_documentclass -> "\\documentclass";
cmd_usepackage -> "\\usepackage";
cmd_title -> "\\title";
cmd_author -> "\\author";
cmd_date -> "\\date";
cmd_begin -> "\\begin";
cmd_end -> "\\end";
cmd_part -> "\\part";
cmd_chapter -> "\\chapter";
cmd_section -> "\\section";
cmd_subsection -> "\\subsection";
cmd_subsubsection -> "\\subsubsection";
cmd_paragraph -> "\\paragraph";
cmd_subparagraph -> "\\subparagraph";
cmd_textbf -> "\\textbf";
cmd_textit -> "\\textit";
cmd_underline -> "\\underline";
cmd_emph -> "\\emph";
cmd_texttt -> "\\texttt";
cmd_small -> "\\small";
cmd_large -> "\\large";
cmd_footnote -> "\\footnote";
cmd_label -> "\\label";
cmd_ref -> "\\ref";
cmd_pageref -> "\\pageref";
cmd_eqref -> "\\eqref";
cmd_cite -> "\\cite";
cmd_citep -> "\\citep";
cmd_citet -> "\\citet";
cmd_bibliography -> "\\bibliography";
cmd_bibliographystyle -> "\\bibliographystyle";
cmd_includegraphics -> "\\includegraphics";
cmd_input -> "\\input";
cmd_include -> "\\include";
cmd_hspace -> "\\hspace";
cmd_vspace -> "\\vspace";
cmd_maketitle -> "\\maketitle";
cmd_tableofcontents -> "\\tableofcontents";
cmd_listoffigures -> "\\listoffigures";
cmd_listoftables -> "\\listoftables";
cmd_newpage -> "\\newpage";
cmd_clearpage -> "\\clearpage";
cmd_newcommand -> "\\newcommand";
cmd_newenvironment -> "\\newenvironment";
cmd_setlength -> "\\setlength";
cmd_hypersetup -> "\\hypersetup";
cmd_frac -> "\\frac";
cmd_sqrt -> "\\sqrt";
cmd_int -> "\\int";
cmd_sum -> "\\sum";
cmd_prod -> "\\prod";
cmd_displaystyle -> "\\displaystyle";

title_text -> [^}]+;
author_text -> [^}]+;
date_text -> [^}]*;
section_title -> [^}]+;
command_name -> "\\" [a-zA-Z]+;
command_definition -> [^}]+;
begin_definition -> [^}]+;
end_definition -> [^}]+;
length_parameter -> [a-zA-Z]+;
length_value -> [0-9.]+ ( "cm" | "mm" | "in" | "pt" );
key -> [a-zA-Z]+;
value -> [^,}]+;
label_name -> [^}]+;
citation_key -> [^}]+;
bib_file -> [^}]+;
bib_style -> [^}]+;
file_path -> [^}]+;
image_path -> [^}]+;
scale_factor -> [0-9.]+;
rotation_angle -> [0-9.]+;
arg_count -> [1-9];

_ -> [ \t\n\r]*;
