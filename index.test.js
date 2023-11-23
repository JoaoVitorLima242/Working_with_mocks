const File = require('./src/file');
const {error} = require('./src/constant');
const assert = require('assert:node')

(
    async () => {
        {
            const filePath = './mocks/emptyFile-invalid.csv'
            const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
            const result = File.csvToJson(filePath)

            await assert.rejects(result, expected)
        }
    }
)()