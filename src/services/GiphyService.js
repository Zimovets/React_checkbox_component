const api_key = 'UORjohlZnLHHZSQCqPKqRHkhwhPZpmbN'
const api_base = 'http://api.giphy.com/v1/gifs/search?'

let gifsPath = []

export const getGifsbyKeyWord = async (keyWord) => {
    const res = await fetch(`${api_base}q=${keyWord}&api_key=${api_key}&limit=10`);
    if (!res.ok) {
        throw new Error('Something wrong');
    }
    return res.json();
}



