export async function makeDeposit(
  request: any,
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
