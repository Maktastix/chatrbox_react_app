const FormInput = () => {
    return (
        <>
            <div className="form_input">
                <form className="message_input">
                    <label htmlFor="message"></label>
                    <textarea id="message" placeholder="Type Message..." required />
                    <button>Send</button>
                </form>
            </div>
        </>
    )
}

export default FormInput;