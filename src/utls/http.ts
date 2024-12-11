const HTTP = {
  SUCCESS_NO_CONTENT: 200,
  SUCCESS: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409
}

export const handleResponseStatus = (
  res: any,
  alert: any,
  successMsg: string
) => {
  const { SUCCESS, SUCCESS_NO_CONTENT, BAD_REQUEST, UNAUTHORIZED, CONFLICT } =
    HTTP
  switch (res.status) {
    case SUCCESS:
    case SUCCESS_NO_CONTENT:
      return alert.show({
        color: 'blue',
        title: 'Success',
        message: successMsg
      })
    case BAD_REQUEST:
      return alert.show({ color: 'red', title: 'Error', message: res.message })
    case UNAUTHORIZED:
      return alert.show({
        color: 'red',
        title: 'Unauthorized',
        message: res.message
      })
    case CONFLICT:
      return alert.show({
        color: 'red',
        title: 'Duplicate',
        message: res.message
      })
    default:
      break
  }
}
