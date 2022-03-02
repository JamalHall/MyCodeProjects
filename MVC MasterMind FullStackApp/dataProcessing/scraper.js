const e = require('express')
const puppeteer = require('puppeteer')

async function scrape() {
    const browser = await puppeteer.launch({})
    const page = await browser.newPage()
    obj={}

   await page.goto('https://www.lotteryusa.com/ohio/rolling-cash-5/')  

        const date = await page.$eval('#main > div.o-container.o-container--sm > div > div.o-lusa-game-col__result-list > div.js-results-table > table > tbody > tr.c-result-card.c-result-card--squeeze.c-result-card--themed > th > time', e=>e.innerText)
           console.log(date)

        const prize = await page.$eval('#main > div.o-container.o-container--sm > div > div.o-lusa-game-col__result-list > div.js-results-table > table > tbody > tr.c-result-card.c-result-card--squeeze.c-result-card--themed > td.c-result-card__prize > dl > dd', e=>e.innerText)
           console.log(prize)
        
        const nodeList = await page.$eval('#main > div.o-container.o-container--sm > div > div.o-lusa-game-col__result-list > div.js-results-table > table > tbody > tr.c-result-card.c-result-card--squeeze.c-result-card--themed > td.c-result-card__result > div > ul', e=>e=JSON.stringify(e))

        console.log(nodeList)

        // let winNums = nodeList.forEach((e,i) => console.log(e,i))
        // console.log(winNums)

        // for(let i = 1; i < 6; i++){
        //     let element = await page.waitForSelector("#tab_content_7 > div:nth-child(2) > div > table > tbody > tr:nth-child(2)")
        //     let text = await page.evaluate(element => element.textContent, element)
        //     text = [...text].filter(e=>e!=' ').join('')
        //     obj[i]=text   
        // }
        //console.log(JSON.stringify(obj))
   browser.close()
}
scrape()