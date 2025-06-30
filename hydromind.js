const axios = require('axios')
const cheerio = require('cheerio')

let headers = {
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundarySdL9Qn2U0X3lmU7j",
    "origin": "https://mind.hydrooo.web.id",
    "referer": "https://mind.hydrooo.web.id/",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36"
}

async function getModels() {
    let { data } = await axios.get('https://mind.hydrooo.web.id', {headers})
    const $ = cheerio.load(data)
    let result = []
    $('button.model-option').each((i,e) => {
        result.push($(e).find('p').text().trim())
    })
    return result
}

async function hydromind(msg, model, system = '') {
    let formdata = new FormData()
    formdata.append('content', `User:  ${msg}`)
    formdata.append('model', model),
    formdata.append('system', system)
    let { data } = await axios.post('https://mind.hydrooo.web.id/v2/chat', formdata, {
        headers
    })

    return data.result.messages
}

module.exports = { hydromind }