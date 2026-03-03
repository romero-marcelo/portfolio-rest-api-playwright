import { APIRequestContext } from '@playwright/test';

export async function createAccount(request: APIRequestContext, token: string, currency = 'EUR') {
  const response = await request.post(`/accounts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      currency,
    },
  });
  const body = await response.json();
  return {
    response: response,
    body: body
  };
}
