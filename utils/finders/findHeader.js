import React from 'react'

import {INLINE_HEADER} from "../regex";

export function findInlineHeader(str) {
    let headers = []
    const split = str.split('\n')
    split.forEach((s, i) => {
        let found = false
        Object.keys(INLINE_HEADER).forEach(k => {
            if (s.match(INLINE_HEADER[k]) !== null && !found) {
                headers.push({
                    starts: i,
                    ends: i + 1,
                    length: 1,
                    content: s,
                    variant: k
                })
                found = true
            }
        })
    })

    return headers
}

