const HTTP = {
    SUCCESS_NO_CONTENT: 200,
    SUCCESS: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    CONFLICT: 409
}

export const handleResponseStatus = (res: any, alert: any, topic: string) => {
    const { SUCCESS, SUCCESS_NO_CONTENT, BAD_REQUEST, UNAUTHORIZED, CONFLICT } =
        HTTP
    switch (res.status) {
        case SUCCESS:
        case SUCCESS_NO_CONTENT:
            alert(`${topic} success`, { variant: 'success' })
            break
        case BAD_REQUEST:
            alert(`${topic} failed`, { variant: 'error' })
        case UNAUTHORIZED:
            alert(`Unauthorized for ${topic}`, { variant: 'error' })
        case CONFLICT:
            alert(`Record already exists for ${topic}`, { variant: 'warning' })
        default:
            break
    }
}
