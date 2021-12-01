'use-strict'

import {matchObject} from 'searchjs'
import fs from 'fs'

const TRANSACTION_DATA = './data/event.json'
const QUERY = './jsql/query.json'

function loadJson(path: string) {
    const json_data = fs.readFileSync(path, 'utf8')
    const json = JSON.parse(json_data)
    return json
}


class SearchFilter {

    run(): void {

        const transaction_data = loadJson(TRANSACTION_DATA)
        const query = loadJson(QUERY)

        let match = 0
        let miss = 0

        transaction_data.forEach(function(transaction) {
            if(matchObject(transaction, query)) {
                console.log(transaction)
                match++
            } else {
                miss++
            }
        })

        console.log(match + ' matching')
        console.log(miss + '  do not match')
    }
}

export function invokeFilter() {
    const searchFilter = new SearchFilter()
    searchFilter.run()
}

