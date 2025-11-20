const zod = require('zod')

const inputSchema = zod.object({
    name : zod.string(),
    description : zod.string(),
    interest : zod.array(zod.string()),
    links :zod.object({
        linkedIn : zod.string(),
        instagram : zod.string()
    })
})

module.exports = {inputSchema}