export function RecipeLoginUp(){
    return(
        <div>
            <form>
                <div className="container-fluid">
                    <h2>Login</h2>
                    <dl>
                        <dt>Email</dt>
                        <dd><input type="email" required /></dd>
                        <dt>Password</dt>
                        <dd><input type="password" required /></dd>
                        <dt>Confirm Password</dt>
                        <dd><input type="password" required /></dd>
                        
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </dl>
                </div>
            </form>
        </div>
    )
}