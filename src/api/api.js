const mockApi = {
    signup: (email, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === "raabinsingh@gmail.com") {
                    reject("User already exists");
                } else {
                    resolve("User registered successfully");
                }
            }, 1000);
        });
    },
    login: (email, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === "raabinsingh@gmail.com" && password === "password123") {
                    resolve("Login successful");
                } else {
                    reject("Invalid email or password");
                }
            }, 1000);
        });
    },
};

export default mockApi;
