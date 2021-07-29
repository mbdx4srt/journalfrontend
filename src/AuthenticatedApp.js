export default function AuthenticatedApp(props){

    function logout(){
        localStorage.removeItem("jwt")
        props.onLogout()

    }

    return (
     <>
        <h1> You are logged in </h1>
         <button onClick={logout}>Logout</button>
     </>
    )
}