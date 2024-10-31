import {  useNavigate, useRouteError } from "react-router-dom"

export const ErrorPage=()=>{
    const error= useRouteError();
    const Navigate=useNavigate();

    const handleGoBack= ()=>{
        Navigate(-1);
    }
   if(error.status === 404){
    return (
        <section className="error-section">
            <div id="error-text">
                <figure>
                    <img 
                    src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
                    alt="404 page"
                    />
                </figure>
                <div className="text-center">
                    <p className="p-a">
                        . The Page you were looking for could not be found
                    </p>
                    <p className="p-b">... Back to previous page maam</p>
                </div>
                <button className="btn" onClick={handleGoBack}>
                go back
            </button>
            </div>
            {/* <NavLink to="/" className='btn'>
                Go to back home page
            </NavLink> */}
           
        </section>
    )
   }
}