


export function extractQueryParams(query){

    return query
    .slice(1)
    .split("&")
    s.reduce((queryParams, param) => {
        const [key, value] = param.split("=")


        queryParams[key] = value

        return queryParams



    }, {})



}
