import React from 'react'

export const LIST_REGEX = {
    number: /^[0-9]+\. | {3}[0-9]+\. /gi,
    asterisk: /^\* | {3}\* /gi,
    minus: /^- | {3}- /gi,
    plus: /^\+ | {3}\+ /gi,
    nested: /^\s{3}(.+)/gi
}

export const INLINE_HEADER = {
    '1-IND': /(\s*?)#/gm,
    '2-IND': /(\s*?)##/gm,
    '3-IND': /(\s*?)###/gm,
    '4-IND': /(\s*?)####/gm,
    '5-IND': /(\s*?)#####/gm,
    '6-IND': /(\s*?)######/gm,

    1: /^(\s*?)#(.*)$/gm,
    2: /^(\s*?)##(.*)$/gm,
    3: /^(\s*?)###(.*)$/gm,
    4: /^(\s*?)####(.*)$/gm,
    5: /^(\s*?)#####(.*)$/gm,
    6: /^(\s*?)######(.*)$/gm
}
export const ITALIC_REGEX = [
    {
        baseRegex: /((\s+)|^)_[^_]*_/gi,
        divider: /_/gi
    },
    {
        baseRegex: /\*[^*]*\*/gi,
        divider: /\*/gi
    }
]
export const BOLD_REGEX = [
    {
        baseRegex: /__[._]*__/gi,
        divider: /__/gi
    },
    {
        baseRegex: /\*\*[.*]*\*\*/gi,
        divider: /\*\*/gi
    }
]
export const RULE_REGEX = {
    // underline: /^_+$|^_$/gi,
    // base: /^-+$|^-$|^\*+$|^\*$|^_+$|^_$/gi,
    BASE: /^(-+|\*+|_+)$/mg,
    EMPTY: /(?!\S)/g,
    LINE_BEFORE: /(?!\S)([\r\n]|\n)^(-+|\*+|_+)(\s*)$/mg,
    LINE_AFTER: /(\S+)$([\r\n]|\n)(^-+|^\*+|^_+)([\r\n]|\n)(?!\S)/gm,
    LINE_ALONE: /(?!\S)([\r\n]|\n)(^-+|^\*+|^_+)([\r\n]|\n)(?!\S)/mg
}

export const TABLE_REGEX = {
    // allRows: /^\|([^\S\r\n]*?)(.*)([^\S\r\n]*?)\||([^\S\r\n]*?)\|([^\S\r\n]*?)(.*)([^\S\r\n]*?)\|/gi,
    CONTENT: /^([^\S\r\n]*?)\|([^\S\r\n]*?)(.*)([^\S\r\n]*?)\||([^\S\r\n]*?)\|([^\S\r\n]*?)(.*)([^\S\r\n]*?)\|/gi,
    DIVIDER: /^([^\S\r\n]*?)\|([^\S\r\n]*?)(:?)(-+)(:?)([^\S\r\n]*?)\|([^\S\r\n]*?)(:?)(-+)(:?)([^\S\r\n]*?)\|/gi
}
export const EXTERNAL_SOURCE_REGEX = {
    image: /!\[(.*)]\((.*)\)/i,
    link: /((?!!).*)\[(.*)]\((.*)\)/i,

    linked_image: /\[!\[(.*)]\((.*)\)]\((.*)\)/i
}
export const CODE_BLOCK = {
    BASIC: /^```([^\S\r\n]*?)([a-zA-Z]*$)([\r\n]|\n)([\s\S]*?)```$/mg,
    NOT_GLOBAL: /^```([^\S\r\n]*?)([a-zA-Z]*$)([\r\n]|\n)([\s\S]*?)```$/m,
    TYPES: {
        javascript: /^```([^\S\r\n]*?)(javascript|jsx|js)([\r\n]|\n)([\s\S]*?)```$/m,
        json: /^```([^\S\r\n]*?)json([\r\n]|\n)([\s\S]*?)```$/m,
        html: /^```([^\S\r\n]*?)html([\r\n]|\n)([\s\S]*?)```$/m,
        console: /^```([^\S\r\n]*?)console\n([\s\S]*?)```$/m
    },
    REPLACED: /^<section class="(.+)">\n<pre>([\s\S]*?)<\/pre>\n<\/section>/gmi,
    WHITE_SPACE: /^(\s+)/gmi,
    KEYWORDS: [
        /^&nbsp;(\s*)import(\s*)/g,
        /(\s*)from(\s+)/g,
        /^&nbsp;(\s*)function(\s+)/g,
        /^&nbsp;(\s*)const(\s+)/g,
        /^&nbsp;(\s*)let(\s+)/g,
        /^&nbsp;(\s*)return(\s+)/g,
        /^&nbsp;(\s*)class(\s+)/g,

    ],
    DOM_KEYWORDS: [
        /(\s*)([a-zA-Z]+)\./g,
        /(\s+)React(\s+)/g,
        /(\s+)ReactDOM(\s+)/g
    ],
    STRING: /&quot;([\s\S]*?)&quot;/g,
    OBJECT: /{([\s\S]*?)}/
}
export const JSX_REGEX = {
    TAG: /&lt;(.+)&gt;/gim,
    SELF_CLOSING_TAG: /&lt;\/(.+)&gt;/gim,
    CLOSING_TAG: /&lt;(.+)\/&gt;/gim,
    STRING_ATTRIBUTE: /(\s*)([a-zA-Z]+)=&quot;([\s\S]*?)&quot;((\s)|&gt;)/igm,
    ATTRIBUTE: /(\s*)([a-zA-Z]+)={([\s\S]*?)}((\s+)|&gt;)/igm
}

export const HTML_REGEX = {
    TAG: /<(.+)>/gim,
    SELF_CLOSING_TAG: /&lt;\/(.+)&gt;/gim,
    CLOSING_TAG: /&lt;(.+)\/&gt;/gim,
    STRING_ATTRIBUTE: /(\s*)([a-zA-Z]+)=&quot;([\s\S]*?)&quot;((\s)|&gt;)/igm,
    ATTRIBUTE: /(\s*)([a-zA-Z]+)={([\s\S]*?)}((\s+)|&gt;)/igm
}

export const QUOTE_REGEX = {
    BASE: /^>(\s*)/gm
}