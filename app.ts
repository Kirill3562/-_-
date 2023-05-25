interface ResData {
  userId: number,
  id: number,
  title: string,
  body: string
}

class FifteenthTitle {
  static #URL = 'https://jsonplaceholder.typicode.com/posts'
  static #ID = 15

  static #get() {
    fetch(FifteenthTitle.#URL)
      .then(res=> {     
        if(res.ok) {    
          return res.json()
        }           
      })
      .then(resData => FifteenthTitle.#getTitleFromJson(resData))
      .then(title => console.log(title))
      .catch(({message}) => console.error(message))
  }

  static #getTitleFromJson(resData: ResData[]) {
    const itemWithTitle = resData.filter(item => item.id === FifteenthTitle.#ID)
    const title = itemWithTitle[0].title
    
    return {title} // или JSON.stringify(title) ?
  }

  run() {
    FifteenthTitle.#get()
  }

}

const fifteenthTitle = new FifteenthTitle()
fifteenthTitle.run()