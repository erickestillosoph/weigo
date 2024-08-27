declare module "@everapi/freecurrencyapi-js" {
    class Freecurrencyapi {
        constructor(apiKey: string);
        latest(options: {
            base_currency: string;
            currencies: string;
        }): Promise<{ [key: string]: number }>;
    }
    export default Freecurrencyapi;
}
