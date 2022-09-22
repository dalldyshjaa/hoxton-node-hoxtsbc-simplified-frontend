export function SignedInPage({ user }: any) {
  return (
    <div>
      <h1>{user.fullName}</h1>
      {user.transactions.map((transaction: any) => (
        <h1>{transaction.name}</h1>
      ))}
    </div>
  );
}
