

export function Register () {
    return(
        <>
        <div className="container" style={{width: '25rem'}}>      
      <form>
    <img className="mb-4" src="" alt="" width="72" height="57"/>
    <h1 className="mb-3">Please Register</h1>

    <div className="form-floating">
      <input type="text" className="form-control" id="floatingInput1" placeholder="name@example.com"/>
      <label >User Name</label>
    </div>
    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label >Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
      <label >Password</label>
    </div>

    <br />
    <button className="btn btn-primary w-100 py-2" type="submit">Register</button>

  </form>
  </div>
        </>
    )
}