const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'Production'
? 'https://demo.akadigital.net/'
: 'http://localhost:8080/' ;

export default PAYMENT_SERVER_URL;


