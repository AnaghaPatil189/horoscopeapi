export const getHoroscope=(sign, timeframe)=>{
    return fetch(
    `https://sandipbgt.com/theastrologer/api/horoscope/${sign}/${timeframe}/`
    ).then((response)=>response.json())
    .then(({horoscope})=>horoscope);
};