let Money = ( {money} ) =>{
    console.log( {money} )
    ////////////////////////////////////////////////////////////
// nu pot sa afisez amount and currency in obiectul money
// am incercat sa scot {money: {amount, currency}}
// insa nu pot sa ajung la el  {product:{money}} sau  {money:{amount, currency}}
// IN modelul Money exista cele 2 valori si le pot afisa acolo
// aici nu sunt, poate nu corect il apelez
//  ---------------------------------------
    
    function ValueStd ({amount, currency}){
        <h1> {amount}: {currency} </h1>
    }

    function ValueOld({amount, currency}){
        return(
            <>
           <b>I am here in function on component ui Money</b>
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