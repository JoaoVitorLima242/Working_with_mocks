const { error } = require('./constant')
const { readFile } = require('fs/promises')

const DEFAULT_OPTION = {
    maxLine:3,
    fields: ['id', 'name', 'profession', 'age']
}

class File {
    static async csvToJson(filePath) {
        const content = await readFile(filePath, 'utf8')
        const validation = this.isValid(content)

        if (!validation.valid) throw Error(validation.error)
    }

    static isValid(csvString, option = DEFAULT_OPTION) {
        const [headers, ...linesWithoutHeader] = csvString.split(/\r?\n/)

        if (linesWithoutHeader.length === 0) {
            return {
                error: error.FILE_LENGTH_ERROR_MESSAGE,
                valid: false
            }
        }
    }
}

module.exports = File