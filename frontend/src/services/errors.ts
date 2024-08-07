class Errors {
    errors: { [key: string]: string[] } = {};

    getErrors() {
        return this.errors;
    }
    setErrors(response: { data: { errors: { [key: string]: string[] } } }) {
        // Specify the type for response
        this.errors = response.data.errors;
    }
    getKey(key: string) {
        return this.errors[key] !== undefined ? this.errors[key][0] : null;
    }
    reset() {
        this.errors = {};
    }
}

export default new Errors();
