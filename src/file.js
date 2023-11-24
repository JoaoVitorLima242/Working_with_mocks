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

        return this.parseCSVToJSON(content)
    }

    static parseCSVToJSON(csvString) {
        return csvString
    }

    static isValid(csvString, option = DEFAULT_OPTION) {
        const [headers, ...linesWithoutHeader] = csvString.split(/\r?\n/)

        const isEmptyFile = linesWithoutHeader.length === 0
        const isHeaderInvalid = headers !== option.fields.join()
        const isFileLinesExceedingMaxLine = linesWithoutHeader.length > option.maxLine

        if (isEmptyFile || isFileLinesExceedingMaxLine) {
            return {
                error: error.FILE_LENGTH_ERROR_MESSAGE,
                valid: false
            }
        }

        if (isHeaderInvalid) {
            return {
                error: error.FILE_FIELDS_ERROR_MESSAGE,
                valid: false
            }
        }

        return {
            valid: true
        }

    }
}

module.exports = File