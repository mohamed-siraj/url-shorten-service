function shortString(length : number, url : string) {
    let result : string = '';
    const characters : string = url;
    const charactersLength : number = characters.length;
    let counter : number = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result.replace('+', 'v').replace('/', 'x').replace('=', 'q');
}

export default shortString;
