let Money = ( {amount, currency} ) =>{
    
    function ValueStd ({amount, currency}){
        <h1> {amount}: {currency} </h1>
    }

    function ValueOld({amount, currency}){
        return(
            <>
           <b> {amount}: {currency} </b>
            <b> {amount}: {currency} </b>
            </>
        )
    }

    function ValueMoney({amount, currency}) {
        // const std = std;
        // if (std) {
        //     return <ValueStd />;
        // }
        return <ValueOld />;
    }

    return(
         <ValueMoney />
    )
}

export default Money;