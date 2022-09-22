export function SignedOutPage({ signIn }: any) {
  return (
    <div className="forms">
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetch("http://localhost:3001/sign-in", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                // @ts-ignore
                email: e.target.email.value,
                // @ts-ignore
                password: e.target.password.value,
              }),
            })
              .then((resp) => resp.json())
              .then((data) => {
                if (data.error) {
                  console.log("asdsad");
                  alert("error");
                } else {
                  console.log("asd");
                  signIn(data);
                }
              });
          }}
        >
          <div>
            <input
              type="text"
              id="email"
              placeholder="type your email"
              name="email"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="type your password"
              name="password"
            />
            <label htmlFor="password">Password</label>
          </div>
          <input type="submit" />
        </form>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetch("http://localhost:3001/sign-up", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                // @ts-ignore
                fullName: e.target.fullName.value,
                // @ts-ignore
                email: e.target.newEmail.value,
                // @ts-ignore
                password: e.target.newPassword.value,
              }),
            })
              .then((resp) => resp.json())
              .then((data) => {
                if (data.error) {
                  alert("error");
                } else {
                  signIn(data);
                }
              });
          }}
        >
          <div>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="type your fullname"
            />
            <label htmlFor="fullName">Full Name</label>
          </div>
          <div>
            <input
              type="text"
              id="newEmail"
              name="newEmail"
              placeholder="type your email"
            />
            <label htmlFor="newEmail">Email</label>
          </div>

          <div>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              placeholder="type your password"
            />
            <label htmlFor="newPassword">Password</label>
          </div>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
