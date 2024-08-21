class CookieService {
    getCookie(name: string): string | null {
        // Construct the cookie string to search for
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);

        // Check if the cookie exists
        if (parts.length === 2) {
            return parts.pop()?.split(";").shift() || null; // Return the cookie value
        }
        return null; // Return null if the cookie is not found
    }
    getDecodedCookie = (cookieName: string) => {
        const value = `${document.cookie}`;
        const parts = value.split(`; ${cookieName}=`);

        if (parts.length === 2) {
            return parts.pop()?.split(";").shift();
        }
        return null;
    };
    getCookieData = (name: string) => {
        const getCookie = document.cookie
            .match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")
            ?.pop();

        return getCookie === "undefined" ? undefined : getCookie;
    };
    get(key: string) {
        const name = key + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    set(
        key: string,
        value: string,
        options?: {
            path?: string;
            maxAge?: number;
            secure?: boolean;
            httpOnly?: boolean;
        },
    ) {
        let cookieString = `${key}=${value};`;
        if (options?.path) {
            cookieString += `path=${options.path};`;
        }
        if (options?.maxAge) {
            cookieString += `max-age=${options.maxAge};`;
        }
        if (options?.secure) {
            cookieString += `secure;`;
        }
        // Note: httpOnly cannot be set via JavaScript
        document.cookie = cookieString;
    }

    remove(key: string) {
        this.set(key, "", { maxAge: -1 });
    }

    clearAll() {
        const cookies = document.cookie.split(";");

        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie =
                name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        }
    }
}

export default new CookieService();
