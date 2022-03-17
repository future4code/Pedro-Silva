
class Validate {

    validateEmail(email: any) {
        var mailformat = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

        if (email.match(mailformat)) {
            return true;
        } else {
            return false;
        }
    }
}

export default new Validate()