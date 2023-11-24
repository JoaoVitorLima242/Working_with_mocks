const File = require('./src/file')
const {error} = require('./src/constant')
const assert = require('assert')

;(
    async () => {
        {
            const filePath = './mocks/emptyFile-invalid.csv'
            const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
            const result = File.csvToJson(filePath)

            await assert.rejects(result, expected)
        }

        {
            const filePath = './mocks/invalid-header.csv'
            const expected = new Error(error.FILE_FIELDS_ERROR_MESSAGE)
            const result = File.csvToJson(filePath)

            await assert.rejects(result, expected)
        }
        
        {
            const filePath = './mocks/fiveItems-invalid.csv'
            const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
            const result = File.csvToJson(filePath)

            await assert.rejects(result, expected)
        }
        {
            const filePath = './mocks/threeItems-valid.csv'
            const expected = [
                {"id": 1, "name": "João", "profession": "Engenheiro", "age": 30},
                {"id": 2, "name": "Maria", "profession": "Médica", "age": 35},
                {"id": 3, "name": "Carlos", "profession": "Professor", "age": 40}
            ]
            
            const result = File.csvToJson(filePath)

            assert.deepEqual(result, expected)
        }
    }
)()