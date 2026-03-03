import { APIRequestContext } from '@playwright/test';

export async function makeDeposit(
  request: APIRequestContext,
  token: string,
  accountId: string,
  amount: number,
  reference?: string
) {
  const response = await request.post(`/deposits`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      accountId,
      amount,
      reference,
    },
  });

  const body = await response.json();
  return {
    response: response,
    body: body
  };
}
