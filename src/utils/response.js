const processRequest = async (request) => {
    let response;
    try {
        const response = await request;
        const data = response.data;
        return data;
    } catch (e) {
        console.log(e,'entrar aqis');

        const typeErrors = Object.keys(e.response.data.errors);

        response = {
            error: true,
            status: e.response.status,
            message:  typeErrors.length ? e.response.data.errors[typeErrors[0]][0] : 'Ha ocurrido un error inesperado'

        }
        return response;
    }
}


const processThunk = (response, reject) => {
    if (response.error) {
        return reject(response);
    }
    return response;

}


export {
    processRequest,
    processThunk
}
