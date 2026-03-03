export async function getAuthToken(
  request: any,
  email: string = 'demo@qa.com',
  password: string = 'demo123'
) {
  const response = await request.post(`/auth/login`, {
    data: {
      email: email,
      password: password,
    },
  });

  const {token} = await response.json(); 

  return token;
}
