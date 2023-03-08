export const setUserSession = (token, user) => {
    localStorage.setItem('token', token)
    sessionStorage.setItem('name', user.name)
    sessionStorage.setItem('surname', user.surname)
  }
  
  export const getToken = () => {
    const token = localStorage.getItem('token');
    const name = sessionStorage.getItem('name');
    const surname = sessionStorage.getItem('surname');
    if (token !== null) {
      return {
        authenticated: true,
        token: token,
        name: name,
        surname: surname
      };
    }
    return { authenticated: false };
  }
  
  export const removeUserSession = () => {
    localStorage.removeItem('token');
  }