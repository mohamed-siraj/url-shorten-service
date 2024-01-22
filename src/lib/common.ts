function makeSortUrl(length : number, url : string) {
    let result = '';
    const characters = url;
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result.replace('+', 'v').replace('/', 'x').replace('=', 'q');
}

export default makeSortUrl;
