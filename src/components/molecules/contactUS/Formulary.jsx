
import '../../Styles/molecules/contactUs/Formulary.css'

const Formulary = () => {


    return (
        <div className="formulary">
            <h1>Send us a brief message and we will get in touch with you for scheduling a short conversation with our experts. </h1>
            <form action="https://formsubmit.co/captiva.software@gmail.com" method="POST" >
                <label className="formulary-content">First name:
                    <input name="first-name" type="text" inputMode="text"
                        autoComplete="give-name" required/>

                </label>
                <label className="formulary-content">Last name:
                    <input name="last-name" type="text" inputMode="text"
                        autoComplete="give-name" required />
                </label>
                <label className="formulary-content">Work Email:
                    <input name="work-email" type="text" inputMode="text"
                         autoComplete="give-name" required/>
                </label>
                <label className="formulary-content">Phone number
                    <input name="phone-number" type="text" inputMode="text"
                        autoComplete="give-name" required/>
                </label>
                <label className="formulary-content">Role
                    <input name="role" type="text" inputMode="text"
                         autoComplete="give-name" required/>
                 </label>
                <label className="formulary-content">Tell us about your project
                    <input name="Tell-us" placeholder type="text" inputMode="text"
                        autoComplete="give-name" required/>
                </label>
                
                <button type="submit" value="Enviar">Enviar</button>


                <input type="hidden" name="_next" value= "http://localhost:5173"/>
                <input type="hidden" name="_captcha" value="false" />
            </form>
        </div>


    )
}

export default Formulary
