export const fetchURL = async(text) =>{
    const response = await fetch(`https://www.shareaholic.com/v2/share/shorten_link?apikey=8943b7fd64cd8b1770ff5affa9a9437b&url=${text}/&service[name]=shrlc`)
    const data = await response.json()
    // console.log(data);
    return data;
}