const makePayment = (btn) => {
    const stripe = Stripe('pk_test_qkCQMaN7xcuxD4z2rZvZIRDR');
    const sessionId = btn.parentNode.querySelector('[name=sessionId]').value;

    stripe.redirectToCheckout({    
        sessionId: sessionId
    })
    .then(result => {
          
    })
    .catch(err => {
        console.log(err);
    });
};