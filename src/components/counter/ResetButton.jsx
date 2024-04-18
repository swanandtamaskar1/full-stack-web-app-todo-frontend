import './ResetButton.css'

export default function ResetButton({resetMethod}){

    return(
        <div>
            <div>
                <button className="resetButton"
                        onClick={() => resetMethod()}
                >Reset</button>  
            </div>   
        </div>
    )

}