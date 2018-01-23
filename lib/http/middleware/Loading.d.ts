export default class Loading {
    private timeoutSet;
    private spinnerTimeout;
    private requestsCounter;
    request(config: object): object;
    response(response: object): object;
    responseError(error: any): Promise<never>;
    private _turnOnSpinner();
    private _getSpinnerElement();
    private _turnOffSpinner();
}
